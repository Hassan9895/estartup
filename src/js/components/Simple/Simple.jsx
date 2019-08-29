import React from "react";

const Simple = props => {
  let res = props.simple[0].simple.map((val, ind) => {
    return (
      <section id="get-started" class="padd-section text-center wow fadeInUp">
        <div class="container">
          <div class="section-title text-center">
            <h2>{val.title} </h2>
            <p class="separator">{val.subtitle}</p>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-4">
              <div class="feature-block">
                <img src="img/svg/cloud.svg" alt="img" class="img-fluid" />
                <h4>{val.card_title_1}</h4>
                <p>{val.card_des}</p>
                <a href="#">{val.card_btn}</a>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="feature-block">
                <img src="img/svg/planet.svg" alt="img" class="img-fluid" />
                <h4>{val.card_title_2}</h4>
                <p>L{val.card_des}</p>
                <a href="#">{val.card_btn}</a>
              </div>
            </div>

            <div class="col-md-6 col-lg-4">
              <div class="feature-block">
                <img src="img/svg/asteroid.svg" alt="img" class="img-fluid" />
                <h4>{val.card_title_3}</h4>
                <p>{val.card_des}</p>
                <a href="#">{val.card_btn}</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  });
  return <React.Fragment>{res}</React.Fragment>;
};

export default Simple;
