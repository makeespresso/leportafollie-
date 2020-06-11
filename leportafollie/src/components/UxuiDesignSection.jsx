import React, { Component } from 'react';
import DesignBox from './DesignBox';

export default class UxuiDesignSection extends Component {
  render() {
    let DesignsToRender = [
      { cathegory: "UX/UI Design", title: "WhiteStone", header: "E-commerce", description: "UX/UI Designers + Web Developers collaboration" },
     ]

    return (
      // <div className="webdevSection">
      <div className="DesignDistro">
        {DesignsToRender.map((Design, index) => {
          console.log(Design)
          return (
            <DesignBox
              key={index}
              DesignBox={Design} />
          )
        })}
      </div>
      // </div>
    )
  }
}


