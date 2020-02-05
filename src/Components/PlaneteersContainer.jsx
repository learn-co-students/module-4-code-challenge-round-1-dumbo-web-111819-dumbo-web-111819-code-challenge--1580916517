// import React from 'react';
// import Planeteer from './Planeteer'

// const PlaneteersContainer = (props) => {

//   const plantsMapper = () =>  

//    props.plants.map(plant => {

//       <Planeteer plantObj = {plant} key = {plant.id} deletePlanteer = {props.deletePlanteer}/>
//     })

  
//   return (
//     <ul className="cards">
//       {
//         plantsMapper
//       }
//     </ul>
//   )

// };

// Was afraid to fail because of this step, it stopped me from moving onto other deliverables. 
// export default PlaneteersContainer;




import React, { Component } from 'react'
import Planeteer from './Planeteer'

export class PlaneteersContainer extends Component {

  render() {
    
    let plantsMapper = this.props.plants.map(plant => {

       return <Planeteer plantObj = {plant} key = {plant.id} deletePlanteer = {this.props.deletePlanteer}/>

    })

    return (
      <ul className="cards">
      {
        plantsMapper
      }
    </ul>
    )
  }
}
export default PlaneteersContainer



