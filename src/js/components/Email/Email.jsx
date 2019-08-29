import React from "react";

const Email = props => {
  let res = props.email[0].email.map((val, ind) => {
    return (
      <section id="newsletter" className="newsletter text-center wow fadeInUp">
        <div className="overlay padd-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9 col-lg-6">
                <form className="form-inline">
                  <input
                    type="email"
                    className="form-control "
                    placeholder={val.email_placholder}
                    name="email"
                  />
                  <button type="submit" className="btn btn-default">
                    <i className="fa fa-location-arrow" />
                    {val.email_btn}
                  </button>
                </form>
              </div>
            </div>

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
                  <i className="fab fa-google-plus" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  });
  return <React.Fragment>{res}</React.Fragment>;
};

export default Email;
