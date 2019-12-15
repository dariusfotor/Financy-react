import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
                <Link to="/controlPanel">Valdymo panele</Link>
              </li>
              <li>
                <Link>Pajamos</Link>
              </li>
              <li>
                <Link>Islaidos</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default header;
