import React, { Component } from 'react';
import Planeteer from './Planeteer'

class PlaneteersContainer extends Component {

  render() {
    // console.log(this.props.planeteers)
    let arrOfPlaneteers = this.props.planeteers.map(planeteer => (<Planeteer key={planeteer.id} planeteer={planeteer}/>))

    return (
      <div>
    <ul className="cards">
    {
    arrOfPlaneteers
    }
    </ul>
      </div>
    );
  }
}

export default PlaneteersContainer;

