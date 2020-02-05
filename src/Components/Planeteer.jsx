import React from 'react';

class Planeteer extends React.Component {

  render() {
    let year = new Date().getFullYear()
    let age = year - this.props.p.born
    return (
      <li className="cards__item">
        <div className="card">
          <img src={this.props.p.pictureUrl} alt={this.props.p.name} className="card__image" onClick={()=>this.props.toggleCard(this.props.p)}/>
          <div className="card__content">
            <div className="card__title">{this.props.p.name}</div>
            <p className="card__text">{!this.props.quotes.includes(this.props.p) ? this.props.p.bio : this.props.p.quote}</p>
            {/* conditionally render bio or quote */}
            <div className="card__detail">
              <p>{this.props.p.twitter}</p>
              <p>Age: {age}</p>
              <p>{this.props.p.fromUSA ? "USA-Based" : "Working Overseas"}</p>
            </div>
            {/* DELIVERABLE 5 */}
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
