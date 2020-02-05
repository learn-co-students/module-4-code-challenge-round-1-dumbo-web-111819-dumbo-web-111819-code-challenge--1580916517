import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

    state = { 
      planeteers: [],
      searchField: ''
    }

  componentDidMount() { 
    fetch("http://localhost:4000/planeteers")
    .then(r => r.json())
    .then(planeteersobj => { 
      this.setState({
        planeteers: planeteersobj
      })
    })
  }
    handleSearch = (infoFromSearch) => {
      this.setState({
        searchField: infoFromSearch
      })
      // console.log(infoFromSearch)
    }
    searchedPlaneteers = () => {
      const filteredplaneteers = this.state.planeteers.filter(planeteer =>
        planeteer.name.toLowerCase().includes(this.state.searchField.toLowerCase()))
      return filteredplaneteers
    }
    addPlaneteer = (newPlaneteer) => {
      console.log(newPlaneteer)
      // newPlaneteer.key = newPlaneteer.id
      this.setState({
        planeteers: [...this.state.planeteers, newPlaneteer]
      })
    }
    

  render(){
    
    return (
      <div>
        <Header />
        <SearchBar handleSearch={this.handleSearch}/>
        <RandomButton addPlaneteer={this.addPlaneteer} />
        <PlaneteersContainer planeteers={this.searchedPlaneteers()}/>
      </div>
    );
  }

}

export default App;
