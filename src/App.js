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

  componentDidMount() {
  fetch('http://localhost:4000/planeteers')
    .then(r => r.json())
    .then(obj => this.setState({
      planeteers: obj
    }))  
}

  getSearchStr = (searchStr) => {
    // console.log(searchStr)
    this.setState({
      searchTerm: searchStr
    })
  }

  generateNewArr = () => {
    console.log(this.state.searchTerm)


    const newArr = this.state.planeteers.filter(planeteer => planeteer.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    return newArr

  }

  render(){
    // console.log(this.state.searchTerm)
    return (
      <div>
        <Header />
        <SearchBar searchTerm={this.state.searchTerm} getSearchStr={this.getSearchStr}/>
        <RandomButton/>
        {/* <PlaneteersContainer planeteers={this.state.planeteers}/> */}
        <PlaneteersContainer planeteers={this.generateNewArr()}/>
      </div>
    );
  }

}

export default App;
