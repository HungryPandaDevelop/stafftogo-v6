import Nav from './Nav';

import imgLogo from 'front-end/images/logo.svg'

const Header = () => {
  return (
    <>
      <header >
        <div className="header-bg"></div>
        <div className="main-grid">
          <div className="logo-container vertical-align col-2 col-lg-3">
            <a className="logo" href="#"> <img src={imgLogo} alt="logo" /></a>
          </div>
          <div className="city-container vertical-align col-2 col-lg-3">
            <div className="city-body"><em>Ваш Город: </em><a href="#"> Москва</a></div>
          </div>
          <Nav />

          <div className="hamburger-container vertical-align col-1">
            <a className="hamburger-btn element-btn" href="#" data-element="0"></a>
          </div>
        </div>
      </header>
      <div className="stub"></div>
    </>
  )
}

export default Header
