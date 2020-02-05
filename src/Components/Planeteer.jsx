import React from 'react';

class Planeteer extends React.Component {

  state = {
    showQuote: false,
  }
  handleShowQuote = () => {
    this.setState({
      showQuote: !this.state.showQuote
    })
  }
  render() {
    const today = new Date()
    const currentYear = today.getFullYear()
    const {name, fromUSA, born, bio, quote, pictureUrl, twitter} = this.props.planeteers
    // const {handleShowQuote } = this.props
    // console.log(this.props.planeteers);
    return (
      <li className="cards__item">
        <div className="card">
          <img onClick={() => this.handleShowQuote(this.props.planeteers)} src={pictureUrl} alt={name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text">{this.state.showQuote ? quote : bio}</p>
            <div className="card__detail">
              <p>{twitter}</p>
              <p>Age: {currentYear - born}</p>
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
