import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {
  return (
    <ul className="cards">
      {
        props.planeteers.map(planeteer => <Planeteer key={planeteer.id} planeteer={planeteer} deleteTheFriggenPlaneteerCuzYeaaahBoiii  ={props.deleteTheFriggenPlaneteerCuzYeaaahBoiii }/>)
      }
    </ul>
  )

};

export default PlaneteersContainer;
