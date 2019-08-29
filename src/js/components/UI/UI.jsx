import React from "react";

const UI = props => {
  let res = props.ui[0].ui.map((val, ind) => {
    return (
      <section id="about-us" className="about-us padd-section wow fadeInUp">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5 col-lg-3">
              <img src="img/about-img.png" alt="About" />
            </div>

            <div className="col-md-7 col-lg-5">
              <div className="about-content">
                <h2>
                  <span>{val.title}</span>
                  {val.subtitle}{" "}
                </h2>
                <p>{val.ui_p} </p>

                <ul className="list-unstyled">
                  <li>
                    <i className="fa fa-angle-right" />
                    {val.ui_li_1}{" "}
                  </li>
                  <li>
                    <i className="fa fa-angle-right" />
                    {val.ui_li_2}
                  </li>
                  <li>
                    <i className="fa fa-angle-right" />
                    {val.ui_li_3}
                  </li>
                  <li>
                    <i className="fa fa-angle-right" /> {val.ui_li_4}
                  </li>
                  <li>
                    <i className="fa fa-angle-right" />
                    {val.ui_li_5}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  });
  return <React.Fragment>{res}</React.Fragment>;
};

export default UI;
