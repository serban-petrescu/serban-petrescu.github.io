import React from "react";
import {
    Segment,
    Grid,
    Header,
    Button,
    Divider,
    Container,
} from "semantic-ui-react";

import ProjectsGrid from "../common/ProjectsGrid";

import "./Highlights.scss";

const Highlights = ({ education, work, projects, onClickGallery }) => (
    <Container>
        <Segment className="highlights" vertical>
            <div className="section-divider"></div>
            <Divider as="h2" className="header" horizontal>
                Background
            </Divider>
            <Grid
                className="background"
                celled="internally"
                columns="equal"
                stackable
            >
                <Grid.Row textAlign="center">
                    <Grid.Column>
                        <Header as="h3">{education.title}</Header>
                        <p>{education.description}</p>
                        <br />
                        <Button as="a" size="medium" href="#academic">
                            See full education
                        </Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as="h3">{work.title}</Header>
                        <p>{work.description}</p>
                        <br />
                        <Button as="a" size="medium" href="#work">
                            See full work history
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <div className="section-divider"></div>
            <Divider as="h2" className="header" horizontal>
                Project Highlights
            </Divider>
            <ProjectsGrid projects={projects} onClickGallery={onClickGallery} />
            <div className="project-button-wrapper">
                <Button as="a" size="medium" href="#projects">
                    See all projects
                </Button>
            </div>
        </Segment>
    </Container>
);

export default Highlights;
