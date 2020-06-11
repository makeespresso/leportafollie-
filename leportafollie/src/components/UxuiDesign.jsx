import React, { Component } from 'react';
import UxuiDesignSection from './UxuiDesignSection';
import DesignHeroImg from './DesignHeroImg';
import BannerUxuiDesign from '../components/BannerUxuiDesign';

export default class UxuiDesign extends Component {
  render() {
    return (
      <div className="Main-projects-section-container">
          <DesignHeroImg/>
        <BannerUxuiDesign/>
        <div className="ProjectsContainer">
          <UxuiDesignSection />
        </div>
      </div>
    )
  }
}

