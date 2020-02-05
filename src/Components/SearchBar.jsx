import React from 'react';

class SearchBar extends React.Component {
  

  render() {
    return (
      <div className="search">
       <input type="text" className="searchTerm" value = {this.props.searchTerm} onChange={this.props.searchHandler}placeholder="Who would you like to search for?"/>
      </div>
    );
  }

}

export default SearchBar;
