import React from "react";
import Header from "./header";
import "../style/style.css";
import * as firebase from "firebase";
import { connect } from "react-redux";
import {
  deleteCar,
  deleteFlat,
  deleteTravel,
  deleteFood
} from "../state/actions/actions";

var firebaseConfig = {
  apiKey: "AIzaSyC6Gr8gECpNSQ_uRU8Z-rWlQo5HxKqOcew",
  authDomain: "react-db-1f28d.firebaseapp.com",
  databaseURL: "https://react-db-1f28d.firebaseio.com",
  projectId: "react-db-1f28d",
  storageBucket: "react-db-1f28d.appspot.com",
  messagingSenderId: "39925836076",
  appId: "1:39925836076:web:1ef912de8c1f34a8b8a489"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class ControlPanel extends React.Component {
  componentDidUpdate() {
    const car = firebase
      .database()
      .ref()
      .child("Car_expenses");
    car.push({
      car: this.props.car_expenses
    });

    const flat = firebase
      .database()
      .ref()
      .child("Flat_expenses");
    flat.push({
      flat: this.props.flat_expenses
    });
    const travel = firebase
      .database()
      .ref()
      .child("Travel_expenses");
    travel.push({
      travel: this.props.travel_expenses
    });

    const food = firebase
      .database()
      .ref()
      .child("Food_expenses");
    food.push({
      food: this.props.food_expenses
    });
  }

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
