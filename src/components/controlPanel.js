import React from "react";
import Header from "./header";
import "../style/style.css";

import { connect } from "react-redux";
import {
  deleteCar,
  deleteFlat,
  deleteTravel,
  deleteFood
} from "../state/actions/actions";

class ControlPanel extends React.Component {
  deleteCar(id) {
    this.props.deleteCar(id);
  }

  deleteFlat(id) {
    this.props.deleteFlat(id);
  }

  deleteTravel(id) {
    this.props.deleteTravel(id);
  }

  deleteFood(id) {
    this.props.deleteFood(id);
  }
  renderCarTable() {
    return this.props.car_expenses.map(car => {
      return (
        <tr key={car.id}>
          <td>{car.time}</td>
          <td>{car.name.label}</td>
          <td>{car.value}Eur </td>
          <td>
            <button onClick={() => this.deleteCar(car.id)} className="erase">
              Istrinti
            </button>
          </td>
        </tr>
      );
    });
  }
  renderFlatTable() {
    return this.props.flat_expenses.map(flat => {
      return (
        <tr key={flat.id}>
          <td>{flat.time}</td>
          <td>{flat.name.label}</td>
          <td>{flat.value}Eur </td>
          <td>
            <button onClick={() => this.deleteFlat(flat.id)} className="erase">
              Istrinti
            </button>
          </td>
        </tr>
      );
    });
  }
  renderTravelTable() {
    return this.props.travels_expenses.map(travel => {
      return (
        <tr key={travel.id}>
          <td>{travel.time}</td>
          <td>{travel.name}</td>
          <td>{travel.value}Eur </td>
          <td>
            <button
              onClick={() => this.deleteTravel(travel.id)}
              className="erase"
            >
              Istrinti
            </button>
          </td>
        </tr>
      );
    });
  }
  renderFoodTable() {
    return this.props.food_expenses.map(food => {
      return (
        <tr key={food.id}>
          <td>{food.time}</td>
          <td>{food.name}</td>
          <td>{food.value}Eur </td>
          <td>
            <button onClick={() => this.deleteFood(food.id)} className="erase">
              Istrinti
            </button>
          </td>
        </tr>
      );
    });
  }

  render() {
    console.log(this.props.car_expenses);

    return (
      <div>
        <Header />
        <div className="list_container">
          <div>
            <h2>Masinos islaidos </h2>
            <table className="listTable">
              <tr>
                <th>Data</th>
                <th>Islaidos uz</th>
                <th>Kaina</th>
                <th>Redaguoti</th>
              </tr>
              {this.renderCarTable()}
            </table>
          </div>
          <div>
            <h2>Buto islaidos </h2>
            <table className="listTable">
              <tr>
                <th>Data</th>
                <th>Islaidos uz</th>
                <th>Kaina</th>
                <th>Redaguoti</th>
              </tr>
              {this.renderFlatTable()}
            </table>
          </div>
          <div>
            <h2>Kelioniu islaidos </h2>
            <table className="listTable">
              <tr>
                <th>Data</th>
                <th>Islaidos uz</th>
                <th>Kaina</th>
                <th>Redaguoti</th>
              </tr>
              {this.renderTravelTable()}
            </table>
          </div>
          <div>
            <h2>Maisto islaidos </h2>
            <table className="listTable">
              <tr>
                <th>Data</th>
                <th>Islaidos uz</th>
                <th>Kaina</th>
                <th>Redaguoti</th>
              </tr>
              {this.renderFoodTable()}
            </table>
          </div>
          <h2>Viso isleista</h2>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    car_expenses: state.car_expenses,
    flat_expenses: state.flat_expenses,
    travels_expenses: state.travels_expenses,
    food_expenses: state.food_expenses
  };
};

export default connect(mapStateToProps, {
  deleteCar,
  deleteFlat,
  deleteTravel,
  deleteFood
})(ControlPanel);
