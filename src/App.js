import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {


  state = {
    plants: [],
    search: '',
    sortAge: false,

  }

// Add random planteer

addRandomPlanteer = (newPlanteer) => {

    // console.log(newPlanteer)
    //Got new planteer obj from randombutton component, now push to the array

    fetch("http://localhost:4000/planeteers", {
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body:JSON.stringify({
        newPlanteer
      })
    })// End of fetch
    .then(res => res.json())
    .then(response => {
      
      let newPlanteerAddedArray = [...this.state.plants,newPlanteer]
      this.setState({
        plants: newPlanteerAddedArray
      })

      
    })//End of .then

}

  //Dynamic search
  // get text from search 
  dynamicSearch = (text) => {
    // console.log(text)
    this.setState({
      search: text
    })
  }


// method to display search array

displayArray = () => {
  let arrayWeCareAbout = this.state.plants.filter(plant => {

    return plant.name.toLowerCase().includes(this.state.search) || plant.bio.toLowerCase().includes(this.state.search)
  })

  return arrayWeCareAbout
}

componentDidMount() {

  fetch('http://localhost:4000/planeteers?_limit')  //So won't show  fetch the accidenally created object, avoid errors. 
  .then(res => res.json())
  .then(plantFetchArray => {
    this.setState({
      plants: plantFetchArray
    })
  })
}

deletePlanteer = (planeteerId) => {
    // console.log(planeteerId)

    fetch(`http://localhost:4000/planeteers/${planeteerId}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(res => {

      let deletedPlanteerArray = this.state.plants.filter(planteer => planteer.id !== planeteerId)

      this.setState({
        plants:deletedPlanteerArray
      })
    })

}

  sortByAge = (e) => {

    if (e){
      console.log('toggle state')
    }

  }




  // Sort by age array

  sortByAgeArray = () => {


    let renderSortedArray = this.state.plants.filter(planteer => {

            //Sort by age , then return the array and rerender with tenary.

              // planteer.age.toString().localeCompare(compareString[, locales[, options]]) 
            

            
    })
  }

















  render(){
    // console.log(this.state.plants)

    return (
      <div>
        <Header />
        <SearchBar dynamicSearch = {this.dynamicSearch} search ={this.state.search}   sortByAge = {this.sortByAge}/>
        <RandomButton addRandomPlanteer = {this.addRandomPlanteer}/>
        <PlaneteersContainer 
          deletePlanteer = {this.deletePlanteer}
          plants = {this.displayArray()}
        
        
        />
      </div>
    );
  }

}

export default App;
