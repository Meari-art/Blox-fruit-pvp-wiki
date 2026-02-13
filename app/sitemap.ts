import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/fruits",
    "/weapons",
    "/fighting-styles",
    "/combos",
    "/builds",
    "/tier-list",
    "/methodologie-tier-list",
    "/blog",
    "/classement",
    "/contribuer",
    "/recherche",
    "/equipement-recommande",
    "/supporter",
    "/regles-communaute",
    "/roadmap",
    "/contact",
    "/about",
    "/faq",
    "/legal/cgu",
    "/legal/privacy",
    "/admin",
    "/admin/moderation",
    "/admin/users",
    "/admin/meta-history"
  ];

  return routes.map((route) => ({
    url: `${process.env.NEXT_PUBLIC_APP_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: route === "" ? 1 : 0.7
  }));
}
