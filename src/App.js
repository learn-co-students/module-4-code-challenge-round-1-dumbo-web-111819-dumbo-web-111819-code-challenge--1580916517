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
    searchText: "",
    age: false
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
    let pObj = {
      name: p.name,
      fromUSA: p.fromUSA,
      born: p.born,
      bio: p.bio,
      quote: p.quote,
      pictureUrl: p.pictureUrl,
      twitter: p.twitter
    }
    fetch("http://localhost:4000/planeteers",{
      method: "POST",
      headers: {
        "Content-type":"application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify(
        pObj
      )
    })
  }

  delete = (p) => {
    let newState = this.state.planeteers.filter(pObj=> pObj !== p)
    this.setState({
      planeteers: newState
    })
    fetch(`http://localhost:4000/planeteers/${p.id}`, {
      method: "DELETE"
    })
  }

  sortByAge = () => {
    let newState = !this.state.age
    this.setState({
      age: newState
    })
  }


  render(){
    let displayPs = this.state.planeteers.filter(p=> p.name.toLowerCase().includes(this.state.searchText.toLowerCase()) || p.bio.includes(this.state.searchText))
    let sortedPs = [...displayPs]
    if(this.state.age){
      sortedPs.sort((a, b) => ((2020-a.born) < (2020-b.born) ? -1 : 1))
    }
    return (
      <div>
        <Header />
        <SearchBar age={this.state.age} sortByAge={this.sortByAge} searchText={this.state.searchText} search={this.search}/>
        <RandomButton addP={this.addP}/>
        <PlaneteersContainer delete={this.delete} planeteers={sortedPs} quotes={this.state.quotes} toggleCard={this.toggleCard}/>
      </div>
    );
  }

}

export default App;
