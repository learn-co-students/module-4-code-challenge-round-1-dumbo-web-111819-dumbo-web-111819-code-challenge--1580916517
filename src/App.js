import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {
  
  state={
    planets:[],
    searchTerm:'',
    isChecked:false
  }
  componentDidMount(){
    fetch('http://localhost:4000/planeteers')
    .then(res=>res.json())
    .then(pojos=>this.setState({
      planets:pojos
    }))
  }


  handleSearch=() => {
    // console.log(this.state.search)
    if(this.state.searchTerm){
      let filteredArray=[this.state.planets].filter(planet=>planet.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || planet.bio.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    return filteredArray

    }
    // let filteredArray=[...this.state.planets].filter(planet=>planet.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || planet.bio.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    // return filteredArray
    // return this.state.planets
    
  }

  handleIsChecked=(e) => {
    this.setState({
      isChecked :!this.state.isChecked
    })
    
  }
  handleSorting=() => {
    
  }

  handleOnChange=(e) => {
    this.setState({
      searchTerm:e
    })
    // ,()=>console.log(this.state.searchTerm))
    // console.log(this.state.searchTerm)
    
  }

  getRandomObj=(pojo) => {
    // console.log(pojo)
    let newPlanetsArray=[...this.state.planets,pojo]
    // console.log(newPlanetsArray)
    this.setState({
      planets:newPlanetsArray
    })

    // fetch('http://localhost:4000/planeteers',{
    //   method:'POST',
    //   headers:{'Content-Type':'application/json'},
    //   body:JSON.stringify({
    //     name:pojo.name,
    //     fromUSA:pojo.fromUSA,
    //     born:pojo.born,
    //     bio:pojo.bio,
    //     quote:pojo.quote,
    //     pictureUrl:pojo.pictureUrl,
    //     twitter:pojo.twitter
    //   })
    // })
    // .then(res=>res.json())
    // .then(pojo=>{
    //   let newPlanetsArray=[...this.state.planets,pojo]
    //     this.setState({
    //   planets:newPlanetsArray
    //   })
    // })
    
  }

  render(){
    // console.log(this.state.planets)
    return (
      <div>
        <Header />
        <SearchBar handleIsChecked={this.handleIsChecked} isChecked={this.state.isChecked} value={this.state.searchTerm} handleOnChange={this.handleOnChange} />
        <RandomButton getRandomObj={this.getRandomObj}/>
        <PlaneteersContainer planets={this.state.searchTerm? this.handleSearch():this.state.planets} />
      </div>
    );
  }

}

export default App;


// planets={this.state.planets}