import React from 'react';

export default function DesignBox(props) {
  let { DesignBox } = props
  return (

      <div className="designContainer">
<div className="half-left">
<div className="half-img-container">

</div>
</div>

<div className="half-right">
<h1>{DesignBox.title}</h1>
          <p>{DesignBox.cathegory}</p>
          <p>{DesignBox.header}</p>
          <p>{DesignBox.description}</p>
          
</div>



    



</div>
  )
}
  


// {DesignBox.img()}