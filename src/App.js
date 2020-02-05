import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    allPlaneteers: [],
    searchTerm: ""
  }


  componentDidMount(){
    fetch('http://localhost:4000/planeteers')
      .then(res => res.json())
      .then(data => this.setState({allPlaneteers: data}));
  }

  handleOnChange = (evt) => {
    this.setState({searchTerm: evt.target.value})
  }

  handleFilter = () => {
    const searchResult = this.state.allPlaneteers.filter(planeteer => 
      planeteer.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      )
      return searchResult
    }

    addRandom = (randomPlaneteer) => {
      fetch(`http://localhost:4000/planeteers`, {
            method: 'POST',
            body: JSON.stringify({
      
              name: randomPlaneteer.name, 
              fromUSA: randomPlaneteer.fromUSA,
              born: randomPlaneteer.born,
              bio: randomPlaneteer.bio,
              quote: randomPlaneteer.quote,
              pictureUrl: randomPlaneteer.pictureUrl,
              twitter: randomPlaneteer.twitter,
              
              
            }),
            headers:{
              'Content-Type': 'application/json',
              "Accept": "application/json"
            }
          })
      this.setState({allPlaneteers: [...this.state.allPlaneteers, randomPlaneteer]})
    }

  render(){
    console.log(this.state.allPlaneteers);
    return (
      <div>
        <Header />
        <SearchBar searchTerm={this.state.searchTerm} handleOnChange={this.handleOnChange}/>
        <RandomButton addRandom={this.addRandom}/>
        <PlaneteersContainer allPlaneteers={this.state.allPlaneteers} handleFilter={this.handleFilter}/>
      </div>
    );
  }

}

export default App;
