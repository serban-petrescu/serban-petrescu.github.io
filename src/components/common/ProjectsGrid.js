import React from 'react';
import { Grid } from 'semantic-ui-react';

import ProjectCard from './ProjectCard';

const ProjectsGrid = ({ projects, onClickGallery, onClickLabel }) => {
    return (
        <Grid>
            <Grid.Row centered stretched>
                {
                    (projects || []).map((project) => (
                        <Grid.Column key={project.name} mobile={16} computer={5} tablet={8}>
                            <ProjectCard {...project}
                                onClickLabel={onClickLabel}
                                onClickGallery={() => onClickGallery(project)} />
                        </Grid.Column>
                    ))
                }
            </Grid.Row>
        </Grid>
    );
};

export default ProjectsGrid;