import React from 'react';

class SearchBar extends React.Component {

  handleInput = (e) => {
    // console.log(e.target.value)
    this.props.handleSearch(e.target.value)
  }
  render() {
    return (
      <div className="search">
       <input type="text" className="searchTerm"
        placeholder="Who would you like to search for?" onChange={this.handleInput}/>
      </div>
    );
  }

}

export default SearchBar;
