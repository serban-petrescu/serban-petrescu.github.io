import React from 'react';

import { Segment, Header, Container, Button, Icon, Transition, Label } from 'semantic-ui-react';
import withVisibility from '../hoc/withVisibility';

import "./Hero.scss";

const Hero = ({ name, title, avatar, linkedin, visible, cv }) => (
    <Segment vertical inverted className="hero" textAlign="center">
        <Transition animation='scale' duration={500} visible={visible} >
            <Container text>
                <img className="ui small image circular" src={avatar} alt="avatar" />
                <Header as='h1' content={name} inverted />
                <Header as='h3' content={title} inverted />
                <Button className='action-button' color='linkedin' size='large' as='a' target='_blank' href={linkedin}>
                    <Icon name='linkedin' />
                    Get in touch
                </Button>
                <Button className='action-button' color='orange' size='large' as='a' target='_blank' href={cv}>
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
);

export default withVisibility()(Hero);