import React from "react";

const Footer = props => {
  let res = props.footer[0].footer.map((val, ind) => {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-4">
              <div className="footer-logo">
                <a className="navbar-brand" href="#">
                  {val.title}
                </a>
                <p>{val.des}</p>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 col-lg-2">
              <div className="list-menu">
                <h4>{val.footer_col_text}</h4>

                <ul className="list-unstyled">
                  <li>
                    <a href="#">{val.footer_col_text}</a>
                  </li>
                  <li>
                    <a href="#">{val.footer_col_text_1}</a>
                  </li>
                  <li>
                    <a href="#">{val.footer_col_text_2}</a>
                  </li>
                  <li>
                    <a href="#">{val.footer_col_text_3}</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 col-lg-2">
              <div className="list-menu">
                <h4>{val.footer_col_text}</h4>

                <ul className="list-unstyled">
                  <li>
                    <a href="#">{val.footer_col_text}</a>
                  </li>
                  <li>
                    <a href="#">{val.footer_col_text_1}</a>
                  </li>
                  <li>
                    <a href="#">{val.footer_col_text_2}</a>
                  </li>
                  <li>
                    <a href="#">{val.footer_col_text_3}</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 col-lg-2">
              <div className="list-menu">
                <h4>{val.footer_col_text}</h4>

                <ul className="list-unstyled">
                  <li>
                    <a href="#">{val.footer_col_text}</a>
                  </li>
                  <li>
                    <a href="#">{val.footer_col_text_1}</a>
                  </li>
                  <li>
                    <a href="#">{val.footer_col_text_2}</a>
                  </li>
                  <li>
                    <a href="#">{val.footer_col_text_3}</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-sm-6 col-md-3 col-lg-2">
              <div className="list-menu">
                <h4>{val.footer_col_text}</h4>

                <ul className="list-unstyled">
                  <li>
                    <a href="#">{val.footer_col_text}</a>
                  </li>
                  <li>
                    <a href="#">{val.footer_col_text_1}</a>
                  </li>
                  <li>
                    <a href="#">{val.footer_col_text_2}</a>
                  </li>
                  <li>
                    <a href="#">{val.footer_col_text_3}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyrights">
          <div className="container">
            <p>{val.copy_rights}</p>
            <div className="credits">
              {val.design} <a href="#">{val.designer}</a>
            </div>
          </div>
        </div>
      </footer>
    );
  });
  return <React.Fragment>{res}</React.Fragment>;
};

export default Footer;
