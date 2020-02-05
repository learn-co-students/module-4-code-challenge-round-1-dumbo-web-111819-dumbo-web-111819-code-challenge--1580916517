import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {
  
  state={
    planets:[],
    searchTerm:''
  }
  componentDidMount(){
    fetch('http://localhost:4000/planeteers')
    .then(res=>res.json())
    .then(pojos=>this.setState({
      planets:pojos
    }))
  }
  handleSearch=() => {
    let filteredArray=this.state.planets.filter(planet=>planet.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || planet.bio.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    return filteredArray
  }
  handleOnChange=(e) => {
    this.setState({
      searchTerm:e
    },()=>console.log(this.state.searchTerm))
    // console.log(this.state.searchTerm)
    
  }
  getRandomObj=(pojo) => {
    // console.log(pojo)
    let newPlanetsArray=[...this.state.planets,pojo]
    console.log(newPlanetsArray)
    this.setState({
      planets:newPlanetsArray
    })
    
  }

  render(){
    // console.log(this.state.planets)
    return (
      <div>
        <Header />
        <SearchBar value={this.state.searchTerm} handleOnChange={this.handleOnChange} />
        <RandomButton getRandomObj={this.getRandomObj}/>
        <PlaneteersContainer planets={this.handleSearch()} />
      </div>
    );
  }

}

export default App;


// planets={this.state.planets}