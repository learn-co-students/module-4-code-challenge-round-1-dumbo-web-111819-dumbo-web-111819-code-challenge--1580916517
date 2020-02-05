import React from 'react';

class Planeteer extends React.Component {

  state = {
    fromUSA: false,
    flipped: false
  }

  handleOnClick = () => {
    const newClickValue = !this.state.flipped
    this.setState({
      flipped: newClickValue
    })
  }

  render(na) {
    // console.log(this.props.planeteer)
    const {name, twitter, born, fromUSA, bio, quote, pictureUrl} = this.props.planeteer
    const d = new Date();
    const currentYear = d.getFullYear()
    const age = currentYear - born
    return (
      <li className="cards__item">
        <div className="card">
          <img onClick={this.handleOnClick}src={pictureUrl} alt={name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text">{this.state.flipped ? bio: quote }</p>
            <div className="card__detail">
              <p>{twitter}</p>
              <p>Age: {age}</p>
              <p>{fromUSA ? 'USA-based' : 'Working Overseas'}</p>
            </div>
            {/* DELIVERABLE 5 */}
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
