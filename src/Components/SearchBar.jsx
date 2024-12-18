import React from 'react';

class SearchBar extends React.Component {

  handleChange = (e) => {
    console.log(e.target.value)
    this.props.getSearchStr(e.target.value)
  }

  render() {
    return (
      <div className="search">
       <input onChange={this.handleChange}type="text" className="searchTerm" placeholder="Who would you like to search for?" value={this.props.searchTerm}/>
      </div>
    );
  }

}

export default SearchBar;
