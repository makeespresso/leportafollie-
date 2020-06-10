import React from 'react';

export default function SkillBox(props) {
  let { SkillBox } = props
  return (
    <div className="skillbox-style">
      {SkillBox.svg()}
      <small>{SkillBox.name}</small>
    </div>
  )
}
