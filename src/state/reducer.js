import { actionType } from "./actions/actions";

const initialState = {
  car_expenses: [],
  flat_expenses: [],
  travels_expenses: [],
  food_expenses: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_CAR_EXP:
      return {
        ...state,
        car_expenses: [...state.car_expenses, action.payload]
      };
    case actionType.ADD_FLAT_EXP:
      return {
        ...state,
        flat_expenses: [...state.flat_expenses, action.payload]
      };
    case actionType.ADD_TRAVEL_EXP:
      return {
        ...state,
        travels_expenses: [...state.travels_expenses, action.payload]
      };
    case actionType.ADD_FOOD_EXP:
      return {
        ...state,
        food_expenses: [...state.food_expenses, action.payload]
      };
    case actionType.REMOVE_CAR_EXP:
      return {
        ...state,
        car_expenses: state.car_expenses.filter(car => car.id !== action.id)
      };
    case actionType.REMOVE_FLAT_EXP:
      return {
        ...state,
        flat_expenses: state.flat_expenses.filter(flat => flat.id !== action.id)
      };
    case actionType.REMOVE_TRAVEL_EXP:
      return {
        ...state,
        travels_expenses: state.travels_expenses.filter(
          travel => travel.id !== action.id
        )
      };
    case actionType.REMOVE_FOOD_EXP:
      return {
        ...state,
        food_expenses: state.food_expenses.filter(food => food.id !== action.id)
      };
    default:
      return state;
  }
};
