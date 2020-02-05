import React from 'react';

class SearchBar extends React.Component {

  handleChange = (e) => {
      this.props.handleSearch(e.target.value)
  }

  handleCheck = (e) =>{
    this.props.filterByAge(e)
  }

  render() {
    // console.log(this.props.searchTerm)

    return (
 
      <div className="search">

       <input type="text" className="searchTerm" placeholder="Who would you like to search for?"      
        value={this.props.searchTerm}
        onChange={this.handleChange}
       />
       <label htmlFor="age">Sort By Age:</label>
       <input type="checkbox" id="age" name="age" onClick={this.handleCheck}/>
      </div>
    );
  }

}

export default SearchBar;
