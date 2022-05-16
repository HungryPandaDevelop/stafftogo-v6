import { useState, useEffect } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import { getAuth } from 'firebase/auth';

import { getUserInfo } from 'store/asyncActions/getUserInfo';

const CabinetSidebar = () => {
  const [typeCabinet, setTypeCabinet] = useState('employers');

  useEffect(() => {

    getUserInfo().then(res => {
      setTypeCabinet(res.data.typeCabinet);
    });

  }, []);



  const auth = getAuth();
  const onLogout = () => {
    auth.signOut();
  }

  const location = useLocation();

  const pathMathRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  }

  const NameMassEmployers = [
    ['Мои реквизиты', 'account', ''],
    ['Мои вакансии', 'vacancies', 'vacancies'],
    // ['Мои реквизиты', 'requisites', 'requisites'],
    // ['Мои отклики', 'respond', 'responses'],
    // ['Мои кандидаты', 'candidates', 'candidates'],
    // ['Мой пакет услуг', 'packserv', 'packserv'],
    // ['Мои счета', 'score', 'score'],
    // ['История заказов', 'historyorder', 'order_history'],
  ]

  const NameMassApplicants = [
    ['Мой кабинет', 'account', ''],
    ['Мои резюме', 'vacancies', 'resume'],
    ['Мои отклики', 'vacancies', ''],
    // ['Мои реквизиты', 'requisites', 'requisites'],
    // ['Мои отклики', 'respond', 'responses'],
    // ['Мои кандидаты', 'candidates', 'candidates'],
    // ['Мой пакет услуг', 'packserv', 'packserv'],
    // ['Мои счета', 'score', 'score'],
    // ['История заказов', 'historyorder', 'order_history'],
  ]

  return (
    <>
      <ul className="ln cabinet-sidebar">
        {(typeCabinet === 'employers' ? NameMassEmployers : NameMassApplicants)
          .map((item, index) => (
            <li key={index}>
              <Link className={`${pathMathRoute('/cabinet/' + item[2]) ? 'active' : ''} sidebar_link ico-in`} to={`/cabinet/${item[2]}`}>
                <i>
                  <div className={`${item[1]}-ico--white back-ico`}></div>
                  <div className={`${item[1]}-ico--gray front-ico`}></div>
                </i>
                <span>{item[0]}</span>
              </Link>
            </li>
          )
          )};

      </ul>

      <input
        className="btn btn--orange"
        type="submit"
        value="Выйти"
        onClick={onLogout}
      />
    </>
  )
}

export default CabinetSidebar