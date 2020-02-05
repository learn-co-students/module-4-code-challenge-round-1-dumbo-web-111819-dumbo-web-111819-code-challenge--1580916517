import React from 'react';

class Planeteer extends React.Component {

  state = {
    displayQuote: false
  }

  onClick = () => {
    this.setState({displayQuote: !this.state.displayQuote})
  }

  render() {
    // console.log(this.props)
    let {name, fromUSA, born, bio, quote, pictureUrl, twitter} = this.props.planeteer
    let timeNow = new Date()
    let thisYear = timeNow.getFullYear()
    return (
      <li className="cards__item">
        <div className="card">
          <img src={pictureUrl} alt={name} className="card__image" onClick={this.onClick}/>
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text">{this.state.displayQuote ? quote:bio}</p>
            <div className="card__detail">
              <p>{twitter}</p>
              <p>Age: {thisYear-born}</p>
              <p>{fromUSA ? 'USA-based':'Working Overseas'}</p>
            </div>
            {/* DELIVERABLE 5 */}
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
