import React from 'react';

class SearchBar extends React.Component {

  render() {
    return (
      <div className="search">
       <input 
        value={this.props.searchValue}
        onChange={this.props.setSearchTerm} 
        type="text" className="searchTerm" 
        placeholder="Who would you like to search for?"
      />
      </div>
    );
  }

}

export default SearchBar;
