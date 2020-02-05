import React from 'react';

class Planeteer extends React.Component {
  
  state = {
    bio: true 
  }

  toggleBio = (e) => {
    // this.setState(prevState => {
    //   return {state: !prevState.bio}
    // })
    // console.log(this.state.bio)
    
    this.setState({
      bio: !this.state.bio
    })
    // console.log(this.state.bio)
  }

  render() {
    
  
    const {name, fromUSA, born, bio, quote, pictureUrl, twitter} = this.props.plantObj
    // console.log(name,born,fromUSA)

    let d = new Date();
    let currentYear = d.getFullYear()
    let conditionRender = fromUSA? 'USA-based': 'Workgin Overseas'
    // console.log(bio)
    let bioTernary = this.state.bio? bio: quote

    return (
      <li className="cards__item">
        <div className="card">
          <img onClick ={this.toggleBio} src={pictureUrl} alt={name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{name}</div>


            <p className="card__text">{bioTernary}</p>


            <div className="card__detail">
              <p>{twitter}</p>
              <p>Age: {currentYear - born}</p>
              <p>{conditionRender}</p>
            </div>
            {/* DELIVERABLE 5 */}
          </div>
        </div>
      </li>
    );
  }

}
export default Planeteer;
