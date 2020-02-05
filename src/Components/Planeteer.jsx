import React from 'react';

class Planeteer extends React.Component {
  state={
    bio:true
  }

  handleToggle=(e) => {
    this.setState(prevState=>({
      bio:!prevState.bio

    }))
  }

  render() {
    let d = new Date();
    let n = d.getFullYear();
    // console.log(n)
    const {name, fromUSA, born, bio, quote, pictureUrl, twitter}=this.props.planet
    // console.log(this.props.planet)
    // console.log(born)
    return (
      <li className="cards__item">
        <div onClick={this.handleToggle} className="card">
          <img src={pictureUrl} alt={name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text">{this.state.bio ? bio :quote/*"CONDITIONALLY RENDER BIO OR QUOTE"*/}</p>
            <div className="card__detail">
              <p>{twitter}</p>
              <p>Age: {n-born}</p>
              <p>{fromUSA?  "USA-based": "Working Overseas" }</p>
              
            </div>
            <button>Delete</button>
            {/* DELIVERABLE 5 */}
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
