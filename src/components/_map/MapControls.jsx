import { useState } from "react";
import employeesIcoOrange from 'front-end/images/employees/1-orange.svg';
import BtnListMap from "components/map/BtnListMap";

import { connect } from 'react-redux';

const MapControls = (props) => {


  const declinationMass = ['сфера', 'cферы', 'сфер'];

  const [showsMarkerType, setShowMarkerType] = useState(true);

  const industry = props.alphabetListActive.industry;
  const specialization = props.alphabetListActive.specialization;

  const declination = () => {
    if (industry.length == 1) {
      return declinationMass[0]
    }
    else if (industry.length > 1 && industry.length < 5) {
      return declinationMass[1]
    }
    else if (industry.length > 4) {
      return declinationMass[2]
    }
  };
  return (
    <>
      <div className="controls-map">

        <div className="main-grid controls-line controls-line--first">
          <nav className="nav nav-border col-8">
            <ul>
              <li><a className="active" href="/">Постоянный<br /> работник</a></li>
              <li><a href="/">Консалтинговые<br /> услуги</a></li>
              <li><a href="/">Команда<br /> на проект</a></li>
              <li><a href="/">
                Временный<br /> работник
              </a></li>
            </ul>
          </nav>
          <div className="controls-contaiener col-4 vertical-align">
            <div
              className={`switch-container ${showsMarkerType ? 'switch-btn--active' : ''}`}
              onClick={() => { setShowMarkerType(!showsMarkerType) }}
            >
              <span>Резюме</span>
              <div className="switch-btn switch-btn--white">
                <i></i>
              </div>
              <span>Вакансии</span>
            </div>
          </div>
        </div>
        <div className="main-grid controls-line">
          <div className="btn-container vertical-align col-12">

            <BtnListMap idpopup="1" >
              {specialization.map((item, i) => (
                specialization.length < 4 ? <img key={i} className="ico-back" src={employeesIcoOrange} alt="" /> : ''
              ))}
              {
                specialization.length === 0
                  ? 'Специализация сотрудника' :
                  (specialization.length > 3 ?
                    'и еще ' + (specialization.length - 3) : '')
              }
            </BtnListMap>



            <BtnListMap idpopup="2" >

              {industry.length > 0 ? <>Выбрано {industry.length} {
                declination()
              } </> : <>Сфера деятельности</>}

            </BtnListMap>

            <BtnListMap idpopup="3" >
              Вознаграждение
            </BtnListMap>

            <BtnListMap idpopup="4" >
              Дополнительные фильтры
            </BtnListMap>

            <div className="left-btn-container">
              <a className="btn btn--orange btn-search" href="/">Карта</a>
              <a className="btn btn--crystal" href="/">Список</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


const mapStateToProps = (state) => {
  return {
    alphabetListActive: state.alphabetListPopupReducer
  }
}

export default connect(mapStateToProps)(MapControls);