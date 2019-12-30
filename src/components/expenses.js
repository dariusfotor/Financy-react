import React, { Component } from "react";
import "../style/style.css";
import Select from "react-select";
import Header from "./header";
import { connect } from "react-redux";
import { testCar } from "../state/actions/actions";
import { testFlat } from "../state/actions/actions";
import { testTravel } from "../state/actions/actions";
import { testFood } from "../state/actions/actions";

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
      value_car: "",
      value_flat: "",
      value_country: "",
      value_travel: "",
      value_food: "",
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
  flatChange = event => {
    this.setState({ value_flat: event.target.value });
  };
  countryChange = event => {
    this.setState({ value_country: event.target.value });
  };
  travelChange = event => {
    this.setState({ value_travel: event.target.value });
  };
  foodChange = event => {
    this.setState({ value_food: event.target.value });
  };
  selecteFlat = selected_flat => {
    this.setState({ selected_flat });
  };

  // Buttons submit
  // CARS
  submit_car_exp = () => {
    const id_date = new Date().valueOf();
    const date = new Date().toLocaleString();
    this.props.testCar({
      id: id_date,
      time: date,
      name: this.state.selected_car,
      value: +this.state.value_car
    });
    this.setState({
      car_expenses: [
        ...this.state.car_expenses,
        {
          id: id_date,
          time: date,
          name: this.state.selected_car,
          value: +this.state.value_car
        }
      ],
      value_car: "",
      selected_car: "",
      btn_pressed_car: true
    });
    setTimeout(() => {
      this.setState({ btn_pressed_car: false });
    }, 5000);
  };
  // FLAT
  submit_flat_exp = () => {
    const id_date = new Date().valueOf();
    const date = new Date().toLocaleString();
    this.props.testFlat({
      id: id_date,
      time: date,
      name: this.state.selected_flat,
      value: +this.state.value_flat
    });
    this.setState({
      flat_expenses: [
        ...this.state.flat_expenses,

        {
          id: id_date,
          time: date,
          name: this.state.selected_flat,
          value: +this.state.value_flat
        }
      ],
      value_flat: "",
      selected_flat: "",
      btn_pressed_flat: true
    });
    setTimeout(() => {
      this.setState({ btn_pressed_flat: false });
    }, 5000);
  };
  // TRAVELS
  submit_travel_exp = () => {
    const id_date = new Date().valueOf();
    const date = new Date().toLocaleString();
    this.props.testTravel({
      id: id_date,
      time: date,
      name: this.state.value_country,
      value: +this.state.value_travel
    });
    this.setState({
      travels_expenses: [
        ...this.state.travels_expenses,
        {
          id: id_date,
          time: date,
          name: this.state.value_country,
          value: +this.state.value_travel
        }
      ],
      value_travel: "",
      value_country: "",
      btn_pressed_travels: true
    });
    setTimeout(() => {
      this.setState({ btn_pressed_travels: false });
    }, 5000);
  };
  // FOOD
  submit_food_exp = () => {
    const id_date = new Date().valueOf();
    const date = new Date().toLocaleString();
    this.props.testFood({
      id: id_date,
      time: date,
      value: +this.state.value_food
    });
    this.setState({
      food_expenses: [
        ...this.state.food_expenses,
        { id: id_date, time: date, value: +this.state.value_food }
      ],
      value_food: "",
      btn_pressed_food: true
    });
    setTimeout(() => {
      this.setState({ btn_pressed_food: false });
    }, 5000);
  };
  // TOTAL SUM
  total_sum_exp = () => {
    const car_expenses = this.state.car_expenses;
  };

  render() {
    var car = this.state.car;
    const flat = this.state.flat;
    const pressed_car = this.state.btn_pressed_car;
    const pressed_flat = this.state.btn_pressed_flat;
    const pressed_travels = this.state.btn_pressed_travels;
    const pressed_food = this.state.btn_pressed_food;
    console.log(this.state.car_expenses);
    return (
      <div>
        <Header />
        <div className="main_container">
          <div className="car_expenses">
            <div className="input_label">
              <label>Ivesti masinos islaidas</label>
            </div>
            <div className="car_input">
              <input
                type="text"
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
              <label>Ivesti buto islaidas</label>
            </div>
            <div className="flat_input">
              <input
                type="text"
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
              <label>Ivesti keliones islaidas</label>
              <input
                className="travel_input"
                type="text"
                value={this.state.value_travel}
                onChange={this.travelChange}
              ></input>
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
              <label>Ivesti maisto islaidas</label>
            </div>
            <div className="food_input">
              <input
                type="text"
                value={this.state.value_food}
                onChange={this.foodChange}
              ></input>
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
