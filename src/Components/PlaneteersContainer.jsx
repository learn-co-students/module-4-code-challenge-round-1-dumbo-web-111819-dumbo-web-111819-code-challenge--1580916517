import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {
  // console.log(props.planeteers);
    let planetCard = props.planeteers.map(planeteer => <Planeteer handleDelete={props.handleDelete} key={planeteer.id} planeteer={planeteer}/>)
  return (
    <ul className="cards">
      {planetCard}
    </ul>
  )

};

export default PlaneteersContainer;
