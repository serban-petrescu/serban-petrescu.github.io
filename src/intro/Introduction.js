import React from 'react';
import { Grid, Segment, Header, Image, Container, Button } from 'semantic-ui-react';

import "./Introduction.scss";
import { renderHtml } from '../utils';

const Introduction = ({ cover, summary, social }) => (
    <Container className="introduction">
        <Segment vertical>
            <div className='section-divider'></div>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Header as='h2'>About Myself</Header>
                        {renderHtml(summary)}
                        <div className="social">
                            <Button circular color='black' icon='github' size='large' 
                                as='a' href={social.github} target='_blank' />
                            <Button circular color='linkedin' icon='linkedin' size='large' 
                                as='a' href={social.linkedin} target='_blank' />
                            <Button circular color='youtube' icon='youtube' size='large'
                                as='a' href={social.youtube}  target='_blank' />
                            <Button circular color='twitter' icon='twitter' size='large' 
                                as='a' href={social.twitter} target='_blank' />
                            <Button circular color='orange' icon='stack overflow' size='large' 
                                as='a' href={social.stackoverflow} target='_blank' />
                        </div>
                    </Grid.Column>
                    <Grid.Column floated='right' width={6}>
                        <div className="is-flex">
                            <Image bordered rounded size='large' src={cover} />
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    </Container>
);

export default Introduction;