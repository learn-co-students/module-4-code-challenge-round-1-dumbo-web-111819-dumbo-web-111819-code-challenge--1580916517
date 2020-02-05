import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = ({planeteers, searchTerm, removePlaneteer}) => {

  // console.log(planeteers)

  const renderPlaneteers = () => {
    // console.log('term from container: ', searchTerm);
    return (
      planeteers.filter(planeteer => {
        return(
          planeteer.name.toLowerCase().includes(searchTerm.toLowerCase())
          ||
          planeteer.bio.toLowerCase().includes(searchTerm.toLowerCase())
        )
      })
      .map(planeteer => 
        <Planeteer 
          key={planeteer.id} 
          planeteer={planeteer} 
          removePlaneteer={removePlaneteer}
        />
      )
    )
  }

  return (
    <ul className="cards">
      {
        renderPlaneteers()
      }
    </ul>
  )

};

export default PlaneteersContainer;
