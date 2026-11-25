import React, { useEffect } from 'react';
import { Item, Segment, Container } from 'semantic-ui-react';
import mixpanel from 'mixpanel-browser';

import SectionHeader from '../common/SectionHeader';
import ExperienceItem from './ExperienceItem';

import './ExperienceList.scss';

const ExperienceList = ({ id, title, items }) => {
    useEffect(() => {
        mixpanel.track_links('.experience-item-link', '[Experience] View details');
    }, []);

    return (
        <Container>
            <Segment vertical className='experience-list'>
                <SectionHeader id={id} title={title} />
                <Item.Group divided>
                    {(items || []).map((item, key) => <ExperienceItem {...item} key={key} />)}
                </Item.Group>
            </Segment>
        </Container>
    );
};

export default ExperienceList;
