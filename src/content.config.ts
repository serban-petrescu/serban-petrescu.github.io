import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const json = (folder: string) => glob({ pattern: "*.json", base: `./content/${folder}` });

// Periods are stored as ISO dates, and an open-ended period uses an empty string.
const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);
const openDate = z.union([isoDate, z.literal("")]);
const range = z.object({ from: isoDate, to: openDate.optional().default("") });

const project = defineCollection({
    loader: json("project"),
    schema: ({ image }) =>
        z.object({
            name: z.string(),
            type: z.enum(["work", "academic", "personal"]),
            role: z.string().optional(),
            outcome: z.string().optional(),
            order: z.number().optional(),
            highlighted: z.boolean().default(false),
            description: z.string(),
            technologies: z.array(z.object({ name: z.string() })).default([]),
            tags: z.array(z.string()).default([]),
            period: range,
            images: z.array(z.object({ path: image(), description: z.string() })).default([]),
            link: z.string().optional(),
            linkLabel: z.string().optional(),
            blog: z.string().optional(),
            blogLabel: z.string().optional(),
            github: z.string().optional(),
            youtube: z.string().optional(),
            facebook: z.string().optional(),
        }),
});

const work = defineCollection({
    loader: json("work"),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            body: z.string(),
            period: range,
            logo: image(),
            featured: z.boolean().default(false),
        }),
});

const education = defineCollection({
    loader: json("education"),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            body: z.string(),
            degree: z.string().optional(),
            period: range,
            logo: image(),
            featured: z.boolean().default(false),
        }),
});

const certification = defineCollection({
    loader: json("certification"),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            short: z.string(),
            body: z.string(),
            period: z.object({ at: isoDate }),
            logo: image(),
            link: z.string().optional(),
        }),
});

const talk = defineCollection({
    loader: json("talk"),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            event: z.string(),
            date: isoDate,
            abstract: z.string(),
            slides: z.string(),
            pdf: z.string(),
            image: image(),
        }),
});

const writing = defineCollection({
    loader: json("writing"),
    schema: z.object({
        title: z.string(),
        summary: z.string(),
        url: z.url(),
        source: z.enum(["wseng.ai", "Medium"]),
        date: isoDate,
        order: z.number(),
    }),
});

const cv = defineCollection({
    loader: json("cv"),
    schema: z.object({
        summary: z.string(),
        achievements: z.array(z.string()),
        skillGroups: z.array(z.object({ category: z.string(), skills: z.string() })),
    }),
});

const metadata = defineCollection({
    loader: json("metadata"),
    schema: ({ image }) =>
        z.object({
            name: z.string(),
            title: z.string(),
            description: z.string(),
            role: z.string(),
            tagline: z.string(),
            summary: z.string(),
            email: z.string(),
            phone: z.string(),
            location: z.string(),
            website: z.url(),
            writing: z.url(),
            repository: z.url(),
            cv: z.string(),
            avatar: image(),
            cover: image(),
            accounts: z.object({
                linkedin: z.url(),
                github: z.url(),
                stackoverflow: z.url(),
                twitter: z.url(),
                youtube: z.url(),
                medium: z.url(),
            }),
        }),
});

export const collections = { project, work, education, certification, talk, writing, cv, metadata };
