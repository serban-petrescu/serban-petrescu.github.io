import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import { Item, Icon } from "semantic-ui-react";

import { formatPeriod, renderHtml } from "../../utils";

import "./ExperienceItem.scss";

const ExperienceItem = ({ title, body, icon, logo, period, link }) => (
    <Item>
        <Item.Image className="experience-item-image" size="tiny">
            {logo ? (
                <GatsbyImage image={getImage(logo)} alt={title} />
            ) : (
                <Icon size="huge" name={icon} />
            )}
        </Item.Image>
        <Item.Content className="experience-item-content">
            {link ? (
                <Item.Header
                    as="a"
                    className="experience-item-link"
                    href={link}
                    target="__blank"
                >
                    {title}
                </Item.Header>
            ) : (
                <Item.Header>{title}</Item.Header>
            )}
            <Item.Meta>
                <span>{formatPeriod(period)}</span>
            </Item.Meta>
            <Item.Description>{renderHtml(body)}</Item.Description>
        </Item.Content>
    </Item>
);

export default ExperienceItem;
