import React from 'react';

class SearchBar extends React.Component {
  handleSorting = (evt) => {
    console.log("so agist")
    this.props.sortHandler(evt.target.checked)
  }

  render() {
    return (
      <div className="search">
       <input type="text" className="searchTerm" value = {this.props.searchTerm} onChange={this.props.searchHandler}placeholder="Who would you like to search for?"/>
       <label htmlFor="age">Sort By Age:</label>
      <input type="checkbox" id="age" name="age" onClick={this.handleSorting}/>
      </div>
    );
  }

}

export default SearchBar;
