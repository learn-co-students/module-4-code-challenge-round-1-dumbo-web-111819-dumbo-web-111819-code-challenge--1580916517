import React from 'react';

class Planeteer extends React.Component {
  state = {
    clicked: false,
    bio: true
  }

  handleClick=(evt)=>{
    this.setState({
      clicked: !this.state.clicked
    })
  }

//here get cb from the parent and send info up
  handleDel=(evt)=>{

    this.props.handleDelete(this.props.planeteer)
    // console.log(this.props.planeteer);
  }


  render() {
    // console.log(this.props.handleDelete);
    // console.log(this.props.planeteer);
    let {name, fromUSA, born, pictureUrl, twitter, bio, quote} = this.props.planeteer
    //will come back to age later
    // substract current year - born in Javascript
    //for now human is doing it
    let currentYear = new Date().getFullYear()
    let age = currentYear - born
    return (
      <li className="cards__item">
        <div  className="card">
          <img onClick={this.handleClick}  src={pictureUrl} alt={name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text">{this.state.clicked ? quote : bio }</p>
            <div className="card__detail">
              <p>{twitter}</p>
              <p>Age: {age}</p>
              <p>{fromUSA ? "USA-based" : "Working Overseas"}</p>
              <button onClick={this.handleDel} style={{background: "pink"}}>Delete</button>
            </div>
            {/* DELIVERABLE 5 */}
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
