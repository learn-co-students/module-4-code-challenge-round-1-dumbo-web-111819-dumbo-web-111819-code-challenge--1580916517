import React from 'react';

class SearchBar extends React.Component {

  render() {
    return (
      <div className="search">
       <input type="text" className="searchTerm" value={this.props.searchText} onChange={this.props.search} placeholder="Who would you like to search for?"/>
      </div>
    );
  }

}

export default SearchBar;
