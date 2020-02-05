import React from 'react';

class SearchBar extends React.Component {
  

  handleInput = (e) => {
    // console.log(e.target.value)
    this.props.handleSearch(e.target.value)
  }
  // handleClick = (e) => {
  //   // console.log(e.target.checked)
  //   this.props.handleSort(e.target.checked)
  // }
  render() {
    return (
      <div className="search">
       <input type="text" className="searchTerm"
        placeholder="Who would you like to search for?" onChange={this.handleInput}/>
          {/* <label htmlFor="age">Sort By Age:</label>
            <input onChange={this.handleClick} type="checkbox" id="age" name="age"/> */}
      </div>
    );
  }

}

export default SearchBar;
