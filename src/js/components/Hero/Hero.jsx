import React from "react";
const Hero = props => {
  let res = props.hero[0].hero.map((val, ind) => {
    return (
      <section id="hero" className="wow fadeIn">
        <div className="hero-container">
          <h2>{val.heading}</h2>
          <img src="img/hero-img.png" alt="" />
          <a href="#" className="btn-get-started scrollto">
            {val.hero_btn}
          </a>
          <div className="btns">
            <a href="#">
              <i className="fab fa-apple fa-3x" /> {val.app_store}
            </a>
            <a href="#">
              <i className="fa fa-play fa-3x" /> {val.play_store}
            </a>
            <a href="#">
              <i className="fab fa-windows fa-3x" /> {val.windows}
            </a>
          </div>
        </div>
      </section>
    );
  });
  return <React.Fragment>{res}</React.Fragment>;
};
export default Hero;
