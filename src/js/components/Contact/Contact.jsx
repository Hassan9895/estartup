import React from "react";

const Contact = props => {
  let res = props.contact[0].contact.map((val, ind) => {
    return (
      <section id="contact" className="padd-section wow fadeInUp">
        <div className="container">
          <div className="section-title text-center">
            <h2>{val.title}</h2>
            <p className="separator">{val.subtitle}</p>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-4">
              <div className="info">
                <div>
                  <i className="fa fa-map-marker" />
                  <p>
                    {val.p1}
                    <br />
                    {val.p2}
                  </p>
                </div>

                <div className="email">
                  <i className="fa fa-envelope" />
                  <p>{val.p3}</p>
                </div>

                <div>
                  <i className="fa fa-phone" />
                  <p>{val.p4}</p>
                </div>
              </div>

              <div className="social-links">
                <a href="#" className="twitter">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#" className="facebook">
                  <i className="fab fa-facebook" />
                </a>
                <a href="#" className="instagram">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#" className="google-plus">
                  <i className="fab fa-google-plus" />
                </a>
                <a href="#" className="linkedin">
                  <i className="fab fa-linkedin" />
                </a>
              </div>
            </div>

            <div className="col-lg-5 col-md-8">
              <div className="form">
                <div id="sendmessage">{val.send_message}</div>
                <div id="errormessage" />
                <form className="contactForm">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder={val.placholder_name}
                    />
                    <div className="validation" />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder={val.placholder_email}
                    />
                    <div className="validation" />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject"
                      placeholder={val.placholder_subject}
                    />
                    <div className="validation" />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      rows="5"
                      placeholder={val.placholder_message}
                    />
                    <div className="validation" />
                  </div>
                  <div className="text-center">
                    <button type="submit">{val.contact_btn}</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  });
  return <React.Fragment>{res}</React.Fragment>;
};

export default Contact;
