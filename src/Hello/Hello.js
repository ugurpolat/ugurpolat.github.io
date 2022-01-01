import React, { Component } from "react";
import me from "../Images/me.jpg";
import "./Hello.css";
export default class Hello extends Component {
  render() {
    return (
      <div className="hello-container">
        <div>
          <p>
            Hello, I'm Uğur. <br></br> I live in Izmir, Turkey. Currently, I am
            working on front-end development projects.
          </p>
        </div>

        <div>
          <img className="my-photo" src={me} alt="ugur-polat"></img>
        </div>
      </div>
    );
  }
}
