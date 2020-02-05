import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {


  state = {
    plants: [],
    search: ''

  }

// Add random planteer

addRandomPlanteer = (newPlanteer) => {

    // console.log(newPlanteer)
    //Got new planteer obj from randombutton component, now push to the array

    let newPlanteerAddedArray = [...this.state.plants, newPlanteer]
    this.setState({
      plants: newPlanteerAddedArray
    })
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

  fetch('http://localhost:4000/planeteers')
  .then(res => res.json())
  .then(plantFetchArray => {
    this.setState({
      plants: plantFetchArray
    })
  })
}



  render(){
    // console.log(this.state.plants)

    return (
      <div>
        <Header />
        <SearchBar dynamicSearch = {this.dynamicSearch} search ={this.state.search}/>
        <RandomButton addRandomPlanteer = {this.addRandomPlanteer}/>
        <PlaneteersContainer 
          plants = {this.displayArray()}
        
        
        />
      </div>
    );
  }

}

export default App;
