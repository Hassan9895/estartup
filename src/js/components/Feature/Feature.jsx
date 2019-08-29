import React from "react";

const Feature = props => {
  let res = props.feature[0].feature.map((val, ind) => {
    return (
      <section id="features" className="padd-section text-center wow fadeInUp">
        <div className="container">
          <div className="section-title text-center">
            <h2>{val.title}</h2>
            <p className="separator">{val.subtitle}</p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="feature-block">
                <img
                  src="img/svg/paint-palette.svg"
                  alt="img"
                  className="img-fluid"
                />
                <h4>{val.card_text_1}</h4>
                <p>{val.card_des}</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="feature-block">
                <img src="img/svg/vector.svg" alt="img" className="img-fluid" />
                <h4>{val.card_text_2}</h4>
                <p>{val.card_des}</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="feature-block">
                <img
                  src="img/svg/design-tool.svg"
                  alt="img"
                  className="img-fluid"
                />
                <h4>{val.card_text_3}</h4>
                <p>{val.card_des}</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="feature-block">
                <img
                  src="img/svg/asteroid.svg"
                  alt="img"
                  className="img-fluid"
                />
                <h4>{val.card_text_4}</h4>
                <p>{val.card_des}</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="feature-block">
                <img
                  src="img/svg/asteroid.svg"
                  alt="img"
                  className="img-fluid"
                />
                <h4>{val.card_text_6}</h4>
                <p>{val.card_des}</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="feature-block">
                <img
                  src="img/svg/cloud-computing.svg"
                  alt="img"
                  className="img-fluid"
                />
                <h4>{val.card_text_4}</h4>
                <p>{val.card_des}</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="feature-block">
                <img src="img/svg/pixel.svg" alt="img" className="img-fluid" />
                <h4>{val.card_text_5}</h4>
                <p>{val.card_des} </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="feature-block">
                <img src="img/svg/code.svg" alt="img" className="img-fluid" />
                <h4>{val.card_text_7}</h4>
                <p>{val.card_des}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  });
  return <React.Fragment>{res}</React.Fragment>;
};

export default Feature;
