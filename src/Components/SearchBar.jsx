import React from 'react';

class SearchBar extends React.Component {

  onChange = (e) => {
    this.props.onChangeSearch(e)
  }

  render() {
    return (
      <div className="search">
       <input type="text" name = 'searchTerm' className="searchTerm" placeholder="Who would you like to search for?" value ={this.props.searchTerm} onChange={this.onChange}/>
      </div>
    );
  }

}

export default SearchBar;
