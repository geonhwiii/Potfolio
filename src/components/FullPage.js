/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './FullPage.css';
import Banner from './Banner';
import Footer from './Footer';
import Intro from './Intro';
import SkillContainer from './SkillContainer';
import ProjectContainer from './ProjectContainer';
import ThanksContainer from './ThanksContainer';
import ScrumContainer from './ScrumContainer';

const FullPage = fullpageProps => {
  return (
    <ReactFullpage
      {...fullpageProps}
      render={({ state, fullpageApi }) => {
        return (
          <div id='fullpage-wrapper'>
            <div className='section'>
              <Banner />
              <Intro />
              <Footer />
            </div>
            <div className='section'>
              <SkillContainer />
            </div>
            <div className='section'>
              <ProjectContainer />
            </div>
            <div className='section'>
              <ScrumContainer />
            </div>
            <div className='section'>
              <ThanksContainer />
            </div>
          </div>
        );
      }}
    />
  );
};

export default FullPage;
