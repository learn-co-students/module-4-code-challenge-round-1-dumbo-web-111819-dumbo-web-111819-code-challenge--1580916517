import React from 'react';
import './App.css';
import Header from './Components/Header'

import RandomButton from './Components/RandomButton'
import PlaneteersContainer from './Components/PlaneteersContainer'
import SearchBar from './Components/SearchBar'

class App extends React.Component {

  state = {
    planeteers:[],
    search: "",
    isClicked:false
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
    let {name, bio,born,twitter,quote,fromUSA,pictureUrl} = planeteer
    fetch("http://localhost:4000/planeteers",{
      method:"POST",
      headers: {
        'Content-Type': "application/json",
        "Accept":"application/json"
      },
      body: JSON.stringify({
        name,
        bio,
        born,
        twitter,
        quote,
        fromUSA,
        pictureUrl
      })
    })
    .then(r => r.json())
    .then(res => {
      let updatedarr = [...this.state.planeteers, res]
      this.setState({
          planeteers: updatedarr
        })
    })
    
  }
  handleDelete = (id) => {
    console.log(id)
    fetch(`http://localhost:4000/planeteers/${id}`,{
      method:"DELETE",})
      .then(r => r.json())
      .then(res => {
        let updatedarr = this.state.planeteers.filter(planeteer => planeteer.id !== id)
        console.log(updatedarr)
        this.setState({
          planeteers:updatedarr
        })
      })
  }


  handleSorting = (bool) => {
    this.setState({
      isClicked:bool
    })
  }


  render(){
    console.log(this.state.isClicked)
    let newArray = [...this.state.planeteers]
    let ageSortedArray = newArray.sort((a,b) => a.born-b.born)

    return (
      <div>
        <Header />
        <SearchBar searchTerm={this.state.search} searchHandler ={this.searchHandler} sortHandler = {this.handleSorting}/>
        <RandomButton addRandomHero = {this.addRandomHero}/>
        <PlaneteersContainer planeteers={this.state.isClicked ? ageSortedArray : this.arrFilter()} delete={this.handleDelete}/>
      </div>
    );
  }

}

export default App;
