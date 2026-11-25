import React, { Component } from "react";
import mixpanel from "mixpanel-browser";
import { graphql } from "gatsby";

import Hero from "../components/hero/Hero";
import Introduction from "../components/intro/Introduction";
import Footer from "../components/footer/Footer";
import SelectedWork from "../components/work/SelectedWork";
import ExperienceList from "../components/experience/ExperienceList";
import Credentials from "../components/experience/Credentials";
import TalksAndWriting from "../components/writing/TalksAndWriting";
import GalleryModal from "../components/common/GalleryModal";
import ProjectList from "../components/experience/ProjectsList";

function toMap(projects = []) {
    const result = {};
    for (const project of projects) {
        result[project.id] = project;
    }
    return result;
}

const byOrder = (a, b) => (a.order || 99) - (b.order || 99);

export default class App extends Component {
    constructor(props) {
        super(props);
        mixpanel.init("c4cc21bf5d9a0b60ab5fa4dcef19e808", {
            api_host: "https://api-eu.mixpanel.com",
            disable_persistence: true,
        });
        mixpanel.track("Visit");
    }

    render() {
        const { metadata, highlightedProjects, projects, work, certifications, education, talks, writing } = this.props.data;
        const onClickGallery = ({ name, images }) => modal.open(name, images);
        const archive = projects.nodes.filter((project) => !project.highlighted);
        let modal;
        return (
            <div>
                <Hero
                    name={metadata.name}
                    title={metadata.role}
                    tagline={metadata.tagline}
                    avatar={metadata.avatar}
                    linkedin={metadata.accounts.linkedin}
                    cv={metadata.cv}
                    writing={metadata.writing}
                />
                <Introduction
                    cover={metadata.cover}
                    summary={metadata.summary}
                    social={metadata.accounts}
                />
                <SelectedWork
                    projects={[...highlightedProjects.nodes].sort(byOrder)}
                    onClickGallery={onClickGallery}
                />
                <ExperienceList id="work" title="Experience" items={work.nodes} />
                <TalksAndWriting
                    talks={talks.nodes}
                    posts={writing.nodes}
                    writingUrl={metadata.writing}
                    mediumUrl={metadata.accounts.medium}
                />
                <Credentials certifications={certifications.nodes} education={education.nodes} />
                <ProjectList projects={toMap(archive)} onClickGallery={onClickGallery} />
                <GalleryModal ref={(ref) => (modal = ref)} />
                <div className="section-divider" />
                <Footer {...metadata} />
            </div>
        );
    }
}

export const Head = ({ data }) => (
    <>
        <title>{data.metadata.title}</title>
        <meta name="description" content={data.metadata.description} />
        <meta property="og:title" content={data.metadata.title} />
        <meta property="og:description" content={data.metadata.description} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
            {JSON.stringify({
                "@context": "http://schema.org/",
                "@type": "Person",
                name: data.metadata.name,
                jobTitle: data.metadata.role,
                telephone: data.metadata.phone,
                url: data.metadata.website,
                email: data.metadata.email,
            })}
        </script>
    </>
);

export const pageQuery = graphql`
    fragment ProjectFields on ProjectJson {
        id
        name
        type
        role
        linkLabel
        blogLabel
        outcome
        order
        highlighted
        description
        technologies {
            name
        }
        period {
            from(formatString: "YYYY")
            to(formatString: "YYYY")
        }
        images {
            path {
                childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                }
            }
            description
        }
        github
        tags
        link
        youtube
        blog
        facebook
    }

    query {
        education: allEducationJson(sort: { period: { from: DESC } }) {
            nodes {
                title
                degree
                featured
                body
                period {
                    from(formatString: "DD.MM.YYYY")
                    to(formatString: "DD.MM.YYYY")
                }
                logo {
                    childImageSharp {
                        gatsbyImageData(width: 80, placeholder: BLURRED)
                    }
                }
            }
        }
        certifications: allCertificationJson(sort: { period: { at: DESC } }) {
            nodes {
                title
                short
                link
                period {
                    at(formatString: "DD.MM.YYYY")
                }
            }
        }
        work: allWorkJson(sort: { period: { from: DESC } }) {
            nodes {
                title
                body
                period {
                    from(formatString: "DD.MM.YYYY")
                    to(formatString: "DD.MM.YYYY")
                }
                logo {
                    childImageSharp {
                        gatsbyImageData(width: 80, placeholder: BLURRED)
                    }
                }
            }
        }

        metadata: metadataJson {
            title
            description
            name
            phone
            email
            location
            website
            avatar {
                childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                }
            }
            cover {
                childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                }
            }
            role
            tagline
            writing
            cv
            summary
            repository
            libraries {
                name
                url
            }
            accounts {
                linkedin
                github
                stackoverflow
                twitter
                youtube
                medium
            }
        }

        talks: allTalkJson(sort: { date: DESC }) {
            nodes {
                title
                event
                date(formatString: "D MMM YYYY")
                abstract
                slides
                pdf
                image {
                    childImageSharp {
                        gatsbyImageData(width: 640, placeholder: BLURRED)
                    }
                }
            }
        }

        writing: allWritingJson(sort: { order: ASC }) {
            nodes {
                title
                summary
                url
                source
                date(formatString: "MMM YYYY")
            }
        }

        projects: allProjectJson(sort: { period: { from: DESC } }) {
            nodes {
                ...ProjectFields
            }
        }

        highlightedProjects: allProjectJson(filter: { highlighted: { eq: true } }) {
            nodes {
                ...ProjectFields
            }
        }
    }
`;
