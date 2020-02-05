import React from 'react';

class Planeteer extends React.Component {

  state = {
    showBio: false
  }

  showBio = () => {
    this.setState({showBio: !this.state.showBio})
    
  }
  //NEED TO PUT A BANG OPERATOR SOMWHERE

  findAge = () => {
    var d = new Date();
    var n = d.getFullYear();
    return  n - this.props.planeteer.born
  }

  render() {
    return (
      <li className="cards__item">
        <div className="card">
          <img src={this.props.planeteer.pictureUrl} alt={this.props.planeteer.name} className="card__image" onClick={this.showBio} />
          <div className="card__content">
            <div className="card__title">{this.props.planeteer.name}</div>
            <p className="card__text">{this.state.showBio ?  this.props.planeteer.bio : this.props.planeteer.quote}</p>
            <div className="card__detail">
              <p>{this.props.planeteer.twitter}</p>
              <p>Age: {this.findAge()}</p>
              <p>{this.props.planeteer.fromUSA ? "USA-based" : "Working Overseas"}</p>
            </div>
            <button onClick={this.props.deletePlaneteer(this.props.planeteer)}>DELETE</button>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
