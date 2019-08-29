import React, { Component } from "react";
import Nav from "./Nav/nav";
import data from "./data";
import Hero from "./Hero/Hero";
import Simple from "./Simple/Simple";
import UI from "./UI/UI";
import Feature from "./Feature/Feature";
import Team from "./Team/Team";
import Pricing from "./Pricing/Pricing";
import Email from "./Email/Email";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
class App extends Component {
  state = {
    data: data
  };
  render() {
    return (
      <React.Fragment>
        <Nav nav={this.state.data} />
        <Hero hero={this.state.data} />
        <Simple simple={this.state.data} />
        <UI ui={this.state.data} />
        <Feature feature={this.state.data} />
        <Team team={this.state.data} />
        <Pricing pricing={this.state.data} />
        <Email email={this.state.data} />
        <Contact contact={this.state.data} />
        <Footer footer={this.state.data} />
      </React.Fragment>
    );
  }
}

export default App;
