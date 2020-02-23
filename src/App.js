import React, { Component } from 'react';

import data from './data';
import Hero from './hero/Hero';
import Introduction from './intro/Introduction';
import Footer from './footer/Footer';
import Highlights from './intro/Highlights';
import ExperienceList from './experience/ExperienceList';
import GalleryModal from './common/GalleryModal';
import ProjectList from './experience/ProjectsList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = data;
  }

  render() {
    const state = this.state;
    const onClickGallery = ({ name, images }) => modal.open(name, images);
    let modal;
    return (
      <div>
        <Hero name={state.name} title={state.role} avatar={state.avatar} linkedin={state.accounts.linkedin} cv={state.cv} />
        <Introduction cover={state.cover} summary={state.summary} social={data.accounts} />
        <Highlights {...state.highlights} onClickGallery={onClickGallery} />
        <div id='work' />
        <ExperienceList title='Work History' items={state.experience.work} />
        <div id='certifications' />
        <ExperienceList title='Certifications' items={state.experience.certifications} />
        <div id='academic' />
        <ExperienceList title='Education' items={state.experience.academic} />
        <div id='projects' />
        <ProjectList projects={data.projects} onClickGallery={onClickGallery} />
        <GalleryModal ref={ref => modal = ref} />
        <div className='section-divider'></div>
        <Footer {...state.site} />
      </div>
    );
  }
}

