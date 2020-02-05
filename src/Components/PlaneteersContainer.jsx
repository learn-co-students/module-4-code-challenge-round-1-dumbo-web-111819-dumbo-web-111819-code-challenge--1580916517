import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {
  // console.log(props.planets)
  const arrayOfComponents=props.planets.map(planetObj=><Planeteer key={planetObj.id} planet={planetObj}/>)

  return (
    <ul className="cards">
      {
        // "Render Planeteers here"
        arrayOfComponents
      }
    </ul>
  )

};

export default PlaneteersContainer;
