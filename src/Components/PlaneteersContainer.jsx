import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {

  let planeteerMapper = props.planeteers.map(planeteer => <Planeteer key={planeteer.id} planeteer={planeteer} />)
  return (
    <ul className="cards">
      {
        planeteerMapper
      }
    </ul>
  )

};

export default PlaneteersContainer;
