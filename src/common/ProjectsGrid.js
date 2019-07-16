import React from 'react';
import {  Grid } from 'semantic-ui-react';

import ProjectCard from './ProjectCard';

const ProjectsGrid = ({ projects, onClickGallery }) => (
    <Grid>
        <Grid.Row centered stretched>
            {
                (projects || []).map((project, index) => (
                    <Grid.Column key={index} mobile={16} computer={5} tablet={8} >
                        <ProjectCard {...project} onClickGallery={() => onClickGallery(project)} />
                    </Grid.Column>
                ))
            }
        </Grid.Row>
    </Grid>
);

export default ProjectsGrid;