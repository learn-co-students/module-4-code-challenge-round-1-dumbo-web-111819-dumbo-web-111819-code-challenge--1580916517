import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {
  const planeteerCards = props.allPlaneteers.map(planeteerObj =>
    <Planeteer key={planeteerObj.id} planeteers={planeteerObj}  />)
  return (
    <ul className="cards">
      {
        planeteerCards
      }
    </ul>
  )

};

export default PlaneteersContainer;
