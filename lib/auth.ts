import { PrismaAdapter } from "@auth/prisma-adapter";
import { Role } from "@prisma/client";
import { type DefaultSession, type NextAuthOptions, getServerSession } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { prisma } from "@/lib/prisma";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: Role;
      reputationPoints: number;
      username: string;
    } & DefaultSession["user"];
  }
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: "database" },
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || ""
    })
  ],
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        session.user.role = (user as { role?: Role }).role ?? Role.USER;
        session.user.reputationPoints = (user as { reputationPoints?: number }).reputationPoints ?? 0;
        session.user.username = (user as { username?: string }).username ?? "player";
      }
      return session;
    }
  }
};

export async function auth() {
  return getServerSession(authOptions);
}

export function canModerate(role: Role) {
  return role === Role.MODERATOR || role === Role.ADMIN;
}

export function canPublishDirectly(role: Role) {
  return role === Role.ADMIN || role === Role.VERIFIED_CONTRIBUTOR;
}

export function canCreateContribution(role: Role, reputationPoints: number) {
  return role !== Role.USER || reputationPoints >= 10;
}
