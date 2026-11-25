import type { APIRoute } from "astro";

import { monthRange, monthYear } from "../lib/dates";
import { getCertifications, getCv, getEducation, getMetadata, getWork } from "../lib/content";

const list = (items: string[]) => items.map((item) => `- ${item}`).join("\n");

export const GET: APIRoute = async () => {
    const [metadata, cv, work, certifications, education] = await Promise.all([
        getMetadata(),
        getCv(),
        getWork(),
        getCertifications(),
        getEducation(),
    ]);

    const featuredWork = work.filter((job) => job.data.featured);
    const otherWork = work.filter((job) => !job.data.featured);
    const degrees = education.filter((item) => item.data.featured);

    const sections = [
        `# ${metadata.name}\n${metadata.role}`,
        [
            `Email: ${metadata.email}`,
            `Phone: ${metadata.phone}`,
            `Location: ${metadata.location}`,
            `LinkedIn: ${metadata.accounts.linkedin}`,
            `GitHub: ${metadata.accounts.github}`,
            `Website: ${metadata.website}`,
        ].join("\n"),
        `## Professional Summary\n\n${cv.summary}`,
        `## Key Achievements\n\n${list(cv.achievements)}`,
        `## Work Experience\n\n${featuredWork
            .map((job) => `### ${job.data.title}\n*${monthRange(job.data.period)}*\n\n${job.data.body}`)
            .join("\n\n")}`,
        `### Additional Roles\n\n${list(otherWork.map((job) => `**${job.data.title}**, ${monthRange(job.data.period)}`))}`,
        `## Skills\n\n${cv.skillGroups.map((group) => `**${group.category}**: ${group.skills}`).join("\n\n")}`,
        `## Certifications\n\n${list(certifications.map((cert) => `**${cert.data.title}** (${monthYear(cert.data.period.at)})`))}`,
        `## Education\n\n${list(degrees.map((item) => `**${item.data.degree}**, ${item.data.title} (${monthRange(item.data.period)})`))}`,
    ];

    return new Response(sections.join("\n\n") + "\n", {
        headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
};
