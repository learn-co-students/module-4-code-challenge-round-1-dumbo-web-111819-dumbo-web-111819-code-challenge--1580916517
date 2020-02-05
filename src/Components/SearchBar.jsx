import React from 'react';

class SearchBar extends React.Component {

  handleChange = (e) => {
      this.props.handleSearch(e.target.value)
  }

  render() {
    // console.log(this.props.searchTerm)

    return (
      <div className="search">
       <input type="text" className="searchTerm" placeholder="Who would you like to search for?"      
        value={this.props.searchTerm}
        onChange={this.handleChange}
       />
      </div>
    );
  }

}

export default SearchBar;
