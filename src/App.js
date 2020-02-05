import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {
  state = {
    planeteers : [],
    searchTerm: "",
    checked: false
  }

  componentDidMount() {
    fetch(`http://localhost:4000/planeteers`)
    .then(r => r.json())
    .then((planeteers) => {
      this.setState({
      planeteers
      })
    })
  }
//---------------------Filter-----------------------//
  //Onchnage will set the state of searchTerm to evt
  handleOnChange = (evt) => {
    this.setState({
      searchTerm: evt.target.value
    })
  }

  //handleSearch should Filter out by name or bio
  handleSearch=()=>{
    let filteredArray = this.state.planeteers.filter(planeteer => {
      return planeteer.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || planeteer.bio.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
    return filteredArray
    //the checked should be sorted here
    //sorry couldn't finish this :(
    // if(this.state.checked){
    //
  }

  //Generate Random Planeteer send props to get planteer Obj
  //add to the array of planeteers
    getRandomPlanteer=(randomPlaneteer)=>{
      // console.log(randomPlaneteer);
      //forgot to add Id
      let newId = this.state.planeteers.length + 1
      //then you spread the object and add the key
      let newObj = {... randomPlaneteer, id: newId}
      let newArray = [...this.state.planeteers, newObj]
      this.setState({
        planeteers: newArray
      })
    }

//delete planeteer
  handleDelete=(pObj)=>{
    // console.log(pObj);
    let updatedArray = this.state.planeteers.filter(planeteer =>{
      return planeteer.id !== pObj.id
    })
    this.setState({
      planeteers: updatedArray
    })
  }

//change the state of the checked = Onchnage
  handleChecked=()=>{
    this.setState({
      checked: !this.state.checked
    })
  }


  render(){
    // console.log(this.state.searchTerm);
    // console.log(this.state.planeteers);
    // console.log(this.state.checked);
    return (
      <div>
        <Header />
        <SearchBar checked={this.state.checked} handleChecked={this.handleChecked} searchTerm={this.state.searchTerm} handleOnChange={this.handleOnChange} />
        <RandomButton getRandomPlanteer={this.getRandomPlanteer}/>
        <PlaneteersContainer handleDelete={this.handleDelete} planeteers={this.handleSearch()} />
      </div>
    );
  }

}

export default App;
