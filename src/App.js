import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteers: [],
    searchValue: ''
  }

  componentDidMount() {
    fetch(`http://localhost:4000/planeteers`)
    .then(r => r.json())
    // .then(console.log)
    .then(planeteerObj => {
      this.setState({
        planeteers: planeteerObj
      })
    })
  }

  handleSearch = (event) => {
    // console.log(event.target.value)
    this.setState({
      searchValue: event.target.value
    })
    
  }

  filterPlaneteers = () => {
    let planeteerArr = this.state.planeteers
    // console.log(planeteerArr)
    planeteerArr.filter((planeteer) => {
      planeteer.name.includes(this.state.searchValue)
    })
    return planeteerArr
  }

  myCallBack = (dataFromRandButton) => {

  }

  render(){
    return (
      <div>
        <Header />
        <SearchBar value={this.filterPlaneteers()} onChange={this.handleSearch} searchValue={this.state.searchValue}/>
        <RandomButton callBackFromParent={this.myCallBack} />
        <PlaneteersContainer planeteers={this.state.planeteers} />
      </div>
    );
  }

}

export default App;
