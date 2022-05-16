const ADD_CASH = "ADD_CASH";
const REMOVE_CASH = "REMOVE_CASH";

const defaultState = {
  cash: 0
}

const  cashReducer = (state = defaultState, action) => {

  switch(action.type){
    case ADD_CASH:
      return {...state, cash: state.cash + action.payload}
    case REMOVE_CASH:
      return {...state, cash: state.cash - action.payload}
    default:
      return state;
  }
}

export default cashReducer;
