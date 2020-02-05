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

  getPlaneteerInfo = (planeteerObjInfo) => {
    // console.log(planeteerObjInfo)
    let {name, bio, quote, twitter, pictureUrl, born, fromUSA} = planeteerObjInfo
    console.log(name, bio, quote, twitter, pictureUrl, born, fromUSA)
    fetch(`http://localhost:4000/planeteers`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        name,
        bio, 
        quote,
        twitter,
        pictureUrl,
        born,
        fromUSA
      })
    })
    .then(resp => resp.json())
    .then(newObj => {
      let newArr = [...this.state.planeteers, newObj]
      this.setState({
        planeteers: newArr
      })
    })
  }

  deletePlaneteer = (objToDelete) => {
    // console.log(objToDelete)
    fetch(`http://localhost:4000/planeteers/${objToDelete.id}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(emptyObj => {
      if(emptyObj){
        let newArray = this.state.planeteers.filter((planeteerObj) => {
          return planeteerObj.id !== objToDelete.id
        })
        this.setState({
          planeteers: newArray
        })
      }
    })
  }

  render(){
    // console.log(this.state.planeteers)
    return (
      <div>
        <Header />
        <SearchBar searchValue={this.state.searchTerm} getSearchInput={this.handleSearch}/>
        <RandomButton getPlaneteerInfo={this.getPlaneteerInfo}/>
        <PlaneteersContainer deletePlaneteer={this.deletePlaneteer} planeteers={this.searchPlaneteers()}/>
      </div>
    );
  }

}

export default App;
