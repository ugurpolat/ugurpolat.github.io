import React, { Component } from "react";
import "./Projects.css";
import ticketapp from "../Images/ticket-app.png";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <h2>Projects</h2>
        <div className="grid-6-col">
          <div className="project">
            <h4 className="project__name">Ticket-App</h4>
            <div>
              <a
                href="https://final-project-ugurpolat.vercel.app/"
                target={"_blank"}
                rel="noreferrer"
              >
                <img
                  className="project__img"
                  src={ticketapp}
                  alt="ticket-app"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
