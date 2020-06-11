import React, { Component } from 'react';
import UxuiDesignSection from './UxuiDesignSection';
import DesignHeroImg from './DesignHeroImg';

export default class UxuiDesign extends Component {
  render() {
    return (
      <div className="Main-projects-section-container">
          <DesignHeroImg/>

        <div className="ProjectsContainer">
          <UxuiDesignSection />
        </div>
      </div>
    )
  }
}

