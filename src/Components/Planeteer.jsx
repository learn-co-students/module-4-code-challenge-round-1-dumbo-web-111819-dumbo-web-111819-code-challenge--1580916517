import React from 'react';

class Planeteer extends React.Component {

  state={
    showBio: true
  }

  handleToggle = () => {
    this.setState((prevState) => {
      return {showBio: !prevState.showBio}
    })
  }

  render() {
    // console.log(this.props.planeteer)
    let currentYear = new Date().getFullYear()
    let {name, bio, quote, twitter, pictureUrl, born, fromUSA} = this.props.planeteer
    let age = currentYear - born
    // console.log(age)
    return (
      <li className="cards__item">
        <div className="card">
          <img onClick={this.handleToggle} src={pictureUrl} alt={name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text">{this.state.showBio? bio:quote}</p>
            <div className="card__detail">
              <p>{twitter}</p>
              <br/>
              <p>Age: {age}</p>
              <p>{fromUSA? 'USA-based': "Working Overseas"}</p>
            </div>
            {/* DELIVERABLE 5 */}
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
