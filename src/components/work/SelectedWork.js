import React from "react";
import { Container, Grid, Segment } from "semantic-ui-react";

import SectionHeader from "../common/SectionHeader";
import CaseStudy from "./CaseStudy";

const SelectedWork = ({ projects, onClickGallery }) => (
    <Container>
        <Segment vertical>
            <SectionHeader id="selected-work" title="Selected Work" />
            <Grid stackable columns={2} className="selected-work">
                {projects.map((project) => (
                    <Grid.Column key={project.id}>
                        <CaseStudy {...project} onClickGallery={() => onClickGallery(project)} />
                    </Grid.Column>
                ))}
            </Grid>
        </Segment>
    </Container>
);

export default SelectedWork;
