import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {

  // console.log(props.planeteers)
  let planeteers = props.planeteers.map(planeteer => {
  return <Planeteer 
    key={planeteer.id} 
    planeteer={planeteer}
    deletePlaneteer={props.deletePlaneteer}
    />})

  return (
    <ul className="cards">
      {planeteers}
    </ul>
  )

};

export default PlaneteersContainer;
