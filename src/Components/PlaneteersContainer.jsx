import React from 'react';
import Planeteer from './Planeteer'

const PlaneteersContainer = ({planeteers, searchTerm, removePlaneteer, sortByAge}) => {

  // console.log(planeteers)

  const renderPlaneteers = () => {
    // console.log('term from container: ', searchTerm);
    console.log(sortByAge)
    let filteredPlaneteers = [
      ...planeteers.filter(planeteer => {
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
    ]
    if (sortByAge) {
      return filteredPlaneteers.sort((a, b) => 
        // console.log(a.props.planeteer.born);
        (a.props.planeteer.born < b.props.planeteer.born) 
          ? 1 : 
        (a.props.planeteer.born > b.props.planeteer.born) 
          ? -1 : 0
      )
    } else {
      return filteredPlaneteers
    }
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
