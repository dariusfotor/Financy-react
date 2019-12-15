import React from "react";
import Header from "./header";
import "../style/style.css";

class ControlPanel extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Header />
        <div className="list_container">
          <div className="car_list">
            <h2>Masinos islaidos </h2>
          </div>
          <div className="flat_list">
            <h2>Buto islaidos </h2>
          </div>
          <div className="travel_list">
            <h2>Kelioniu islaidos </h2>
          </div>
          <div className="food_list">
            <h2>Maisto islaidos </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default ControlPanel;
