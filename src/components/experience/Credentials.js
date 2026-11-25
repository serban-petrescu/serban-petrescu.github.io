import React, { useState } from "react";
import { Button, Container, Grid, Header, List, Segment } from "semantic-ui-react";

import SectionHeader from "../common/SectionHeader";
import ExperienceItem from "./ExperienceItem";

const yearOf = (date) => (date && date !== "Invalid date" ? date.slice(-4) : "present");

const CertificationList = ({ certifications }) => (
    <List relaxed>
        {certifications.map(({ title, short, link, period }) => (
            <List.Item key={title}>
                <List.Content>
                    <List.Header as={link ? "a" : "span"} href={link} target="_blank" rel="noopener noreferrer">
                        {short || title}
                    </List.Header>
                    <List.Description>{yearOf(period.at)}</List.Description>
                </List.Content>
            </List.Item>
        ))}
    </List>
);

const DegreeList = ({ degrees }) => (
    <List relaxed>
        {degrees.map(({ title, degree, period }) => (
            <List.Item key={title}>
                <List.Content>
                    <List.Header>{degree}</List.Header>
                    <List.Description>
                        {title}, {yearOf(period.from)} to {yearOf(period.to)}
                    </List.Description>
                </List.Content>
            </List.Item>
        ))}
    </List>
);

const OlderEducation = ({ items }) => {
    const [open, setOpen] = useState(false);
    if (!items.length) return null;
    return (
        <>
            <Button basic size="mini" onClick={() => setOpen(!open)}>
                {open ? "Hide earlier education" : "Show earlier education"}
            </Button>
            {open && <ExperienceListItems items={items} />}
        </>
    );
};

const ExperienceListItems = ({ items }) => (
    <div className="ui divided items">
        {items.map((item) => (
            <ExperienceItem key={item.title} {...item} />
        ))}
    </div>
);

const Credentials = ({ certifications, education }) => {
    const degrees = education.filter((item) => item.featured);
    const older = education.filter((item) => !item.featured);
    return (
        <Container>
            <Segment vertical>
                <SectionHeader id="credentials" title="Credentials" />
                <Grid stackable columns={2}>
                    <Grid.Column>
                        <Header as="h3">Certifications</Header>
                        <CertificationList certifications={certifications} />
                    </Grid.Column>
                    <Grid.Column>
                        <Header as="h3">Education</Header>
                        <DegreeList degrees={degrees} />
                        <OlderEducation items={older} />
                    </Grid.Column>
                </Grid>
            </Segment>
        </Container>
    );
};

export default Credentials;
