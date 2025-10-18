const fs = require('fs');
const path = require('path');

/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;
    createTypes(`
        type PeriodJson {
            from: Date @dateformat
            to: Date @dateformat
            at: Date @dateformat
        }

        type EducationJson implements Node {
            period: PeriodJson!
        }

        type CertificationJson implements Node {
            period: PeriodJson!
        }

        type WorkJson implements Node {
            period: PeriodJson!
        }

        type ProjectJson implements Node {
            period: PeriodJson!
        }
    `);
};

const generateLlmsTxt = async (graphql) => {
    const result = await graphql(`
        query {
            metadata: metadataJson {
                name
                phone
                email
                location
                website
                role
                accounts {
                    linkedin
                    github
                }
            }

            cv: cvJson {
                summary
                achievements
                skillGroups {
                    category
                    skills
                }
            }

            work: allWorkJson(sort: { period: { from: DESC } }) {
                nodes {
                    title
                    body
                    featured
                    period {
                        from(formatString: "MMM YYYY")
                        to(formatString: "MMM YYYY")
                    }
                }
            }

            certifications: allCertificationJson(sort: { period: { at: DESC } }) {
                nodes {
                    title
                    body
                    period {
                        at(formatString: "MMM YYYY")
                    }
                }
            }

            education: allEducationJson(sort: { period: { from: DESC } }) {
                nodes {
                    title
                    body
                    featured
                    period {
                        from(formatString: "MMM YYYY")
                        to(formatString: "MMM YYYY")
                    }
                }
            }
        }
    `);

    if (result.errors) {
        throw result.errors;
    }

    const { metadata, cv, work, certifications, education } = result.data;

    const renderPeriod = (period) => {
        if (period.at) return period.at;
        const to = period.to || 'Present';
        return `${period.from} - ${to}`;
    };

    const markdown = `# ${metadata.name}
${metadata.role}

Email: ${metadata.email}
Phone: ${metadata.phone}
Location: ${metadata.location}
LinkedIn: ${metadata.accounts.linkedin}
GitHub: ${metadata.accounts.github}
Website: ${metadata.website}

## Professional Summary

${cv.summary}

## Key Achievements

${cv.achievements.map(a => `- ${a}`).join('\n')}

## Work Experience

${work.nodes.filter(job => job.featured).map(job => `### ${job.title}
*${renderPeriod(job.period)}*

${job.body}
`).join('\n')}

${work.nodes.filter(job => !job.featured).length > 0 ? `### Additional Roles

${work.nodes.filter(job => !job.featured).map(job => `**${job.title}** - ${renderPeriod(job.period)}`).join('\n')}
` : ''}

## Skills

${cv.skillGroups.map(group => `**${group.category}**: ${group.skills}`).join('\n\n')}

## Certifications

${certifications.nodes.map(cert => `- **${cert.title}** (${cert.period.at}): ${cert.body}`).join('\n')}

## Education

${education.nodes.filter(edu => edu.featured).map(edu => `### ${edu.title}
*${renderPeriod(edu.period)}*

${edu.body}
`).join('\n')}
`;

    const outputPath = path.join(__dirname, 'public', 'llms.txt');
    fs.writeFileSync(outputPath, markdown, 'utf-8');
    console.log(`✓ Generated llms.txt at ${outputPath}`);
};

/**
 * @type {import('gatsby').GatsbyNode['onPostBuild']}
 */
exports.onPostBuild = async ({ graphql }) => {
    await generateLlmsTxt(graphql);
};
