import React, { Component } from "react";
import "../style/style.css";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Header from "./header";
import * as firebase from "firebase";
import { connect } from "react-redux";
import { testCar } from "../state/actions/actions";
import { testFlat } from "../state/actions/actions";
import { testTravel } from "../state/actions/actions";
import { testFood } from "../state/actions/actions";

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

class Expenses extends Component {
  constructor() {
    super();
    this.state = {
      car: [
        { label: "kura" },
        { label: "remonta" },
        { label: "draudima" },
        { label: "kita" }
      ],
      flat: [{ label: "mokescius" }, { label: "remonta" }, { label: "kita" }],
      car_expenses: [],
      flat_expenses: [],
      travels_expenses: [],
      food_expenses: [],
      total_sum: "",
      selected_car: "",
      selected_flat: "",
      selected_date_car: new Date(),
      selected_date_flat: new Date(),
      selected_date_travel: new Date(),
      selected_date_food: new Date(),
      value_car: "",
      value_flat: "",
      value_country: "",
      value_travel: "",
      value_food: "",
      value_food_input: "",
      btn_pressed_car: false,
      btn_pressed_flat: false,
      btn_pressed_travels: false,
      btn_pressed_food: false
    };
  }

  carChange = event => {
    this.setState({ value_car: event.target.value });
  };
  selecteCar = selected_car => {
    this.setState({ selected_car });
  };
  dateCar = selected_date_car => {
    this.setState({ selected_date_car });
  };
  flatChange = event => {
    this.setState({ value_flat: event.target.value });
  };
  selecteFlat = selected_flat => {
    this.setState({ selected_flat });
  };
  dateFlat = selected_date_flat => {
    this.setState({ selected_date_flat });
  };
  countryChange = event => {
    this.setState({ value_country: event.target.value });
  };
  travelChange = event => {
    this.setState({ value_travel: event.target.value });
  };
  dateTravel = selected_date_travel => {
    this.setState({ selected_date_travel });
  };
  foodChange = event => {
    this.setState({ value_food: event.target.value });
  };
  foodInput = event => {
    this.setState({
      value_food_input: event.target.value
    });
  };
  dateFood = selected_date_food => {
    this.setState({ selected_date_food });
  };

  // Buttons submit
  // CARS
  submit_car_exp = () => {
    const id_date = new Date().valueOf();
    const car = firebase
      .database()
      .ref()
      .child("Car_expenses");
    if (this.state.value_car !== "" && this.state.selected_car !== "") {
      this.setState({
        car_expenses: [
          ...this.state.car_expenses,
          {
            id: id_date,
            time: this.state.selected_date_car.toDateString(),
            name: this.state.selected_car,
            value: +this.state.value_car
          }
        ],
        value_car: "",
        selected_car: "",
        selected_date_car: new Date(),
        btn_pressed_car: true
      });
      this.props.testCar({
        id: id_date,
        time: this.state.selected_date_car.toDateString(),
        name: this.state.selected_car,
        value: +this.state.value_car
      });
      car.push({
        id: id_date,
        time: this.state.selected_date_car.toDateString(),
        name: this.state.selected_car,
        value: +this.state.value_car
      });
    } else {
      alert("Uzpildykite laukelius");
    }

    setTimeout(() => {
      this.setState({ btn_pressed_car: false });
    }, 5000);
  };
  // FLAT
  submit_flat_exp = () => {
    const id_date = new Date().valueOf();
    if (this.state.value_flat !== "" && this.state.selected_flat !== "") {
      this.setState({
        flat_expenses: [
          ...this.state.flat_expenses,

          {
            id: id_date,
            time: this.state.selected_date_flat.toDateString(),
            name: this.state.selected_flat,
            value: +this.state.value_flat
          }
        ],
        value_flat: "",
        selected_flat: "",
        selected_date_flat: new Date(),
        btn_pressed_flat: true
      });
      this.props.testFlat({
        id: id_date,
        time: this.state.selected_date_flat.toDateString(),
        name: this.state.selected_flat,
        value: +this.state.value_flat
      });
    } else {
      alert("Uzpildykite laukelius");
    }
    setTimeout(() => {
      this.setState({ btn_pressed_flat: false });
    }, 5000);
  };
  // TRAVELS
  submit_travel_exp = () => {
    const id_date = new Date().valueOf();
    if (this.state.value_country !== "" && this.state.value_travel !== "") {
      this.setState({
        travels_expenses: [
          ...this.state.travels_expenses,
          {
            id: id_date,
            time: this.state.selected_date_travel.toDateString(),
            name: this.state.value_country,
            value: +this.state.value_travel
          }
        ],
        value_travel: "",
        value_country: "",
        selected_date_travel: new Date(),
        btn_pressed_travels: true
      });
      this.props.testTravel({
        id: id_date,
        time: this.state.selected_date_travel.toDateString(),
        name: this.state.value_country,
        value: +this.state.value_travel
      });
    } else {
      alert("Uzpildykite laukelius");
    }

    setTimeout(() => {
      this.setState({ btn_pressed_travels: false });
    }, 5000);
  };
  // FOOD
  submit_food_exp = () => {
    const id_date = new Date().valueOf();
    if (this.state.value_food_input !== "" && this.state.value_food !== "") {
      this.setState({
        food_expenses: [
          ...this.state.food_expenses,
          {
            id: id_date,
            time: this.state.selected_date_food.toDateString(),
            name: this.state.value_food_input,
            value: +this.state.value_food
          }
        ],
        value_food: "",
        selected_date_food: new Date(),
        value_food_input: "",
        btn_pressed_food: true
      });
      this.props.testFood({
        id: id_date,
        time: this.state.selected_date_food.toDateString(),
        name: this.state.value_food_input,
        value: +this.state.value_food
      });
    } else {
      alert("Uzpildykite laukelius");
    }

    setTimeout(() => {
      this.setState({ btn_pressed_food: false });
    }, 5000);
  };

