import React from 'react';
import './App.css';
import Header from './Components/Header';
import RandomButton from './Components/RandomButton';
import PlaneteersContainer from './Components/PlaneteersContainer';
import SearchBar from './Components/SearchBar';

class App extends React.Component {

  state = {
      planeteers: [],
      }
  
      componentDidMount() {
        fetch('http://localhost:4000/planeteers')
        .then(r => r.json())
        .then(planeteersObj => this.setState({ planeteers: planeteersObj})
        );
      }
      
  render(){
      console.log(this.state.planeteers)
      //  => an array of 8 objects 
      
    return (
      <div>
        <Header />
        <SearchBar />
        <RandomButton/>
        <PlaneteersContainer planeteers={this.state.planeteers}/>
      </div> 
    );
  }

}

export default App;
