import React from 'react';

class Planeteer extends React.Component {
  
render() {
  console.log(this.props.planeteer) 
  // => 8 logs for each planeteer

  let { name, fromUSA, born, bio, quote, pictureUrl, twitter } = this.props.planeteer

  let handletoggle = () => {
    return true
  }

  // handleAge () => {}

    return (
      <li className="cards__item">
        <div className="card">
          <img src={pictureUrl} alt={name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text">{ handletoggle ? bio : quote}</p>
            <div className="card__detail">
              <p>{twitter}</p>
              <p>Age: {born}</p>
              <p>{fromUSA ? "USA-based" : "WORKING OVERSEAS"}</p>
            </div>
            {/* DELIVERABLE 5 */}
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
