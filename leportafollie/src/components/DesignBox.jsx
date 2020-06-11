import React from 'react';

export default function DesignBox(props) {
  let { DesignBox } = props
  return (
    <>
      <div className="designContainer">
        <div className="designBox-style">
          <h1>{DesignBox.title}</h1>
          <p>{DesignBox.cathegory}</p>
          <p>{DesignBox.header}</p>
          <p>{DesignBox.description}</p>
        </div>

        {/* <div className="designImage">
          {DesignBox.img()}
        </div> */}
      </div>
    </>
  )
}
  