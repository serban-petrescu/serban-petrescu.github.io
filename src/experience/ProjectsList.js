import React, { Component } from 'react';
import { Segment, Divider, Container, Dropdown } from 'semantic-ui-react';

import ProjectsGrid from '../common/ProjectsGrid';

import './ProjectsList.scss';

const parsePeriod = period => {
    if (!period || typeof period !== 'string') {
        return 0;
    } else if (period === 'current') {
        return 99999999;
    } else if (period.indexOf('-') !== -1) {
        const parts = period.split('-');
        return parseInt(parts[1].trim() + parts[0].trim(), 10);
    } else {
        return parseInt(period + period, 10);
    }
}

const comparator = (a, b) => {
    const first = parsePeriod(b.period) - parsePeriod(a.period);
    if (!first) {
        return a.name.localeCompare(b.name);
    } else {
        return first;
    }
}

const unique = array => array.filter((x, i) => array.indexOf(x) === i);

const buildOption = name => ({
    key: name,
    text: name,
    value: name
});

const arrayToMap = projects => {
    const result = [];
    for (let key in projects) {
        if (projects.hasOwnProperty(key)) {
            result.push(projects[key]);
        }
    }
    return result;
};

const optionComparator = (a, b) => a.text.localeCompare(b.text);

const extractOptions = projects => unique(arrayToMap(projects)
    .map(project => project.technologies || [])
    .reduce((prev, curr) => prev.concat(curr), [])
    .map(({ name }) => name))
    .map(buildOption)
    .sort(optionComparator);

const projectMatches = ({ name, description, technologies }, criteria) => {
    for (let i = 0; i < criteria.length; ++i) {
        const value = criteria[i];
        if (name.indexOf(value) !== -1 || description.indexOf(value) !== -1) {
            return true;
        } else {
            for (let j = 0; j < technologies.length; ++j) {
                if (technologies[j].name === value) {
                    return true;
                }
            }
        }
    }
    return false;
};

export default class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            criteria: [],
            options: (extractOptions(props.projects))
        }
    }

    process(projects = {}) {
        const criteria = this.state.criteria;
        return arrayToMap(projects)
            .filter(criteria.length ? project => projectMatches(project, criteria) : () => true)
            .sort(comparator);
    }

    addOption(value) {
        this.setState({
            ...this.state,
            criteria: [...this.state.criteria, value],
            options: [...this.state.options, buildOption(value)].sort(optionComparator)
        });
    }

    changeCriteria(value) {
        this.setState({
            ...this.state,
            criteria: typeof value === 'string' ? [value] : value
        });
    }

    render() {
        const { onClickGallery, projects } = this.props;
        const { options } = this.state;
        const filtered = this.process(projects);
        return (
            <Container>
                <div className='section-divider'></div>
                <Segment vertical className='project-list' >
                    <Divider as='h2' className='header' horizontal>My Work</Divider>
                    <Dropdown placeholder='Search by keywords' className='project-search'
                        options={options} fluid search multiple selection allowAdditions clearable
                        onAddItem={(_, { value }) => this.addOption(value)} closeOnChange closeOnEscape
                        onChange={(_, { value }) => this.changeCriteria(value)} />
                    {
                        filtered.length ?
                            <ProjectsGrid projects={filtered} onClickGallery={onClickGallery} /> :
                            <div className='no-projects'><em>No projects match the given criteria...</em></div>
                    }

                </Segment>
            </Container>
        );
    }
}