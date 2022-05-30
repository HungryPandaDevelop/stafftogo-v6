import { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

import imgLogo from 'front-end/images/logo.svg'
import Switch from 'components/cards/cardsControls/parts/Switch';

import MenuPopup from 'components/popup/MenuPopup';

const Header = () => {

  const [showNavMenu, setShowNavMenu] = useState(false);

  const showPopup = () => {
    setShowNavMenu(true);
  }
  const closePopup = () => {
    setShowNavMenu(false);
  }

  return (
    <>
      <MenuPopup showNavMenu={showNavMenu} closePopup={closePopup} />
      <header >
        <div className="header-bg"></div>
        <div className="main-grid">
          <div className="logo-container vertical-align col-2">
            <Link className="logo" to="/"> <img src={imgLogo} alt="logo" /></Link>
          </div>
          <div className="city-container vertical-align col-2">
            <div className="city-body"><em>Ваш Город: </em><a href="#"> Москва</a></div>
          </div>

          <div className="col-4 vertical-align">
            <div className="search-container">
              <Switch />
              <div className="search-header">
                <input className="input-decorate" type="text" placeholder="Профессия, должность или компания" />
              </div>
            </div>

          </div>


          <div className="sigin-container vertical-align col-4">
            <Nav />
            <a className="hamburger-btn element-btn" href="#" onClick={showPopup} ></a>
          </div>
        </div>
      </header>
      <div className="stub"></div>
    </>
  )
}

export default Header
