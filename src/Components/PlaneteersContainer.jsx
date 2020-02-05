import React from 'react';
import Planeteer from './Planeteer';
import { render } from '@testing-library/react';

class PlaneteersContainer extends React.Component {
  // console.log(this.props.planeteers)
  //  =>  gives an array of Planeteers

render(){
  let planeteerObjMapped = this.props.planeteers.map(planeteer => {
    return <Planeteer key={planeteer.id} planeteer={planeteer} />
  });
  console.log(planeteerObjMapped)
  return (
    <ul className="cards">
      {
        planeteerObjMapped
      }
    </ul>
  )}
};

// needed to change this into a class component because for some reason when i pass my props down from this child to it's own child (planeteer) the props in planeteer are undefined and this is taking up too much of my time. 
export default PlaneteersContainer;
