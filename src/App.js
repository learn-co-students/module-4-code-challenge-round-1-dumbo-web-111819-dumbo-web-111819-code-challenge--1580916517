import React from 'react';
import './App.css';
import Header from './Components/Header'
// import randPlaneteer from './Components/RandomButton'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteers: [],
    searchTerm: ""
  }

  componentDidMount(){

    fetch('http://localhost:4000/planeteers')
    .then( r => r.json())
    .then( planeteerData => {
        this.setState({
            planeteers: planeteerData
        })
    })
  }


  handleSearch = (text) =>{
    // console.log(text)
    this.setState({
        searchTerm: text
    })
  }

  searchPool = () =>{
      return this.state.planeteers.filter( planeteer => planeteer.name.includes(this.state.searchTerm) || planeteer.bio.includes(this.state.searchTerm))
  }


  getRandPlaneteer = (planeteerObj) =>{
    // console.log(planeteerObj)
    let newArray = [...this.state.planeteers, planeteerObj]
    this.setState({
        planeteers: newArray
    })
  }

  render(){
    return (
      <div>
        <Header />
        <SearchBar searchTerm={this.state.searchTerm} handleSearch={this.handleSearch}/>
        <RandomButton getRandPlaneteer={this.getRandPlaneteer} />
        <PlaneteersContainer planeteers={this.searchPool()}/>
      </div>
    );
  }

}

export default App;
