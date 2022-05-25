import { useState } from 'react';
import RenderFormAccount from 'components/cabinet/forms/RenderFormAccount';

import { connect } from 'react-redux';

import { registrationAccount } from 'store/actions/registrationAccount';

// import { registrationAccount } from 'actions';

const Registration = (props) => {

  const [errors, setErrors] = useState([]);

  const onSubmitIn = () => {


    // const chekMas = props.fieldsRegistration.checking;
    // let newError;
    // if (props.formData) {
    //   newError = chekMas.map(item => {
    //     if (props.formData[item]) {
    //       if (props.formData[item].length < 6) {
    //         return [item, 'Мало букв'];
    //       }
    //     }
    //     else {
    //       return [item, 'Пустое поле'];
    //     }
    //   });
    // } else {
    //   newError = chekMas.map(item => {
    //     return [item, 'Пустое поле'];
    //   });
    // }

    //setErrors(newError);
    // console.log('newError', newError);
    // setErrors({ 'name': 'нужно больше букв' }, { 'password': 'нужно больше букв' });

    if (props.formData) {
      registrationAccount(props.formData);

    }
    else {
      console.log('error')
    }
  }

  return (
    <>

      <div className="content">
        {/* {console.log('errors 1', errors)} */}
        <div className="main-full">
          <h1>Регистрация</h1>
          <RenderFormAccount
            btnSaveText="Регистрация"
            objFields={props.fieldsRegistration}
            orderFields={props.fieldsRegistration.order}
            onSubmitProps={onSubmitIn}
            errors={errors}
          />
        </div>
      </div>

    </>
  )
}

const mapStateToProps = (state) => {
  const formReducer = state.form.singleInput && state.form.singleInput.values;

  return {
    fieldsRegistration: state.fieldsRegistration, // база полей
    formData: formReducer,
  }
}

export default connect(mapStateToProps)(Registration);
