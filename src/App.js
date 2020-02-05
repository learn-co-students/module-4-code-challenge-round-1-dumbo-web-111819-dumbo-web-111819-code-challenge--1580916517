import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteers: [],
    searchTerm: ''
  }

  componentDidMount(){
    fetch(`http://localhost:4000/planeteers`)
    .then(resp => resp.json())
    .then(json => this.setState({planeteers: json}))
  }

  handleRandomButtonClick = (randomPlaneteer) => {
    console.log('he;')
    this.setState({planeteers: [randomPlaneteer, ...this.state.planeteers]})
  }

  onChangeSearch = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  dynamicSearch = () =>{
    let loweredSearch = this.state.searchTerm.toLowerCase()
    let filteredPlaneteers = this.state.planeteers.filter(planeteer => planeteer.name.toLowerCase().includes(loweredSearch) || planeteer.bio.toLowerCase().includes(loweredSearch))
    return filteredPlaneteers
  }


  render(){
    return (
      <div>
        <Header />
        <SearchBar searchTerm = {this.state.searchTerm} onChangeSearch= {this.onChangeSearch} />
        <RandomButton handleRandomButtonClick = {this.handleRandomButtonClick}/>
        <PlaneteersContainer planeteers = {this.dynamicSearch()}/>
      </div>
    );
  }

}

export default App;
