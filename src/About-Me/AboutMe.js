import React, { Component } from "react";
import "./AboutMe.css";

export default class AboutMe extends Component {
  render() {
    return (
      <div className="aboutme-container">
        <h2>About me</h2>
        <div className="grid-2-col">
          <div>
            <p className="about-text">
              If you want you can call me a frontend developer. I have a passion
              for creating and designing web applications for people, which I
              consider quite an enjoyable and multidisciplinary area that I
              would really like to be involved in.
            </p>

            <p className="about-text">
              Technologies I use while making my projects HTML, CSS, JS,
              React.js.
            </p>
          </div>

          <div>
            <ul>
              <li>
                Twitter:{" "}
                <a href="https://twitter.com/ugurpoo" target="_blank">
                  @ugrplt
                </a>
              </li>
              <li>
                Github:{" "}
                <a href="https://github.com/ugurpolat" target="_blank">
                  @ugurpolat
                </a>
              </li>
              <li>
                Instagram:{" "}
                <a
                  href="https://www.instagram.com/uurpolat/?hl=tr"
                  target="_blank"
                >
                  @uurpolat
                </a>
              </li>
              <li>
                Medium: <a href="https://medium.com/@ugurpolat">@ugurpolat</a>
              </li>
              <li>Email: ugurpolat113@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
