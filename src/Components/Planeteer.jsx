import React from 'react';

class Planeteer extends React.Component {

  state = {
    toggleBio: true
  }

  handleToggle = (event) => {
    // console.log('you clicked meh')
    this.setState((prevState) => {
      return {toggleBio: !prevState.toggleBio}
    })
  }

  getAge = (planeteerObj) => {
    let {born} = this.props.planeteer
    let date = new Date();
    let year = date.getFullYear();
    // console.log(born)
    return year - born
  }


  render() {
    // console.log(this.props.planeteer)
    let {name, twitter, pictureUrl, bio, quote, fromUSA} = this.props.planeteer
    // console.log(this.props.planeteer.fromUSA)
    return (
      <li className="cards__item">
        <div className="card">
          <img onClick={this.handleToggle} src={pictureUrl} alt={name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text">{this.state.toggleBio ? bio : quote}</p>
            <div className="card__detail">
              <p>{twitter}</p>
              <p>Age: {this.getAge()}</p>
              <p>{ fromUSA ? 'USA-Based' : 'Working Overseas'}</p>
            </div>
            {/* DELIVERABLE 5 */}
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
