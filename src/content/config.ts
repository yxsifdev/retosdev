import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    topic: z.string(),
    description: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()),
  }),
});

const learnCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/learn' }),
  schema: z.object({
    title: z.string(),
    topic: z.string(),
    description: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog: blogCollection,
  learn: learnCollection,
};
