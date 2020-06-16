import React, { Component } from 'react';
import SkillBox from './SkillBox';
import { CssIcon, JsIcon, ReactIcon, ZeplinIcon, SketchIcon, HtmlIcon, SequelizeIcon, XdIcon, RapidIcon, UsabilityIcon, RailsIcon, NodeIcon, SqlIcon, UxIcon, ManagementIcon, ExpressIcon } from '../assets/Svg';

export default class SkillSection extends Component {
  render() {
    let SkillsToRender = [
      { name: "CSS", svg: CssIcon },
      { name: "Javascript", svg: JsIcon },
      { name: "React", svg: ReactIcon },
      { name: "Zeplin", svg: ZeplinIcon },
      { name: "Sketch", svg: SketchIcon },
      { name: "HTML5", svg: HtmlIcon },
      { name: "Sequelize", svg: SequelizeIcon },
      { name: "Adobe xd", svg: XdIcon },
      { name: "Rapid Prototyping", svg: RapidIcon },
      { name: "Usability Testing", svg: UsabilityIcon },
      { name: "Rails", svg: RailsIcon },
      { name: "Node", svg: NodeIcon },
      { name: "SQL", svg: SqlIcon },
      { name: "UX Research", svg: UxIcon },
      { name: "Management", svg: ManagementIcon },
      { name: "Express", svg: ExpressIcon }
      
    ]

    return (
      <div id="Generalbackground">
      <div className="skillSection">
        <h2 style={{ padding: "2rem", marginBottom: "2rem", marginTop: "2rem" }} >Skills</h2>
        <div className="skillsDistro">

          {SkillsToRender.map((Skill, index) => {
            return (
              <SkillBox
                key={index}
                SkillBox={Skill} />
            )
          })}
        </div>
      </div>
      </div>
    )
  }
}
