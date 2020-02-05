import React from 'react';

class SearchBar extends React.Component {

  searchOnChange = (e) => {
    //on change controlls the state.
    // debugger
    this.props.dynamicSearch(e.target.value)
  }

  handleSort = (e) => {
      this.props.sortByAge(e)
  }

  render() {

    // console.log(this.props.search)

    return (
      <div className="search">
        {/* set value, controlls the form  */}
       <input value = {this.props.search} onChange = {this.searchOnChange}type="text" className="searchTerm" placeholder="Who would you like to search for?"/>
       <label htmlFor="age">Sort By Age:</label>
        <input onClick = {this.handleSort} type="checkbox" id="age" name="age"/>


      </div>
    );
  }

}

export default SearchBar;
