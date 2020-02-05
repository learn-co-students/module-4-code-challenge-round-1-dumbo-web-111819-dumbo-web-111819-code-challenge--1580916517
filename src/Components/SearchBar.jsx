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
      <label htmlFor="age">Sort By Age:</label>
      <input onChange={this.props.toggleSortByAge} type="checkbox" id="age" name="age"/>
      
      {/* next - how to handle checked or not for a checkbox? */}
      
      </div>
    );
  }

}

export default SearchBar;
