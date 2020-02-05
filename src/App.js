import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteers: [],
    quotes: [],
    searchText: ""
  }

  componentDidMount(){
    fetch("http://localhost:4000/planeteers")
    .then(r=>r.json())
    .then(data=>{
      this.setState({
        planeteers: data
      })
    })
  }

  toggleCard = (p) => {
    if(this.state.quotes.includes(p)){
      let newState = this.state.quotes.filter(planeteer=> planeteer !== p)
      this.setState({
        quotes: newState
      })      
    } else {
      let newState = [...this.state.quotes, p]
      this.setState({
        quotes: newState
      })
    }
  }

  search = event => {
    this.setState({
      searchText: event.target.value
    })
  }

  addP = (p) => {
    let newState = [...this.state.planeteers, p]
    this.setState({
      planeteers: newState
    })
  }



  render(){
    let displayPs = this.state.planeteers.filter(p=> p.name.includes(this.state.searchText) || p.bio.includes(this.state.searchText))
    return (
      <div>
        <Header />
        <SearchBar searchText={this.state.searchText} search={this.search}/>
        <RandomButton addP={this.addP}/>
        <PlaneteersContainer planeteers={displayPs} quotes={this.state.quotes} toggleCard={this.toggleCard}/>
      </div>
    );
  }

}

export default App;
