import { getCollection, getEntry, type CollectionEntry } from "astro:content";

export type Project = CollectionEntry<"project">;
export type Work = CollectionEntry<"work">;

const byDateDesc =
    <T>(date: (entry: T) => string) =>
    (a: T, b: T) =>
        date(b).localeCompare(date(a));

// JSON bodies separate paragraphs with a blank line.
export const paragraphs = (text: string) =>
    text
        .split(/\n\s*\n/)
        .map((paragraph) => paragraph.trim())
        .filter(Boolean);

export async function getMetadata() {
    const entry = await getEntry("metadata", "metadata");
    if (!entry) throw new Error("content/metadata/metadata.json is missing");
    return entry.data;
}

export async function getCv() {
    const entry = await getEntry("cv", "cv");
    if (!entry) throw new Error("content/cv/cv.json is missing");
    return entry.data;
}

export async function getSelectedWork() {
    const projects = await getCollection("project", ({ data }) => data.highlighted);
    return projects.sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99));
}

export async function getArchive() {
    const projects = await getCollection("project", ({ data }) => !data.highlighted);
    return projects.sort(byDateDesc((p) => p.data.period.from));
}

export async function getWork() {
    return (await getCollection("work")).sort(byDateDesc((w) => w.data.period.from));
}

export async function getEducation() {
    return (await getCollection("education")).sort(byDateDesc((e) => e.data.period.from));
}

export async function getCertifications() {
    return (await getCollection("certification")).sort(byDateDesc((c) => c.data.period.at));
}

export async function getTalks() {
    return (await getCollection("talk")).sort(byDateDesc((t) => t.data.date));
}

export async function getWriting() {
    return (await getCollection("writing")).sort((a, b) => a.data.order - b.data.order);
}
