import { Role } from "@prisma/client";

export type SessionUser = {
  id: string;
  email: string;
  role: Role;
  reputationPoints: number;
};

export function canModerate(user: SessionUser) {
  return user.role === Role.MODERATOR || user.role === Role.ADMIN;
}

export function canReviewEdits(user: SessionUser) {
  return canModerate(user);
}

export function canPublishDirectly(user: SessionUser) {
  return user.role === Role.ADMIN || user.role === Role.VERIFIED_CONTRIBUTOR;
}

export function canCreateContribution(user: SessionUser) {
  return user.role !== Role.USER || user.reputationPoints >= 10;
}
