import React, { useEffect } from 'react';
import mixpanel from 'mixpanel-browser';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Segment, Header, Container, Button, Icon, Transition, Label } from 'semantic-ui-react';

import withVisibility from '../hoc/withVisibility';

import "./Hero.scss";

const Hero = ({ name, title, avatar, linkedin, visible, cv }) => {

    useEffect(() => {
        mixpanel.track_links('.go-to-linkedin', '[Hero] Linkedin Nav');
        mixpanel.track_links('.download-cv', '[Hero] CV Download');
    }, []);

    return (
        <Segment vertical inverted className="hero" textAlign="center">
            <Transition animation='scale' duration={500} visible={visible} >
                <Container text>
                    <GatsbyImage className="ui small image circular" image={getImage(avatar)} alt="avatar" />
                    <Header as='h1' content={name} inverted />
                    <Header as='h3' content={title} inverted />
                    <Button className='action-button go-to-linkedin' color='linkedin' size='large' as='a' target='_blank' href={linkedin}>
                        <Icon name='linkedin' />
                        Get in touch
                    </Button>
                    <Button className='action-button download-cv' color='orange' size='large' as='a' target='_blank' href={cv}>
                        <Icon name='file pdf' />
                        Download CV
                    </Button>
                </Container>
            </Transition>
            <Transition animation='fly up' duration={2000} visible={visible} >
                <Label size="medium" className="scroll-more" color="black">
                    &nbsp;&nbsp;
                    <Icon name='angle down' />
                    Scroll to find out more
                    &nbsp;&nbsp;&nbsp;
                    <Icon name='angle down' />
                </Label>
            </Transition>
        </Segment>
    )
};

export default withVisibility()(Hero);