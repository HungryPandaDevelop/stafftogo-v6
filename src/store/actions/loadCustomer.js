export const loadCustomerActionIn = (customer) => {
  return (dispatch) =>{
    dispatch({ type: "LOAD_CUSTOMER", payload: customer})
  }
}