  render() {
    var car = this.state.car;
    const flat = this.state.flat;
    const pressed_car = this.state.btn_pressed_car;
    const pressed_flat = this.state.btn_pressed_flat;
    const pressed_travels = this.state.btn_pressed_travels;
    const pressed_food = this.state.btn_pressed_food;
    return (
      <div>
        <Header />
        <div className="main_container">
          <div className="car_expenses">
            <div className="input_label">
              <h1>Ivesti masinos islaidas</h1>
            </div>
            <div className="car_input">
              <label>Kaina</label>
              <input
                type="text"
                placeholder="pvz 30"
                value={this.state.value_car}
                onChange={this.carChange}
              ></input>
              <div className="select">
                <Select
                  value={this.state.selected_car}
                  onChange={this.selecteCar}
                  options={car}
                  placeholder="Pasirinkite islaidas uz.."
                />
              </div>
              <div className="calendar">
                <DatePicker
                  dateFormat="yyyy/MM/dd"
                  selected={this.state.selected_date_car}
                  onChange={this.dateCar}
                />
              </div>

              <button className="submit_btn" onClick={this.submit_car_exp}>
                Prideti islaidas
              </button>
            </div>
            <div className="btn_pressed">
              {pressed_car ? "Masinos islaidos itrauktos" : null}
            </div>
          </div>

          {/* Buto islaidos */}
          <div className="flat_expenses">
            <div className="input_label">
              <h1>Ivesti buto islaidas</h1>
            </div>
            <div className="flat_input">
              <label>Kaina</label>
              <input
                type="text"
                placeholder="pvz 20"
                value={this.state.value_flat}
                onChange={this.flatChange}
              ></input>
              <div className="select">
                <Select
                  value={this.state.selected_flat}
                  onChange={this.selecteFlat}
                  options={flat}
                  placeholder="Pasirinkite islaidas uz.."
                />
              </div>
              <div className="calendar">
                <DatePicker
                  dateFormat="yyyy/MM/dd"
                  selected={this.state.selected_date_flat}
                  onChange={this.dateFlat}
                />
              </div>
              <button className="submit_btn" onClick={this.submit_flat_exp}>
                Prideti islaidas
              </button>
            </div>
            <div className="btn_pressed">
              {pressed_flat ? "Buto islaidos itrauktos" : null}
            </div>
          </div>

          {/* Kelioniu islaidos  */}
          <div className="travel_expenses">
            <div className="input_label">
              <h1>Ivesti keliones islaidas</h1>
            </div>
            <div className="country_container">
              <label>Keliones tikslas</label>
              <input
                className="country_input"
                type="text"
                value={this.state.value_country}
                onChange={this.countryChange}
              ></input>
            </div>
            <div className="travel_container">
              <label>Kaina</label>
              <input
                className="travel_input"
                type="text"
                value={this.state.value_travel}
                onChange={this.travelChange}
              ></input>
              <div className="calendarTravel">
                <DatePicker
                  dateFormat="yyyy/MM/dd"
                  selected={this.state.selected_date_travel}
                  onChange={this.dateTravel}
                />
              </div>
            </div>

            <button
              className="submit_trave_btn"
              onClick={this.submit_travel_exp}
            >
              Prideti islaidas
            </button>

            <div className="btn_pressed">
              {pressed_travels ? "Keliones islaidos itrauktos" : null}
            </div>
          </div>

          {/* Maisto islaidos  */}
          <div className="food_expenses">
            <div className="input_label">
              <h1>Ivesti maisto islaidas</h1>
            </div>
            <div className="food_input">
              <label>Ka skanaus pirkote</label>
              <input
                className="country_input"
                type="text"
                value={this.state.value_food_input}
                onChange={this.foodInput}
              ></input>
            </div>
            <div className="food_input">
              <label>Kaina</label>
              <input
                type="text"
                value={this.state.value_food}
                onChange={this.foodChange}
              ></input>
              <div className="calendar">
                <DatePicker
                  dateFormat="yyyy/MM/dd"
                  selected={this.state.selected_date_food}
                  onChange={this.dateFood}
                />
              </div>
              <button className="submit_btn" onClick={this.submit_food_exp}>
                Prideti islaidas
              </button>
            </div>
            <div className="btn_pressed">
              {pressed_food ? "Maisto islaidos itrauktos" : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    car_expenses: state.car_expenses
  };
};
export default connect(mapStateToProps, {
  testCar,
  testFlat,
  testTravel,
  testFood
})(Expenses);
