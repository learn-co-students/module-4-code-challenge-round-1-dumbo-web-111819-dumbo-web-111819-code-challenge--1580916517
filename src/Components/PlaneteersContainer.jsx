// import React from 'react';
// import Planeteer from './Planeteer'

// const PlaneteersContainer = (props) => {

//   console.log(props.plants)

//   let plantsMapper = () => {
//     props.plants.map(plant => {


//       return <Planeteer plantObj = {plant} key ={plant.id}/>

//     })
//   }

//   return (
//     <ul className="cards">
//       {
//         plantsMapper
//       }
//     </ul>
//   )

// };

// export default PlaneteersContainer;
import React, { Component } from 'react'
import Planeteer from './Planeteer'

export class PlaneteersContainer extends Component {

  render() {

    let plantsMapper = this.props.plants.map(plant => {

       return <Planeteer plantObj = {plant} key = {plant.id} />
       
    })

    return (
      <div>
          {plantsMapper}
      </div>
    )
  }
}

export default PlaneteersContainer
