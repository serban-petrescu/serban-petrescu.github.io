import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "./cv.scss";

export default function CV({ data }) {
    const { metadata, work, certifications, education, cv } = data;
    
    const renderPeriod = (period) => {
        if (period.at) return period.at;
        if (!period.to || period.to === "Invalid date") return `${period.from} - Present`;
        return `${period.from} - ${period.to}`;
    };

    const handlePrint = () => {
        window.print();
    };

    const avatar = getImage(metadata.avatar);

    return (
        <div className="cv-container">
            <button className="cv-print-button" onClick={handlePrint} aria-label="Print CV">
                🖨️
            </button>
            
            <header className="cv-header">
                {avatar && (
                    <div className="cv-avatar">
                        <GatsbyImage image={avatar} alt={metadata.name} />
                    </div>
                )}
                <div className="cv-header-content">
                    <h1>{metadata.name}</h1>
                    <div className="cv-title">{metadata.role}</div>
                    <div className="cv-contact">
                        <span><a href={`mailto:${metadata.email}`}>{metadata.email}</a></span>
                        <span><a href={`tel:${metadata.phone}`}>{metadata.phone}</a></span>
                        <span>{metadata.location}</span>
                        <span><a href={metadata.accounts.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
                        <span><a href={metadata.accounts.github} target="_blank" rel="noopener noreferrer">GitHub</a></span>
                    </div>
                </div>
            </header>

            <section className="cv-section cv-summary">
                <h2>Professional Summary</h2>
                {cv.summary.split('\n\n').map((para, idx) => (
                    <p key={idx}>{para}</p>
                ))}
            </section>

            <section className="cv-section">
                <h2>Key Achievements</h2>
                <ul className="cv-achievements">
                    {cv.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                    ))}
                </ul>
            </section>

            <section className="cv-section cv-work-experience">
                <h2>Work Experience</h2>
                {work.nodes.filter(job => job.featured).map((job, idx) => (
                    <div key={idx} className="cv-item">
                        <div className="cv-item-header">
                            <h3>{job.title}</h3>
                            <span className="cv-period">{renderPeriod(job.period)}</span>
                        </div>
                        <div className="cv-item-body" dangerouslySetInnerHTML={{ __html: job.body.replace(/\n\n/g, '<br/><br/>') }} />
                    </div>
                ))}
                {work.nodes.filter(job => !job.featured).length > 0 && (
                    <div className="cv-other-roles">
                        <h3>Additional Roles</h3>
                        {work.nodes.filter(job => !job.featured).map((job, idx) => (
                            <div key={idx} className="cv-role-compact">
                                <span className="cv-role-title">{job.title}</span>
                                <span className="cv-role-period">{renderPeriod(job.period)}</span>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            <section className="cv-section cv-two-column">
                <div className="cv-column">
                    <h2>Skills</h2>
                    <div className="cv-skills">
                        {cv.skillGroups.map((group, idx) => (
                            <div key={idx} className="cv-skill-group">
                                <h4>{group.category}</h4>
                                <p>{group.skills}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="cv-column">
                    <h2>Certifications</h2>
                    {certifications.nodes.map((cert, idx) => (
                        <div key={idx} className="cv-item-compact">
                            <div className="cv-item-header">
                                <h4>{cert.title}</h4>
                                <span className="cv-period-small">{renderPeriod(cert.period)}</span>
                            </div>
                            <div className="cv-cert-body">{cert.body}</div>
                        </div>
                    ))}

                    <h2>Education</h2>
                    {education.nodes.filter(edu => edu.featured).map((edu, idx) => (
                        <div key={idx} className="cv-item-compact">
                            <div className="cv-item-header">
                                <h4>{edu.title}</h4>
                                <span className="cv-period-small">{renderPeriod(edu.period)}</span>
                            </div>
                            <div className="cv-edu-body">{edu.body}</div>
                        </div>
                    ))}
                </div>
            </section>

            <footer className="cv-footer">
                <p>Full portfolio available at <a href={metadata.website}>{metadata.website}</a></p>
            </footer>
        </div>
    );
}

export const Head = ({ data }) => (
    <>
        <meta charSet="utf-8" />
        <title>CV - {data.metadata.name}</title>
        <meta name="description" content={`CV of ${data.metadata.name}`} />
        <meta name="robots" content="noindex" />
    </>
);

export const pageQuery = graphql`
    query {
        metadata: metadataJson {
            name
            phone
            email
            location
            website
            role
            avatar {
                childImageSharp {
                    gatsbyImageData(width: 120, height: 120, placeholder: BLURRED)
                }
            }
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
`;

