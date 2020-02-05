import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state={
    planeteers: [],
    searchTerm: ''
  }

  componentDidMount(){
    fetch(`http://localhost:4000/planeteers`)
    .then(resp => resp.json())
    .then(planeteersData => {
      this.setState({
        planeteers: planeteersData
      })
    })
  }

  handleSearch = (searchTerm) => {
    this.setState({
      searchTerm: searchTerm
    })
  }

  searchPlaneteers = () => {
    let {planeteers, searchTerm} = this.state
    let filteredPlaneteers = planeteers.filter((planeteerObj)=>{
      return planeteerObj.name.toLowerCase().includes(searchTerm.toLowerCase()) || planeteerObj.bio.toLowerCase().includes(searchTerm.toLowerCase())
    })
    return filteredPlaneteers
  }

  getPlaneteerInfo = (planeteerObj) => {
    // console.log(planeteerObj)
    let newPlaneteersArr = [...this.state.planeteers, planeteerObj]
    this.setState({
      planeteers: newPlaneteersArr
    })
  }

  render(){
    // console.log(this.state.searchTerm)
    return (
      <div>
        <Header />
        <SearchBar searchValue={this.state.searchTerm} getSearchInput={this.handleSearch}/>
        <RandomButton getPlaneteerInfo={this.getPlaneteerInfo}/>
        <PlaneteersContainer planeteers={this.searchPlaneteers()}/>
      </div>
    );
  }

}

export default App;
