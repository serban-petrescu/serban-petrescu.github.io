import React from "react";
import { Button, Container, Grid, Header, Segment } from "semantic-ui-react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import mixpanel from "mixpanel-browser";

import SectionHeader from "../common/SectionHeader";

import "./TalksAndWriting.scss";

const track = (event, props) => () => mixpanel.track(event, props);

const Talk = ({ title, event, date, abstract, slides, pdf, image }) => (
    <article className="talk">
        {image && (
            <a className="talk-thumb" href={slides} target="_blank" rel="noopener noreferrer" onClick={track("[Talks] Open slides", { title })}>
                <GatsbyImage image={getImage(image)} alt={title} className="talk-image" />
            </a>
        )}
        <div className="talk-text">
            <Header as="h4" className="talk-title">
                {title}
                <Header.Subheader>
                    {event} · {date}
                </Header.Subheader>
            </Header>
            <p>{abstract}</p>
            <div className="talk-links">
                <Button basic size="mini" icon="play" content="Slides" as="a" href={slides} target="_blank" rel="noopener noreferrer" onClick={track("[Talks] Open slides", { title })} />
                <Button basic size="mini" icon="file pdf outline" content="PDF" as="a" href={pdf} target="_blank" rel="noopener noreferrer" onClick={track("[Talks] Open PDF", { title })} />
            </div>
        </div>
    </article>
);

const PostList = ({ posts }) => (
    <ul className="writing-posts">
        {posts.map(({ title, summary, url, date, source }) => (
            <li key={url}>
                <a href={url} target="_blank" rel="noopener noreferrer" onClick={track("[Writing] Open post", { title, source })}>
                    {title}
                </a>
                <span className="writing-meta">{date}</span>
                <span>{summary}</span>
            </li>
        ))}
    </ul>
);

const Writing = ({ posts, writingUrl, mediumUrl }) => {
    const wseng = posts.filter((post) => post.source === "wseng.ai");
    const medium = posts.filter((post) => post.source === "Medium");
    return (
        <div className="writing">
            <Header as="h3">Writing</Header>
            <Header as="h4" className="writing-source">
                <a href={writingUrl} target="_blank" rel="noopener noreferrer" onClick={track("[Writing] Open all", { source: "wseng.ai" })}>
                    wseng.ai
                </a>
                <Header.Subheader>How we run engineering with AI: essays and a weekly journal.</Header.Subheader>
            </Header>
            <PostList posts={wseng} />
            <Header as="h4" className="writing-source">
                <a href={mediumUrl} target="_blank" rel="noopener noreferrer" onClick={track("[Writing] Open all", { source: "Medium" })}>
                    Medium
                </a>
                <Header.Subheader>Earlier posts on AI and AWS.</Header.Subheader>
            </Header>
            <PostList posts={medium} />
        </div>
    );
};

const TalksAndWriting = ({ talks, posts, writingUrl, mediumUrl }) => (
    <Container>
        <Segment vertical>
            <SectionHeader id="talks-and-writing" title="Talks & Writing" />
            <Grid stackable columns={2} className="talks-and-writing">
                <Grid.Column>
                    <Header as="h3">Talks</Header>
                    {talks.map((talk) => (
                        <Talk key={talk.title} {...talk} />
                    ))}
                </Grid.Column>
                <Grid.Column>
                    <Writing posts={posts} writingUrl={writingUrl} mediumUrl={mediumUrl} />
                </Grid.Column>
            </Grid>
        </Segment>
    </Container>
);

export default TalksAndWriting;
