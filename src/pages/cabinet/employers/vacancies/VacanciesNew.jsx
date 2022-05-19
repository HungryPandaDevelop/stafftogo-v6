import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';


import {
  getAuth,
  onAuthStateChanged
} from 'firebase/auth';

import { connect } from 'react-redux';

import { getUserInfo } from 'store/asyncActions/getUserInfo';

import { addVacancies } from 'store/asyncActions/addVacancies';

import TemplateAccount from 'components/template/TemplateAccount';

import RenderFormAccount from 'components/cabinet/forms/RenderFormAccount';


const VacanciesNew = (props) => {

  const [userInfo, setUserInfo] = useState({});

  const auth = getAuth();
  const navigate = useNavigate();

  const isMounted = useRef(true);

  // проверка залогинен ли 
  useEffect(() => {

    getUserInfo().then(res => {
      setUserInfo(res.data);
    });

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
    const addUserInfo = { ...props.dataForm.values, userInfo };
    // console.log(props.dataForm.values)
    addVacancies(addUserInfo);

  }



  return (
    <>
      <TemplateAccount title="Создание вакансии" >
        <RenderFormAccount
          btnSaveText="Добавить вакансию"
          objFields={props.fieldsVacancies}
          orderFields={props.fieldsVacancies.order}
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
    fieldsVacancies: state.fieldsVacancies, // база полей
    // getInfoAccount: state.getInfoAccountReducer.getInfoAccount, // полученные данные с сервера
    dataForm: formReducer,
  }
}

export default connect(mapStateToProps)(VacanciesNew);