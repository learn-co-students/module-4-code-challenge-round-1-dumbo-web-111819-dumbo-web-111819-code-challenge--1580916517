import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'
import axios from 'axios'

const URL = 'http://localhost:4000/planeteers'

class App extends React.Component {

  state = {
    allPlaneteers: [],
    search: "",   
  }

  componentDidMount() {
    axios.get(URL)
    .then(res => {
      const planeteersData = res.data
      this.setState({
        allPlaneteers: planeteersData
      })
    })
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  displaySearchPlaneteers = () => {
    let searchArr = this.state.allPlaneteers
    let displayedSearch = searchArr.filter(planeteerObj => 
      planeteerObj.name.toLowerCase().includes(this.state.search) ||  
      planeteerObj.bio.toLowerCase().includes(this.state.search))
    return displayedSearch
  }
  addRandomPlaneteer = (planeteer) => {
    axios.post(URL,planeteer)
    this.setState({
      allPlaneteers: [planeteer, ...this.state.allPlaneteers]
    })
  }
  handleDelete = (planeteer) => {
    let updatedPlaneteers = this.state.allPlaneteers.filter(planeteerObj =>
     planeteerObj.name !== planeteer.name)
     this.setState({
       allPlaneteers: updatedPlaneteers
     })
  }
  
  
  

  render(){
    
    return (
      <div>
        <Header />
        <SearchBar handleChange={this.handleChange} search={this.state.search} />
        <RandomButton addRandomPlaneteer={this.addRandomPlaneteer} />
        <PlaneteersContainer  allPlaneteers={this.displaySearchPlaneteers()} handleDelete={this.handleDelete} />
      </div>
    );
  }

}

export default App;
