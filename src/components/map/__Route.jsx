import { useState, useContext } from "react"
// import MapGoContext from 'context/MapGoContext'

const Route = ({ setRoute }) => {

  // const { routeTypeState, onChangeTypeState } = useContext(MapGoContext)

  const routeChecknox = ['car', 'bus', 'walk'];

  const [routeboxState, setRouteboxState] = useState(false)

  const showRoutebox = (e) => {
    e.preventDefault()
    setRouteboxState(!routeboxState);
    setRoute();
  }
  //   

  return (
    <div className="route-map">
      <div className="route-map-inner">
        <div className="btn-container">
          <a
            className={`btn btn--route btn--ico_right ${routeboxState ? "active" : false}`}
            href="/"
            onClick={showRoutebox}
          >
            <span>Маршрут</span>
            <i className={`route-ico ${routeboxState ? "active" : false}`}></i>
          </a>
        </div>
        {routeboxState && (
          <div className="route-map-conainer">

            <div className="from input-route-item">
              <i className="from-ico"></i><span>Откуда: </span>
              <input className="input-decorate" type="text" />
            </div>
            <div className="to input-route-item">
              <i className="to-ico"></i><span>Куда: </span>
              <input className="input-decorate" type="text" />
            </div>

            <div className="checkbox-route">
              {routeChecknox.map((item, index) => (
                <div
                  key={index}
                  className={`checkbox-route-item checkbox-route-${item}`}
                // onClick={() => { onChangeTypeState(index) }}
                >
                  <i className={`${item}-ico`}></i>
                  <hr />
                  {/* <span className={index === routeTypeState ? "checkbox-route--active" : ""}></span> */}
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default Route
