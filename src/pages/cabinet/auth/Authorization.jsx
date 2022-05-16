import RenderFormAccount from 'components/cabinet/forms/RenderFormAccount';

import { connect } from 'react-redux';

// import { authAccount } from 'actions';

import { Link } from 'react-router-dom';

import OAuth from 'components/cabinet/OAuth';

import { authAccount } from 'store/actions/authAccount';

const Authorization = (props) => {

  const onSubmitIn = () => {
    authAccount(props.formData);
  }

  return (
    <>
      <div className="content">
        <div className="main-grid">
          <div className="col-5">
            <h1>Авторизация</h1>
            <RenderFormAccount
              btnSaveText="Авторизация"
              objFields={props.fieldsAuthorization}
              orderFields={props.fieldsAuthorization.order}
              onSubmitProps={onSubmitIn}
            />
            <Link to="/forgot-password">Восстановить пароль</Link>
          </div>
          <div className="col-1"></div>
          <div className="col-6">
            {/* <OAuth /> */}
          </div>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  const formReducer = state.form.singleInput && state.form.singleInput.values;

  // console.log(formReducer)

  return {
    fieldsAuthorization: state.fieldsAuthorization, // база полей
    formData: formReducer,
  }
}

export default connect(mapStateToProps, { authAccount })(Authorization);