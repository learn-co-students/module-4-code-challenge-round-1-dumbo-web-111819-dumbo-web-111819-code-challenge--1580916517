import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'
import Planeteer from './Components/Planeteer';

class App extends React.Component {

  state={
    planeteers: [],
    search: "",
    displayPlaneteer: false,
    age: false
  }

  componentDidMount() {
    fetch('http://localhost:4000/planeteers')
    .then(r => r.json())
    // .then(console.log)
    .then(planeteers => {
      this.setState({
        planeteers: planeteers
      })
    })
  }

  updateSearch = (newValue) => {
    this.setState({
      search: newValue
    })
  }

  filterSearch = () => {
    let newArr = this.state.planeteers.filter(planeteer => {
      let searchValue = this.state.search.toLowerCase()
      return planeteer.name.toLowerCase().includes(searchValue) || planeteer.bio.toLowerCase().includes(searchValue)
    })

    if(this.state.age === true){
      return newArr.sort((planeteer1, planeteer2) => {return planeteer2.born - planeteer1.born})
    }else{
      return newArr
    }

    if(this.state.displayPlaneteer === true){
      return this.state.planeteers
    }else{
      return newArr
    }


  }
  
  updateDisplayPlaneteer = () => {
    this.setState(prevState => {
      return {
        displayPlaneteer: !prevState.displayPlaneteer
      }
    })
  }

  displayNewPlaneteer = (newPlaneteer) => {
  
    let newArrPlaneteers = [...this.state.planeteers, newPlaneteer]

    this.setState(prevState => {
      return {
        planeteers: newArrPlaneteers,
        displayPlaneteer: !prevState.displayPlaneteer
      }
    })
  }

  deletePlaneteer = (id) => {
    let newArr = this.state.planeteers.filter(planeteer => planeteer.id !== id)

    this.setState({
      planeteers: newArr
    })
  }

  sortAge = (valueChecked) => {
    // console.log(valueChecked)
    this.setState({
      age: valueChecked
    })
  }

  render(){
    // console.log(this.state.planeteers)
    // console.log(this.state.search)

    return (
      <div>
        <Header />
        <SearchBar 
        search={this.state.search} 
        updateSearch={this.updateSearch}
        sortAge={this.sortAge}
        />
        <RandomButton displayNewPlaneteer={this.displayNewPlaneteer}/>
        <PlaneteersContainer 
        planeteers={this.filterSearch()}
        deletePlaneteer={this.deletePlaneteer}
        />
      </div>
    );
  }

}

export default App;
