import { defineCollection, z } from "@nuxt/content";

export const collections = {
  // 把 blog 目錄下所有 md 當成 posts 集合
  blog: defineCollection({
    type: "page",
    source: "blog/**/*.md",
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
      desktopCover: z.string(),
      mobileCover: z.string(),
      path: z.string(),
      tags: z.array(z.string()),
    }),
  }),
};
