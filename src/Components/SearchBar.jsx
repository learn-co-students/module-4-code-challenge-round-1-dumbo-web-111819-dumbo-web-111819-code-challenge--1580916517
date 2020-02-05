import React from 'react';

class SearchBar extends React.Component {
  handleChange=(e) => {
    this.props.handleOnChange(e.target.value)
  }
  handleChecked=(e) => {
    // console.log(e.target.checked)
    this.props.handleIsChecked(e.target.checked)
    
  }

  render() {
    return (
      <div className="search">
       <input value={this.props.value} onChange={this.handleChange} type="text" className="searchTerm" placeholder="Who would you like to search for?"/>
       <label htmlFor="age">Sort By Age:</label>
            <input onChange={this.handleChecked} checked={this.props.isChecked} type="checkbox" id="age" name="age"/>
      </div>
    );
  }

}

export default SearchBar;
