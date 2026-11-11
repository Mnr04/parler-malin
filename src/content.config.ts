import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
        title: z.string().optional().default('Sans titre'),
        description: z.string().optional().default(''),
        pubDate: z.coerce.date().optional(),
        date: z.coerce.date().optional(),
        heroImage: z.string().optional(),
    }).passthrough(), 
});

export const collections = { blog };