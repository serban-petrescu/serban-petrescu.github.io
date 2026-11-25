import React, { Component } from 'react';
import { Segment, Container, Dropdown, Button } from 'semantic-ui-react';
import mixpanel from 'mixpanel-browser';

import ProjectsGrid from '../common/ProjectsGrid';
import SectionHeader from '../common/SectionHeader';

import './ProjectsList.scss';


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
    .concat([
        { key: "architect", text: "Architect", value: "architect" },
        { key: "lead", text: "Lead Developer", value: "lead" },
        { key: "teaching", text: "Teaching & Training", value: "teaching" }
    ])
    .sort(optionComparator);

const projectMatches = ({ technologies, tags = [] }, criteria) => {
    for (let i = 0; i < criteria.length; ++i) {
        const value = criteria[i];
        if ((tags || []).indexOf(value) !== -1) {
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
        const query = typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('filter') : '';
        this.state = {
            criteria: query ? query.split(',') : [],
            options: (extractOptions(props.projects)),
            open: Boolean(query)
        }
    }

    toggle() {
        const open = !this.state.open;
        this.setState({ ...this.state, open });
        mixpanel.track('[Projects] Toggle archive', { open });
    }

    process(projects = {}) {
        const criteria = this.state.criteria;
        return arrayToMap(projects)
            .filter(criteria.length ? project => projectMatches(project, criteria) : () => true);
    }

    addOption(value) {
        this.setState({
            ...this.state,
            criteria: [...this.state.criteria, value],
            options: [...this.state.options, buildOption(value)].sort(optionComparator)
        });
        mixpanel.track('[Projects] Search', { value });
    }

    changeCriteria(value) {
        this.setState({
            ...this.state,
            criteria: typeof value === 'string' ? [value] : value
        });
        mixpanel.track('[Projects] Search', { value });
    }

    render() {
        const { onClickGallery, projects } = this.props;
        const { options, criteria, open } = this.state;
        const filtered = this.process(projects);
        const count = Object.keys(projects || {}).length;
        return (
            <Container>
                <Segment vertical className={open ? 'project-list open' : 'project-list'}>
                    <SectionHeader id='projects' title='Project Archive' />
                    <p className='project-archive-intro'>
                        Everything else I have built or led since 2010: {count} projects across work, side projects and university.
                    </p>
                    <div className='project-archive-toggle'>
                        <Button basic onClick={() => this.toggle()}>
                            {open ? 'Hide the archive' : `Browse all ${count} projects`}
                        </Button>
                    </div>
                    {open && <Dropdown placeholder='Search by keywords' className='project-search'
                        options={options} fluid search multiple selection allowAdditions clearable
                        closeOnChange closeOnEscape value={criteria}
                        onAddItem={(_, { value }) => this.addOption(value)}
                        onChange={(_, { value }) => this.changeCriteria(value)} />}
                    {open && (
                        filtered.length ?
                            <ProjectsGrid projects={filtered}
                                onClickGallery={onClickGallery}
                                onClickLabel={name => this.addOption(name)} /> :
                            <div className='no-projects'><em>No projects match the given criteria...</em></div>
                    )}

                </Segment>
            </Container>
        );
    }
}