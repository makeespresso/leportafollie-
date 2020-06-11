import React, { Component } from 'react';
import DesignBox from './DesignBox';

export default class UxuiDesignSection extends Component {
  render() {
    let DesignsToRender = [
      { cathegory: "UX/UI Design", title: "WhiteStone", header: "E-commerce", description: "UX/UI Designers + Web Developers collaboration" },
      { cathegory: "UX/UI Design", title: "Hot Yoga Brickell", header: "E-commerce", description: "some description about the project" },
      { cathegory: "UX/UI Design", title: "Village Christmas Market", header: "Microsite Event", description: "some description about the project" },
      { cathegory: "UX/UI Design", title: "XO Espresso Bar", header: "Website Design", description: "some description about the project" },
      { cathegory: "UX/UI Design", title: "Village Christmas Market", header: "Microsite Event", description: "some description about the project" },
      { cathegory: "UX/UI Design", title: "Village Christmas Market", header: "Microsite Event", description: "some description about the project" },
      { cathegory: "UX/UI Design", title: "Village Christmas Market", header: "Microsite Event", description: "some description about the project" },
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


