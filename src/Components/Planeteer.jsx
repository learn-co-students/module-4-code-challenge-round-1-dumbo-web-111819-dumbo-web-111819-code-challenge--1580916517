import React from 'react';

class Planeteer extends React.Component {

  state = { 
    toggle: false
  }

  handleToggle = () => { 
    this.setState({
      toggle: !this.state.toggle
    })
  }
  removePlaneteer = () => {
    // console.log(this.props.planeteer)
    this.props.removePlaneteer(this.props.planeteer)
  }


  render() {
    const {fromUSA,name,born,bio,quote,twitter,pictureUrl} = this.props.planeteer
    const date = new Date()
    return (
      <li className="cards__item">
        <div className="card">
          <img src={pictureUrl} alt={name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text" onClick={this.handleToggle} >{this.state.toggle? quote : bio} </p>
            <div className="card__detail">
              <p>{twitter}</p>
              <p>Age: {date.getFullYear() - born}</p>
                <p>{ fromUSA ? "USA-based" : "Working Overseas" }</p>
            </div>
            <button onClick={this.removePlaneteer} >Remove Planeteer</button>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
