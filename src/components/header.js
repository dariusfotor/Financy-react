import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../style/style.css";

export class header extends Component {
  render() {
    return (
      <header>
        <div className="main_header">
          <div className="title">
            <h2>FINANSU VALDYMO SISTEMA</h2>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Islaidos</Link>
              </li>
              <li>
                <Link to="/controlPanel">Valdymo panele</Link>
              </li>
              <li>
                <Link to="/controlPanel">Pajamos</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default header;
