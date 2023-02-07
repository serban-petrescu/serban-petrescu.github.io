import React from 'react';
import { Card, Label, Button } from 'semantic-ui-react';
import mixpanel from 'mixpanel-browser';

import './ProjectCard.scss';
import { renderHtml } from '../../utils';

const typeColor = type => ({
    work: 'blue',
    academic: 'red',
    personal: 'green'
})[type] || 'grey';

const typeText = type => ({
    work: 'Work',
    academic: 'Academic',
    personal: 'Personal'
})[type] || 'Unknown';

const ProjectCard = ({ name, description, period, technologies, link, blog, github, youtube, facebook, images,
    type, onClickGallery, onClickLabel }) => (
    <div className='project-highlight'>
        <Card raised color='grey'>
            <Card.Content className='card-header'>
                <div className="card-meta-right">
                    {
                        github && <Button circular color='black' icon='github' size='mini' as='a'
                            onClick={() => mixpanel.track('[Projects] View details', { type: 'GitHub', name })}
                            href={github} title='GitHub Repository' target='_blank' />
                    }
                    {
                        facebook && <Button circular color='facebook' icon='facebook' size='mini' as='a'
                            onClick={() => mixpanel.track('[Projects] View details', { type: 'Facebook', name })}
                            className="project-detail-button" href={facebook} title='FaceBook Page' target='_blank' />
                    }
                    {
                        link && <Button circular color='grey' icon='linkify' size='mini' as='a' href={link}
                            onClick={() => mixpanel.track('[Projects] View details', { type: 'Link', name })}
                            className="project-detail-button" title='Website' target='_blank' />
                    }
                    {
                        blog && <Button circular color='orange' icon='file alternate outline' size='mini' as='a'
                            onClick={() => mixpanel.track('[Projects] View details', { type: 'Blog', name })}
                            className="project-detail-button" href={blog} title='Blog Post' target='_blank' />
                    }
                    {
                        youtube && <Button circular color='youtube' icon='youtube' size='mini' as='a'
                            onClick={() => mixpanel.track('[Projects] View details', { type: 'YouTube', name })}
                            className="project-detail-button" href={youtube} title='Youtube Content' target='_blank' />
                    }
                    {
                        images && <Button circular color='blue' icon='image outline' size='mini' as='a'
                            className="project-detail-button" onClick={onClickGallery} title='Photo Gallery' />
                    }
                </div>
                <Label color={typeColor(type)} ribbon size='mini' className='type-ribbon'>{typeText(type)}</Label>
                <Card.Header content={name} />
                <Card.Meta content={period} />
            </Card.Content>
            <Card.Content description={renderHtml(description)} />
            <Card.Content className='card-footer'>
                <Label.Group size='tiny' color='black'>
                    {
                        (technologies || []).map(({ name }, index) => (
                            <Label key={index} as='a' onClick={() => onClickLabel(name)}>{name}</Label>
                        ))
                    }
                </Label.Group>
            </Card.Content>
        </Card>
    </div>
);

export default ProjectCard;