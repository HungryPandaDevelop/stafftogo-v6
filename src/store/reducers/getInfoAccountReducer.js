export default (state={}, action) => {
  switch(action.type){
    case 'GET_INFO_ACCOUNT':
      return {...state, 'getInfoAccount': action.payload}
    case 'GET_INFO_VACANCIES':
      return {...state, 'getInfoVacancies': action.payload}
    default: 
      return state
  }
}