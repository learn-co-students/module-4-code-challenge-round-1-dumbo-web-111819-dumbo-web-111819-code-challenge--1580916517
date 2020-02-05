import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteers:[],
    search: ""
  }

  componentDidMount() {
    fetch("http://localhost:4000/planeteers")
    .then(r => r.json())
    .then(res => {
      this.setState({
        planeteers:res
      })
    })
  }
  searchHandler = (evt) => {
   
    this.setState({
      search:evt.target.value
    })
  }
  arrFilter = () => {
   
    let mappedArr = this.state.planeteers.filter(planeteer => planeteer.name.toLowerCase().includes(this.state.search) || planeteer.bio.toLowerCase().includes(this.state.search))
    return mappedArr
  }


  addRandomHero = (planeteer) => {
    console.log(planeteer)
    let updatedarr = [...this.state.planeteers, planeteer]
    this.setState({
      planeteers: updatedarr
    })
  }
  render(){
    
    return (
      <div>
        <Header />
        <SearchBar searchTerm={this.state.search} searchHandler ={this.searchHandler}/>
        <RandomButton addRandomHero = {this.addRandomHero}/>
        <PlaneteersContainer planeteers={this.arrFilter()}/>
      </div>
    );
  }

}

export default App;
