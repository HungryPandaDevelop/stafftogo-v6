import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useAuthStatus } from 'hooks/useAuthStatus';

const Nav = () => {

  const { loggedIn, checkingStatus } = useAuthStatus();

  const location = useLocation();

  const pathMathRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  }

  const NavLogIn = () => {
    return (
      <>
        <div className="cell-stub col-4 col-lg-1"></div>
        <nav className="nav col-3 col-lg-4">
          <ul>
            <li><Link className={(pathMathRoute('/') ? 'active' : '')} to="/">Главная</Link></li>
            <li><Link className={(pathMathRoute('/cabinet/') ? 'active' : '')} to="/cabinet/">Кабинет</Link></li>
            <li><Link className={(pathMathRoute('/catalog') ? 'active' : '')} to="/catalog">Каталог</Link></li>
            <li><Link className={(pathMathRoute('/map') ? 'active' : '')} to="/map">Карта</Link></li>
          </ul>
        </nav>
      </>
    )
  }
  const NavLogOut = () => {
    return (
      <>
        <div className="cell-stub col-3 col-lg-1"></div>
        <nav className="nav col-4">
          <ul>
            <li><Link className={(pathMathRoute('/') ? 'active' : '')} to="/">Главная</Link></li>
            <li><Link className={(pathMathRoute('/authorization') ? 'active' : '')} to="/authorization">Войти</Link></li>
            <li><Link className={(pathMathRoute('/registration') ? 'active' : '')} to="/registration">Регистрация</Link></li>
          </ul>
        </nav>
      </>

    )
  }

  return (
    <>
      {checkingStatus ? 'Loading...' : (loggedIn ? NavLogIn() : NavLogOut())}
    </>
  )
}

export default Nav