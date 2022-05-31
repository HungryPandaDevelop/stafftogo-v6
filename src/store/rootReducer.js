
import { combineReducers } from "redux";
import {reducer as formReducer} from 'redux-form';


import fieldsAuthorization from 'store/reducers/base/fieldsAuthorization';
import fieldsRegistration from 'store/reducers/base/fieldsRegistration';
import fieldsEmployersAccount from 'store/reducers/base/fieldsEmployersAccount';
import fieldsApplicantsAccount from 'store/reducers/base/fieldsApplicantsAccount';
import fieldsVacancies from 'store/reducers/base/fieldsVacancies';
import fieldsResume from 'store/reducers/base/fieldsResume';

import infoAccountReducer from "./reducers/infoAccountReducer";

import popupReducer from "./reducers/popupReducer";
import alphabetListPopupReducer from "./reducers/alphabetListPopupReducer";

import specializationBase from "store/reducers/base/specializationBase";
import industryBase from "store/reducers/base/industryBase";

import popupMapInfoReducer from "store/reducers/popupMapInfoReducer";

import listingTypeReducer from "store/reducers/listingTypeReducer";



const rootReducer = combineReducers({
  form: formReducer,
  fieldsAuthorization: fieldsAuthorization,
  fieldsRegistration: fieldsRegistration,
  fieldsEmployersAccount: fieldsEmployersAccount,
  fieldsApplicantsAccount: fieldsApplicantsAccount,
  fieldsVacancies: fieldsVacancies,
  fieldsResume: fieldsResume,
  accountInfo: infoAccountReducer,
  specializationBase: specializationBase,
  industryBase: industryBase,
  popupReducer: popupReducer,
  alphabetListPopupReducer: alphabetListPopupReducer,
  popupMapInfoReducer: popupMapInfoReducer,
  listingTypeReducer: listingTypeReducer,
});

export default rootReducer;
