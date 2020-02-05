import React from 'react';

class Planeteer extends React.Component {

  state={
    showQuote: false
  }

  handleBio = ()=> {
    this.setState(prevState => {
      return{
        showQuote: !prevState.showQuote
      }
    })
  }

  handleDelete = () => {
    this.props.deletePlaneteer(this.props.planeteer.id)
  }

  calculateAge = () => {
    let date = new Date();
    let year = date.getFullYear();
    return year
  }

  render() {
    // console.log(this.props.planeteer.quote)
    let {name, pictureUrl, twitter, born, fromUSA, bio, quote} = this.props.planeteer

    return (
      <li className="cards__item">
        <div className="card">
          <img onClick={this.handleBio} src={pictureUrl} alt={name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text">{this.state.showQuote ? `${quote}` : `${bio}`}</p>
            <div className="card__detail">
              <p>{twitter}</p>
              <p>Age: {this.calculateAge() - born}</p>
              <p>{fromUSA ? "USA-based" : "Working Overseas"}</p>
            </div>
            <button onClick={this.handleDelete}>Delete</button>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
