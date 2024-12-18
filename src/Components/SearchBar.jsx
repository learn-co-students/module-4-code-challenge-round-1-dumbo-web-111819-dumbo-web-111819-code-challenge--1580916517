import React from 'react';

class SearchBar extends React.Component {

  handleSearch = (event) => {
    this.props.updateSearch(event.target.value)
  }

  handleAge = (event) => {
    this.props.sortAge(event.target.checked)
  }

  render() {
    // console.log(this.props)

    return (
      <div className="search">
       <input 
       type="text" 
       className="searchTerm" 
       placeholder="Who would you like to search for?"
       name="search"
       value={this.props.search}
       onChange={this.handleSearch}
       />
      <label htmlFor="age">Sort By Age:</label>
      <input 
      type="checkbox" 
      id="age" 
      name="age"
      value={this.props.age}
      onChange={this.handleAge}
      />
      </div>
    );
  }

}

export default SearchBar;
