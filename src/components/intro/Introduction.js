import React from "react";
import { Grid, Segment, Header, Container, Button } from "semantic-ui-react";
import mixpanel from "mixpanel-browser";

import "./Introduction.scss";
import { renderHtml } from "../../utils";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Introduction = ({ cover, summary, social }) => (
    <Container className="introduction">
        <Segment vertical>
            <div className="section-divider"></div>
            <Grid container stackable verticalAlign="middle">
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Header as="h2">About Myself</Header>
                        {renderHtml(summary)}
                        <div className="social">
                            <Button
                                circular
                                color="black"
                                icon="github"
                                size="large"
                                as="a"
                                href={social.github}
                                target="_blank"
                                onClick={() =>
                                    mixpanel.track("[Intro] Click social", {
                                        type: "GitHib",
                                    })
                                }
                            />
                            <Button
                                circular
                                color="linkedin"
                                icon="linkedin"
                                size="large"
                                as="a"
                                href={social.linkedin}
                                target="_blank"
                                onClick={() =>
                                    mixpanel.track("[Intro] Click social", {
                                        type: "LinkedIn",
                                    })
                                }
                            />
                            <Button
                                circular
                                color="youtube"
                                icon="youtube"
                                size="large"
                                as="a"
                                href={social.youtube}
                                target="_blank"
                                onClick={() =>
                                    mixpanel.track("[Intro] Click social", {
                                        type: "YouTube",
                                    })
                                }
                            />
                            <Button
                                circular
                                color="twitter"
                                icon="twitter"
                                size="large"
                                as="a"
                                href={social.twitter}
                                target="_blank"
                                onClick={() =>
                                    mixpanel.track("[Intro] Click social", {
                                        type: "Twitter",
                                    })
                                }
                            />
                            <Button
                                circular
                                color="orange"
                                icon="stack overflow"
                                size="large"
                                as="a"
                                href={social.stackoverflow}
                                target="_blank"
                                onClick={() =>
                                    mixpanel.track("[Intro] Click social", {
                                        type: "StackOverflow",
                                    })
                                }
                            />
                            <Button
                                circular
                                color="green"
                                icon="medium m"
                                size="large"
                                as="a"
                                href={social.medium}
                                target="_blank"
                                onClick={() =>
                                    mixpanel.track("[Intro] Click social", {
                                        type: "Medium",
                                    })
                                }
                            />
                        </div>
                    </Grid.Column>
                    <Grid.Column floated="right" width={6}>
                        <div className="is-flex">
                            <GatsbyImage
                                className="ui large bordered rounded image"
                                alt="Myself"
                                image={getImage(cover)}
                            />
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    </Container>
);

export default Introduction;
