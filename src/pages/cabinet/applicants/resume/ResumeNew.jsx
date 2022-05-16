import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';


import {
  getAuth,
  onAuthStateChanged
} from 'firebase/auth';

import { connect } from 'react-redux';

import { addResume } from 'store/asyncActions/addResume';

// import {
//   newVacancies
// } from 'actions';

import TemplateAccount from 'components/template/TemplateAccount';

import RenderFormAccount from 'components/cabinet/forms/RenderFormAccount';


const ResumeNew = (props) => {


  const auth = getAuth();
  const navigate = useNavigate();

  const isMounted = useRef(true);

  // проверка залогинен ли 
  useEffect(() => {

    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          navigate('/authorization')
        }
      })
    }

    return () => {
      isMounted.current = false
    }

  }, [isMounted]);
  // проверка залогинен ли

  // добовление вакансии

  const onSubmitIn = () => {
    // console.log(props.dataForm.values)
    addResume(props.dataForm.values);

  }



  return (
    <>
      <TemplateAccount title="Создание резюме" >
        <RenderFormAccount
          btnSaveText="Добавить резюме"
          objFields={props.fieldsResume}
          orderFields={props.fieldsResume.order}
          initialValues={props.getInfoAccount ? props.getInfoAccount : null}
          onSubmitProps={onSubmitIn}
        />
      </TemplateAccount>
    </>
  )
}

const mapStateToProps = (state) => {
  // console.log(state)
  const formReducer = state.form && state.form.singleInput;

  return {
    fieldsResume: state.fieldsResume, // база полей
    // getInfoAccount: state.getInfoAccountReducer.getInfoAccount, // полученные данные с сервера
    dataForm: formReducer,
  }
}

export default connect(mapStateToProps)(ResumeNew);