import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {
  let planeteers = props.planeteers.map(p=> <Planeteer delete={props.delete} p={p} toggleCard={props.toggleCard} quotes={props.quotes}/>)
  return (
    <ul className="cards">
      {planeteers}
    </ul>
  )

};

export default PlaneteersContainer;
