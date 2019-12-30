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
  render() {
    console.log(this.props.car_expenses);
    return (
      <div>
        <Header />
        <div className="list_container">
          <div>
            <h2>Masinos islaidos </h2>
            {this.props.car_expenses.map(car => {
              return (
                <div className="car_list" key={car.id}>
                  <h3>
                    Data: {car.time} Islaidos uz {car.name.label}, kaina{" "}
                    {car.value}Eur{" "}
                    <button
                      onClick={() => this.deleteCar(car.id)}
                      className="erase"
                    >
                      Istrinti
                    </button>
                  </h3>
                </div>
              );
            })}
          </div>
          <hr></hr>
          <div>
            <h2>Buto islaidos </h2>
            {this.props.flat_expenses.map(flat => {
              return (
                <div className="flat_list">
                  <h3>
                    Data: {flat.time} Islaidos uz {flat.name.label}, kaina{" "}
                    {flat.value}Eur{" "}
                    <button
                      className="erase"
                      onClick={() => this.deleteFlat(flat.id)}
                    >
                      Istrinti
                    </button>
                  </h3>
                </div>
              );
            })}
          </div>
          <hr></hr>
          <div>
            <h2>Kelioniu islaidos </h2>
            {this.props.travels_expenses.map(travel => {
              return (
                <div className="travel_list">
                  <h3>
                    Data: {travel.time} Islaidos uz {travel.name}, kaina{" "}
                    {travel.value}Eur{" "}
                    <button
                      className="erase"
                      onClick={() => this.deleteTravel(travel.id)}
                    >
                      Istrinti
                    </button>
                  </h3>
                </div>
              );
            })}
          </div>
          <hr></hr>
          <div>
            <h2>Maisto islaidos </h2>
            {this.props.food_expenses.map(food => {
              return (
                <div className="food_list">
                  <h3>
                    Data: {food.time} Kaina {food.value}Eur{" "}
                    <button
                      className="erase"
                      onClick={() => this.deleteFood(food.id)}
                    >
                      Istrinti
                    </button>
                  </h3>
                </div>
              );
            })}
          </div>
          <hr></hr>
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
