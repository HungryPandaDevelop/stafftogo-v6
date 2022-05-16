
export default (state={}, action) => {
  switch(action.type){
    case 'SET_INFO_ACCOUNT':
      return {...state, accountInfo: action.payload}
    default: 
      return state
  }
}