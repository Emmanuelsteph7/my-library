// this is used to toggle between object true false in a state
// it makes the selected click true and the rest false
// to use, create a state with objects and when you use this func, add the arg and the setStateFunc as parameters
//  the are should be one of the state values that you want to make true
const toggleState = (arg, stateFunc) => {
  stateFunc((prev) => {
    let keys = Object.keys(prev);
    let newState = { ...prev };

    keys.forEach((key) => {
      if (key === arg) {
        newState[arg] = true;
      } else {
        newState[key] = false;
      }
    });

    return newState;
  });
};
