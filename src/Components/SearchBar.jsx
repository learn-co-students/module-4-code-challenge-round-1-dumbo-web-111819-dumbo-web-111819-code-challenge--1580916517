import React from 'react';


class SearchBar extends React.Component {
  
  state = {
    value: ""
  }

  // i know i did this wrong, didn't have enough time. 
  // let handleChange = (e) => {
  //   let newValue = [e.target.value]
  //   let oldState = [...this.state.value]

  //   this.setState(){
  //     value: [oldState, newValue]
  //   }
  // }


  let handleChange = () => {
    console.log(hello)
  }


  render() {
    return (
      <div className="search">
       <input value={this.state.value} onChange={this.handleChange} type="text" className="searchTerm" placeholder="Who would you like to search for?"/>
      </div>
    );
  }
}

export default SearchBar;
