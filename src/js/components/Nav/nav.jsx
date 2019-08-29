import React from "react";
const Nav = props => {
  let navItems = props.nav[0].nav[0].navItems.map((val, ind) => {
    return (
      <React.Fragment key={ind}>
        <li className="nav-item">
          <a className="nav-link" href="#">
            {val}
          </a>
        </li>
      </React.Fragment>
    );
  });
  let res = props.nav.map((val, ind) => {
    return (
      <React.Fragment key={ind}>
        <nav id="header" className="navbar navbar-expand-lg bg-light">
          {" "}
          {/* <div className="container"> */}
          <div id="logo">
            <h1>
              <a href="#" className="scrollto">
                <span>{val.nav[0].navLogo}</span>
                {val.nav[0].navLogo_1}
              </a>
            </h1>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent nav-menu-container"
          >
            <ul className="nav-menu navbar-nav ml-auto mr-5">{navItems}</ul>
          </div>
          {/* </div> */}
        </nav>
      </React.Fragment>
    );
  });
  return <React.Fragment>{res}</React.Fragment>;
};
export default Nav;
