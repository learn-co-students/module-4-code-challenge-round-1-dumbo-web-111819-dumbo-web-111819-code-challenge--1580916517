import React from 'react';

class SearchBar extends React.Component {

  render() {
    return (
      <div className="search">
       <input type="text"
          className="searchTerm"
          placeholder="Who would you like to search for?"
          onChange={this.props.handleOnChange}
          value={this.props.searchTerm}

          />
        <label htmlFor="age">Sort By Age:</label>
        <input type="checkbox"
          id="age"
          name="age"
          onChange={this.props.handleChecked}
          value={this.props.checked}
          />
      </div>
    );
  }

}

export default SearchBar;
