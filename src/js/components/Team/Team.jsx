import React from "react";

const Team = props => {
  let res = props.team[0].team.map((val, ind) => {
    return (
      <section id="team" className="padd-section text-center wow fadeInUp">
        <div className="container">
          <div className="section-title text-center">
            <h2>{val.title}</h2>
            <p className="separator"> {val.subtitle}</p>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-4 col-lg-3">
              <div className="team-block bottom">
                <img
                  src="img/team/1.jpg"
                  className="img-responsive"
                  alt="img"
                />
                <div className="team-content">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                  <span>{val.hover_txt} </span>
                  <h4>{val.hover_txt_2} </h4>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-md-4 col-lg-3">
              <div className="team-block bottom">
                <img
                  src="img/team/2.jpg"
                  className="img-responsive"
                  alt="img"
                />
                <div className="team-content">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                  <span>{val.hover_txt}</span>
                  <h4>{val.hover_txt_2}</h4>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-md-4 col-lg-3">
              <div className="team-block bottom">
                <img
                  src="img/team/3.jpg"
                  className="img-responsive"
                  alt="img"
                />
                <div className="team-content">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                  <span>{val.hover_txt}</span>
                  <h4>{val.hover_txt_2}</h4>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-md-4 col-lg-3">
              <div className="team-block bottom">
                <img
                  src="img/team/4.jpg"
                  className="img-responsive"
                  alt="img"
                />
                <div className="team-content">
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-linkedin" />
                      </a>
                    </li>
                  </ul>
                  <span>{val.hover_txt}</span>
                  <h4>{val.hover_txt_2}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  });
  return <React.Fragment>{res}</React.Fragment>;
};

export default Team;
