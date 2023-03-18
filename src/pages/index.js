import React, { Component } from "react";
import mixpanel from "mixpanel-browser";

import Hero from "../components/hero/Hero";
import Introduction from "../components/intro/Introduction";
import Footer from "../components/footer/Footer";
import Highlights from "../components/intro/Highlights";
import ExperienceList from "../components/experience/ExperienceList";
import GalleryModal from "../components/common/GalleryModal";
import ProjectList from "../components/experience/ProjectsList";
import { graphql } from "gatsby";

function toMap(projects = []) {
    const result = {};
    for (const project of projects) {
        result[project.id] = project;
    }
    return result;
}

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
        const onClickGallery = ({ name, images }) => modal.open(name, images);
        let modal;
        return (
            <div>
                <Hero
                    name={this.props.data.metadata.name}
                    title={this.props.data.metadata.role}
                    avatar={this.props.data.metadata.avatar}
                    linkedin={this.props.data.metadata.accounts.linkedin}
                    cv={this.props.data.metadata.cv}
                />
                <Introduction
                    cover={this.props.data.metadata.cover}
                    summary={this.props.data.metadata.summary}
                    social={this.props.data.metadata.accounts}
                />
                <Highlights
                    {...this.props.data.metadata.highlights}
                    projects={this.props.data.highlightedProjects.nodes}
                    onClickGallery={onClickGallery}
                />
                <div id="work" />
                <ExperienceList
                    title="Work History"
                    items={this.props.data.work.nodes}
                />
                <div id="certifications" />
                <ExperienceList
                    title="Certifications"
                    items={this.props.data.certifications.nodes}
                />
                <div id="academic" />
                <ExperienceList
                    title="Education"
                    items={this.props.data.education.nodes}
                />
                <div id="projects" />
                <ProjectList
                    projects={toMap(this.props.data.projects.nodes)}
                    onClickGallery={onClickGallery}
                />
                <GalleryModal ref={(ref) => (modal = ref)} />
                <div className="section-divider" />
                <Footer {...this.props.data.metadata} />
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
    query {
        education: allEducationJson(sort: { period: { from: DESC } }) {
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
        certifications: allCertificationJson(sort: { period: { at: DESC } }) {
            nodes {
                title
                body
                period {
                    at(formatString: "DD.MM.YYYY")
                }
                link
                logo {
                    childImageSharp {
                        gatsbyImageData(width: 80, placeholder: BLURRED)
                    }
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
            birthday
            cv
            summary
            repository
            highlights {
                education {
                    title
                    description
                }
                work {
                    title
                    description
                }
            }
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

        projects: allProjectJson {
            nodes {
                id
                name
                type
                description
                technologies {
                    name
                }
                period
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
        }

        highlightedProjects: allProjectJson(filter: { highlighted: { eq: true }}, sort: { period: DESC }) {
            nodes {
                id
                name
                type
                description
                technologies {
                    name
                }
                period
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
        }
    }
`;
