export const actionType = {
  ADD_CAR_EXP: "ADD CAR EXPENSES",
  ADD_FLAT_EXP: "ADD FLAT EXPENSES",
  ADD_TRAVEL_EXP: "ADD TRAVEL EXPENSES",
  ADD_FOOD_EXP: "ADD FOOD EXPENSES",
  REMOVE_CAR_EXP: "REMOVE CAR EXPENSES",
  REMOVE_FLAT_EXP: "REMOVE FLAT EXPENSES",
  REMOVE_TRAVEL_EXP: "REMOVE TRAVEL EXPENSES",
  REMOVE_FOOD_EXP: "REMOVE FOOD EXPENSES"
};

// ADD ACTION
function addCar(payload) {
  return {
    type: actionType.ADD_CAR_EXP,
    payload
  };
}
function addFlat(payload) {
  return {
    type: actionType.ADD_FLAT_EXP,
    payload
  };
}
function addTravel(payload) {
  return {
    type: actionType.ADD_TRAVEL_EXP,
    payload
  };
}
function addFood(payload) {
  return {
    type: actionType.ADD_FOOD_EXP,
    payload
  };
}
// REMOVE ACTION
export const deleteCar = id => {
  const action = {
    type: actionType.REMOVE_CAR_EXP,
    id
  };
  return action;
};

export const deleteFlat = id => {
  const action = {
    type: actionType.REMOVE_FLAT_EXP,
    id
  };
  return action;
};

export const deleteTravel = id => {
  const action = {
    type: actionType.REMOVE_TRAVEL_EXP,
    id
  };
  return action;
};

export const deleteFood = id => {
  const action = {
    type: actionType.REMOVE_FOOD_EXP,
    id
  };
  return action;
};

// ADD DISPATCHES
export function testCar(payload) {
  return dispatch => {
    dispatch(addCar(payload));
  };
}
export function testFlat(payload) {
  return dispatch => {
    dispatch(addFlat(payload));
  };
}
export function testTravel(payload) {
  return dispatch => {
    dispatch(addTravel(payload));
  };
}
export function testFood(payload) {
  return dispatch => {
    dispatch(addFood(payload));
  };
}
