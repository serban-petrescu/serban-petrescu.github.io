import React from 'react';
import { Item, Divider, Segment, Container } from 'semantic-ui-react';

import ExperienceItem from './ExperienceItem';

import './ExperienceList.scss';

const ExperienceList = ({ title, items }) => (
    <Container>
        <Segment vertical className='experience-list'>
            <div className='section-divider'></div>
            <Divider as='h2' className='header' horizontal>{title}</Divider>
            <Item.Group divided>
                {(items || []).map((item, key) => <ExperienceItem {...item} key={key} />)}
            </Item.Group>
        </Segment>
    </Container>
);

export default ExperienceList;