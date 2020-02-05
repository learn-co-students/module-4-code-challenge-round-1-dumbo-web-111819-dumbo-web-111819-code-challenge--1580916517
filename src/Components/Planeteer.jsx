import React from 'react';
// import RandomButton from './RandomButton';

class Planeteer extends React.Component {
  state = {
    isClicked:false
  }
  getAge = (born) => {
    let currentDate = new Date()
    return currentDate.getFullYear() - born
  }


  handleClick = () => {
    
    this.setState({
      isClicked: !this.state.isClicked
    })
    
  }
  handleDelete = () => {
    this.props.delete(this.props.obj.id)
    console.log(this.props.obj.name,"promises to be a good person")
    
  }
  render() {
    let {name, bio,born,twitter,quote,fromUSA,pictureUrl} = this.props.obj
    return (
      <li className="cards__item" onClick={this.handleClick}>
        <div className="card">
          <img src={pictureUrl} alt={name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text">{this.state.isClicked ? quote : bio}</p>
            <div className="card__detail">
              <p>{twitter}</p>
              <p>Age: {this.getAge(born)}</p>
              <p>{fromUSA ? "USA-based" : "Working Overseas"}</p>
            </div>
            <button type = "delete" style={{color: "black"},{"backgroundCcolor": "red"}} onClick={this.handleDelete}> delete</button>
          </div>
        </div>
      </li>
    );
  }

}

export default Planeteer;
