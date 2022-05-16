const SHOW_POPUP = "SHOW_POPUP";

const  popupReducer = (state = {}, action) => {
  switch(action.type){
    case SHOW_POPUP:
      return {idShow: action.payload}
    default:
      return state;
  }
}

export default popupReducer;