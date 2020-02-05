import React from 'react';

class Planeteer extends React.Component {

  state={
    bio: true
  }

  handleClick = () => {
    this.setState(prevState => ({
      bio: !prevState.bio
    }))
  }

  render() {
    // console.log(this.props.planeteer);
    let {name, twitter, pictureUrl, born, bio, quote, fromUSA} = this.props.planeteer
    return (
      <li className="cards__item">
        <div className="card">
          <img onClick={this.handleClick} src={pictureUrl} alt={name} className="card__image" />
          <div className="card__content">
            <div className="card__title">{name}</div>
            <p className="card__text">{this.state.bio ? bio : quote}</p>
            <div className="card__detail">
              <p>{twitter}</p>
              <p>Age: {new Date().getFullYear() - born}</p>
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

// id: 1
// name: "Xiuhtezcatl Martinez"
// fromUSA: true
// born: 2000
// bio: "While Xiuhtezcatl started speaking about the environment at just age 6, he is now a 19-year-old indigenous activist, musician, and the youth director of Earth Guardians, an organization that trains youth across the world to use civic engagement and the arts to help solve environmental issues. As a hip-hop artist, Xiuhtezcatl also often uses music to convey powerful environmental messages. He is also not afraid to confront the government head-on, as he was one of the 21 plaintiffs that sued the federal government for their lack of action on climate change."
// quote: "My father taught me to see the magic in everything. Growing up, magic was in the sunrise and the rainfall. In every expression of life, no matter how small. I think that that was one of the most valuable wisdom that shaped who I was as a young boy. It gave me the perspective to see what was behind the dysfunction of our society, of our broken world, our dying ecosystems and corrupt leaders."
// pictureUrl: "https://160g7a3snajg2i1r662yjd5r-wpengine.netdna-ssl.com/wp-content/uploads/2019/12/XMartinez.gif"
// twitter: "@xiuhtezcatl"