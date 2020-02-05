import React from 'react';

class SearchBar extends React.Component {

  render() {
    return (
      <div className="search">
       <input type="text" className="searchTerm" value={this.props.searchText} onChange={this.props.search} placeholder="Who would you like to search for?"/>
       <label htmlFor="age">Sort By Age:</label>
       <input type="checkbox" id="age" name="age" checked={this.props.age} onClick={this.props.sortByAge}/>
      </div>
    );
  }

}

export default SearchBar;
