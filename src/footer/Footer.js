import React from 'react';
import { Segment, Container, Icon } from "semantic-ui-react";

import './Footer.scss';

const Footer = ({ repository, libraries }) => (
    <Segment inverted vertical className='footer'>
        <Container textAlign='center'>
            <a href={repository}>
                <Icon name='github' size='big'></Icon>
            </a>
            <br />
            <br />
            <p>
                This website was built using the following open source libraries:&nbsp;
                {
                    (libraries || []).map(({ name, url }, index) => (
                        <span key={index}>
                            {index !== 0 && ", "}
                            <a href={url}>{name}</a>
                        </span>
                    ))
                }.
            </p>

        </Container>
    </Segment>
);

export default Footer;