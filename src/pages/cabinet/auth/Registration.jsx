import RenderFormAccount from 'components/cabinet/forms/RenderFormAccount';

import { connect } from 'react-redux';

import { registrationAccount } from 'store/actions/registrationAccount';
// import { registrationAccount } from 'actions';

const Registration = (props) => {

  const onSubmitIn = () => {
    // console.log('onSubmitIn', props.formData)
    registrationAccount(props.formData);
  }

  return (
    <>

      <div className="content">

        <div className="main-full">
          <h1>Регистрация</h1>
          <RenderFormAccount
            btnSaveText="Регистрация"
            objFields={props.fieldsRegistration}
            orderFields={props.fieldsRegistration.order}
            onSubmitProps={onSubmitIn}
          />
        </div>
      </div>

    </>
  )
}

const mapStateToProps = (state) => {
  const formReducer = state.form.singleInput && state.form.singleInput.values;

  console.log(state)

  return {
    fieldsRegistration: state.fieldsRegistration, // база полей
    formData: formReducer,
  }
}

export default connect(mapStateToProps)(Registration);
