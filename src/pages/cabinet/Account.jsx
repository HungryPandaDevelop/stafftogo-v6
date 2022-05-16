import { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import TemplateAccount from 'components/template/TemplateAccount';
import RenderFormAccount from 'components/cabinet/forms/RenderFormAccount';

import { getUserInfo } from 'store/asyncActions/getUserInfo';
import { setUserInfo } from 'store/asyncActions/setUserInfo';

import ActionFn from 'store/actions';

const Account = (props) => {

  const [typeCabinet, setTypeCabinet] = useState('employers');

  /* получение данных пользователя */

  useEffect(() => {

    getUserInfo().then(res => {
      props.ActionFn('SET_INFO_ACCOUNT', res.data);

      setTypeCabinet(res.data.typeCabinet);
    });


  }, []);

  /* получение данных пользователя */

  /* сохранение данных пользователя */
  const onSubmitIn = () => {
    //console.log('save in account ', props.dataForm.values)

    setUserInfo(props.dataForm.values);
  }


  /* сохранение данных пользователя */



  return (
    <>
      <TemplateAccount title="Учетная запись компании" >
        {(typeCabinet === 'employers' ? (
          <RenderFormAccount
            btnSaveText="Сохранить изменения"
            objFields={props.fieldsEmployersAccount}
            orderFields={props.fieldsEmployersAccount.order}
            initialValues={props.accountInfo ? props.accountInfo : null}
            onSubmitProps={onSubmitIn}
          />
        ) : (
          <RenderFormAccount
            btnSaveText="Сохранить изменения"
            objFields={props.fieldsApplicantsAccount}
            orderFields={props.fieldsApplicantsAccount.order}
            initialValues={props.accountInfo ? props.accountInfo : null}
            onSubmitProps={onSubmitIn}
          />
        ))}


      </TemplateAccount>
    </>
  )
}

const mapStateToProps = (state) => {

  const formReducer = state.form && state.form.singleInput;

  return {
    fieldsEmployersAccount: state.fieldsEmployersAccount, // база полей
    fieldsApplicantsAccount: state.fieldsApplicantsAccount, // база полей
    accountInfo: state.accountInfo.accountInfo,
    dataForm: formReducer,
    // getInfoAccount: state.getInfoAccountReducer.getInfoAccount, // полученные данные с сервера

    // 
  }
}

export default connect(mapStateToProps,
  {
    ActionFn
  })(Account);