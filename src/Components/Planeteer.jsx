import React from 'react';

class Planeteer extends React.Component {

  state = {
      seeQuote: false
  }
  


  handleClick = () =>{
      let showBio = !this.state.seeQuote;
      this.setState({
          seeQuote: showBio
      })
  }

  handleDelete = (e) =>{
    //  console.log(e.target)
    this.props.removePlaneteer(this.props.planeteer)
  }


  render() {
    // console.log(this.props.planeteer)
    const { name, born, fromUSA, twitter, pictureUrl,bio, quote} = this.props.planeteer
    let date = new Date();
    let current_yr =  parseInt(date.getFullYear())



    return (
      <li className="cards__item">
        <div className="card" onClick={this.handleClick}>
          <div className="card"> <button onClick={this.handleDelete}>X</button></div>
          <img src={pictureUrl} alt={name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text">{this.state.seeQuote ? quote : bio}</p>
            <div className="card__detail">
              <p>{twitter}</p>
              <p>Age: {current_yr - parseInt(born)}</p>
              <p>{fromUSA ? "USA-based" : "Working Overseas"}</p>
            </div>
            {/* DELIVERABLE 5 */}
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
