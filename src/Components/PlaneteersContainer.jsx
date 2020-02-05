import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {
// console.log(props.planeteers)
let allPlaneteers = props.planeteers.map(planeteer => <Planeteer key={planeteer.id} planeteer={planeteer} />)
  return (
    <ul className="cards">
        {allPlaneteers}
    </ul>
  )

};

export default PlaneteersContainer;
