import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {

  // const sortedPlaneteers = props.planeteers.sort((a, b) => a - b)  

  let planeteerMapper = props.planeteers.map(planeteer => <Planeteer key={planeteer.id} 
    planeteer={planeteer} removePlaneteer={props.removePlaneteer}/>)
  return (
    <ul className="cards">
      {planeteerMapper}
    </ul>
  )

};

export default PlaneteersContainer;
