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
    searchTerm: "",
    isChecked: false
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

  removePlaneteer = (planeteerObj) =>{
    // console.log(planeteerObj)
    let newArray = this.state.planeteers.filter( planeteer => planeteer.id !== planeteerObj.id)
    // console.log(newArray)
    this.setState({
        planeteers: newArray
    })
  }


  filterByAge = (e) =>{
      console.log(e)
      let date = new Date();
      let current_yr =  parseInt(date.getFullYear())      

       return this.state.planeteers.filter( planeteer => {
         
        //  let sorted = this.state.planeteers.sort( (a, b) => (a.age > pb.age) ? 1 : -1)
        let age = current_yr - planeteer.born
        
        return age > 20

       })
  }

  render(){
    return (
      <div>
        <Header />
        <SearchBar searchTerm={this.state.searchTerm} handleSearch={this.handleSearch} filterByAge={this.filterByAge}/>
        <RandomButton getRandPlaneteer={this.getRandPlaneteer} />
        <PlaneteersContainer planeteers={this.searchPool()} removePlaneteer={this.removePlaneteer}/>
      </div>
    );
  }

}

export default App;
