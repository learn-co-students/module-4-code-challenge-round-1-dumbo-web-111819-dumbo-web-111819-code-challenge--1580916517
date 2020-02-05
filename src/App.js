import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteers: [],
    searchTerm: '',
    sortByAge: false
  }

  componentDidMount(){
    fetch(`http://localhost:4000/planeteers`)
    .then(resp => resp.json())
    .then(json => this.setState({planeteers: json}))
  }

  handleRandomButtonClick = (randomPlaneteer) => {
    console.log(randomPlaneteer)
      let configObj = {
        method: 'POST',
        headers: {
          'content-type':'application/json',
          'accept': 'application/json'
        },
        body: JSON.stringify(randomPlaneteer)
      }
      fetch(`http://localhost:4000/planeteers`, configObj)
        .then(resp => resp.json)
        .then(json => {
          this.setState({planeteers: [randomPlaneteer, ...this.state.planeteers]})
        })
    }
  
  onChangeSearch = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  dynamicSearch = () =>{
    let loweredSearch = this.state.searchTerm.toLowerCase()
    let filteredPlaneteers = this.state.planeteers.filter(planeteer => planeteer.name.toLowerCase().includes(loweredSearch) || planeteer.bio.toLowerCase().includes(loweredSearch))
    return filteredPlaneteers
  }

  deleteTheFriggenPlaneteerCuzYeaaahBoiii = (id) => {
    
    fetch(`http://localhost:4000/planeteers/${id}`, {method: 'DELETE'})
    .then(resp => resp.json())
    .then( 
      this.setState(prevState => { 
        let filteredPlaneteers = prevState.planeteers.filter(planeteer => planeteer.id !== id)
        return {planeteers: filteredPlaneteers }})
    )
  }

  sortByAgeChangeState = (e) => {
    this.setState({sortByAge: e.target.checked})
  }

  sortPlaneteerByAge = (planeteerArray) => {
    if(this.state.sortByAge){
      let newPlaneteerArray = [...planeteerArray]
      return newPlaneteerArray.sort((planeteer1,planeteer2) => planeteer2.born -planeteer1.born)
    } else{
      return planeteerArray
    }
  }


  render(){
    return (
      <div>
        <Header />
        <SearchBar 
          searchTerm = {this.state.searchTerm}
          onChangeSearch= {this.onChangeSearch} 
          sortByAgeChangeState = {this.sortByAgeChangeState}
        />
        <RandomButton 
          handleRandomButtonClick = {this.handleRandomButtonClick}
        />
        <PlaneteersContainer 
          planeteers = {this.sortPlaneteerByAge(this.dynamicSearch())}
          deleteTheFriggenPlaneteerCuzYeaaahBoiii ={this.deleteTheFriggenPlaneteerCuzYeaaahBoiii}
        />
      </div>
    );
  }

}

export default App;
