const defaultState = {
  customers: []
}

const LOAD_CUSTOMER = "LOAD_CUSTOMER";
const ADD_CUSTOMER = "ADD_CUSTOMER";
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";

const  customerReducer = (state = defaultState, action) => {

  switch(action.type){
    case LOAD_CUSTOMER:
      return {...state, customers: [...state.customers, ...action.payload]}
    case ADD_CUSTOMER:
      return {...state, customers: [...state.customers, action.payload]}
    case REMOVE_CUSTOMER:
      return {...state, customers: state.customers.filter(el => el.id !== action.payload) }
    default:
      return state;
  }
}

export default customerReducer;

// export const loadCustomerAction = (payload) => ({type: LOAD_CUSTOMER, payload});
