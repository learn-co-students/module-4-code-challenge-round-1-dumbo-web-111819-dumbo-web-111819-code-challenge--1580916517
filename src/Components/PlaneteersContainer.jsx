import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {

  let planeteer = props.planeteers.map( planeteer => <Planeteer planeteer={planeteer} key={planeteer.id}/> )
  
  return (
    <ul className="cards">
      {
        planeteer
      }
    </ul>
  )

};

export default PlaneteersContainer;
