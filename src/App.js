import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {
  state = {
    planeteers : [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch(`http://localhost:4000/planeteers`)
    .then(r => r.json())
    .then((planeteers) => {
      this.setState({
      planeteers
      })
    })
  }
//---------------------Filter-----------------------//
  //Onchnage will set the state of searchTerm to evt
  handleOnChange = (evt) => {
    this.setState({
      searchTerm: evt.target.value
    })
  }

  //handleSearch should Filter out by name or bio
  handleSearch=()=>{
    let filteredArray = this.state.planeteers.filter(planeteer => {
      return planeteer.name.toLowerCase().includes(this.state.searchTerm) || planeteer.bio.toLowerCase().includes(this.state.searchTerm)
    })
    return filteredArray
  }

  //Generate Random Planeteer send props to get planteer Obj
  //add to the array of planeteers
    getRandomPlanteer=(randomPlaneteer)=>{
      // console.log(randomPlaneteer);
      let newArray = [...this.state.planeteers, randomPlaneteer]
      this.setState({
        planeteers: newArray
      })
    }

//delete planeteer
  handleDelete=(pObj)=>{
    // console.log(pObj);
    let updatedArray = this.state.planeteers.filter(planeteer =>{
      return planeteer.id !== pObj.id
    })
    this.setState({
      planeteers: updatedArray
    })
  }



  render(){
    // console.log(this.state.searchTerm);
    // console.log(this.state.planeteers);
    return (
      <div>
        <Header />
        <SearchBar searchTerm={this.state.searchTerm} handleOnChange={this.handleOnChange} />
        <RandomButton getRandomPlanteer={this.getRandomPlanteer}/>
        <PlaneteersContainer handleDelete={this.handleDelete} planeteers={this.handleSearch()} />
      </div>
    );
  }

}

export default App;
