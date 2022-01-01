import React, { Component } from "react";
import AboutMe from "../About-Me/AboutMe";
import Hello from "../Hello/Hello";
import Projects from "../My-Projects/Projects";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <Hello></Hello>
        <AboutMe></AboutMe>
        <Projects></Projects>
      </div>
    );
  }
}
