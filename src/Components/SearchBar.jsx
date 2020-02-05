import React from 'react';

class SearchBar extends React.Component {

  render() {
    return (
      <div className="search">
       <input value={this.props.search} onChange={this.props.handleChange} type="text" className="searchTerm" placeholder="Who would you like to search for?" name="search"/>
      </div>
    );
  }

}

export default SearchBar;
