import React from 'react';
import { Item, Icon } from 'semantic-ui-react';

import { formatPeriod, renderHtml } from '../utils';

import './ExperienceItem.scss';

const ExperienceItem = ({ title, body, icon, logo, period, link }) => (
    <Item>
        {
            logo ?
                <Item.Image className='experience-item-image' size='tiny' src={logo} /> :
                <Item.Image className='experience-item-image' size='tiny'><Icon size='huge' name={icon} /></Item.Image>
        }

        <Item.Content className='experience-item-content'>
            {
                link ? <Item.Header as="a" href={link} target="__blank">{title}</Item.Header> : <Item.Header>{title}</Item.Header>
            }
            <Item.Meta>
                <span>{formatPeriod(period)}</span>
            </Item.Meta>
            <Item.Description>{renderHtml(body)}</Item.Description>
        </Item.Content>
    </Item>
);

export default ExperienceItem;