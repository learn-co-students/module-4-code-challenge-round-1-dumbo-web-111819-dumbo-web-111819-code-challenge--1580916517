import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = (props) => {

  // console.log(props.planeteers)
  const creatPlaneteersCard = () => {
    return props.planeteers.map((planeteerObj) => {
      return <Planeteer key={planeteerObj.id} planeteer={planeteerObj}/>
    })
  }

  return (
    <ul className="cards">
      {
        creatPlaneteersCard()
      }
    </ul>
  )

};

export default PlaneteersContainer;
