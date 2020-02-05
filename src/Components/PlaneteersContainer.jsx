import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {
  
  let mappedArray = props.planeteers.map(planteer => <Planeteer key={planteer.id} obj={planteer}/>)
  return (
    <ul className="cards">
      {
        mappedArray
      }
    </ul>
  )

};

export default PlaneteersContainer;
