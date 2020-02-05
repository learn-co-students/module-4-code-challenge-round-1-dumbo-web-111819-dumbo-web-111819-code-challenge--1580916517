import React from 'react';

class SearchBar extends React.Component {
  handleChange=(e) => {
    this.props.handleOnChange(e.target.value)
    
  }

  render() {
    return (
      <div className="search">
       <input value={this.props.value} onChange={this.handleChange} type="text" className="searchTerm" placeholder="Who would you like to search for?"/>
      </div>
    );
  }

}

export default SearchBar;
