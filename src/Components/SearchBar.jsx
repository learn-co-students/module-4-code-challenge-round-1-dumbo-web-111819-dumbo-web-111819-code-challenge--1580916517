import React from 'react';

class SearchBar extends React.Component {

  onChange = (e) => {
    this.props.onChangeSearch(e)
  }

  onChangeCheckbox = (e) => {
    this.props.sortByAgeChangeState(e)
  }

  render() {
    return (
      <div className="search">
      <label htmlFor="age">Sort By Age:</label>
      <input type="checkbox" id="age" name="age" onChange={this.onChangeCheckbox}/>
       <input type="text" name = 'searchTerm' className="searchTerm" placeholder="Who would you like to search for?" value ={this.props.searchTerm} onChange={this.onChange}/>
      </div>
    );
  }

}

export default SearchBar;
