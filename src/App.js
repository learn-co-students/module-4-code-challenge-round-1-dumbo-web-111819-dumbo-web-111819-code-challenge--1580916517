import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state={
    planeteers: [],
    searchTerm: ""
  }

  componentDidMount(){
    fetch('http://localhost:4000/planeteers')
    .then(r => r.json())
    .then(planeteers => this.setState({
      planeteers
    }))
  }

  setSearchTerm = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  removePlaneteer = (id) => {
    console.log('remove', id)
    this.setState(prevState => {
      let copiedPlaneteers = prevState.planeteers
      let idx = prevState.planeteers.findIndex(planeteer => planeteer.id === id)
      copiedPlaneteers.splice(idx, 1)
      return (
        {planeteers: copiedPlaneteers}
      )

      // deletion does not persist in server yet

    })
  }

  addRandomPlaneteer = (randomPlaneteer) => {
    console.log('before: ', randomPlaneteer);
    fetch('http://localhost:4000/planeteers', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(randomPlaneteer)
    })
    .then(r => r.json())
    .then(newPlaneteer => {
      this.setState(prevState => {
        let newPlaneteers = [newPlaneteer, ...prevState.planeteers]
        return(
          {
            planeteers: newPlaneteers
          }
        )
      })
    })
  }

  render(){
    return (
      <div>
        <Header />
        <SearchBar searchValue={this.state.searchTerm} setSearchTerm={this.setSearchTerm} />
        <RandomButton addRandomPlaneteer={this.addRandomPlaneteer} />
        <PlaneteersContainer 
          planeteers={this.state.planeteers} 
          searchTerm={this.state.searchTerm} 
          removePlaneteer={this.removePlaneteer}
        />
      </div>
    );
  }

}

export default App;
