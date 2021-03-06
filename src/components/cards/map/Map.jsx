import { useState, useRef } from 'react';
import { connect } from 'react-redux';

import MapYandex from './MapYandex';



import ClientPopup from './mapPopup/ClientPopup';
import Route from './mapPopup/Route';



const MapGo = (props) => {

  const [pointA, setPointA] = useState([]);
  const [pointB, setPointB] = useState([]);

  const routeTypeName = ['auto', 'masstransit', 'pedestrian'];

  const map = useRef(null)

  const [ymaps, setYmaps] = useState(null);

  const setRouteFirst = () => {
    addRoute(pointA, pointB, 0);
  }
  const setRouteByChangeType = (index) => {
    console.log('setRouteByChangeType', index);
    addRoute(pointA, pointB, index);
  }

  // console.log(typeRoute);


  const addRoute = (A, B, index) => {

    const multiRoute = new ymaps.multiRouter.MultiRoute(
      {
        referencePoints: [A, B].reverse(),
        params: {
          routingMode: routeTypeName[index],
        }
      },
      { boundsAutoApply: true }
    )

    map.current.geoObjects.removeAll(multiRoute)
    map.current.geoObjects.add(multiRoute)
  };


  // const visiblePopup = (el) => {
  //   switch (el) {
  //     case 1:
  //       return <AlphabetPopup id="specialization" idAction="SPECIALIZATION" />
  //     case 2:
  //       return <AlphabetPopup id="industry" idAction="INDUSTRY" />
  //     case 3:
  //       return <RewardPopup />
  //     case 4:
  //       return <ExtraFilter />
  //   }
  // }



  return (
    <>
      <div className="map">
        <MapYandex
          ymaps={ymaps}
          setYmaps={setYmaps}
          pointA={pointA}
          pointB={pointB}
          setPointA={setPointA}
          setPointB={setPointB}
          map={map}

        />
        <div className="map-container">
          {/* {visiblePopup(props.idShow)} */}
          {props.idShow === 5 ? (
            <>
              <Route
                setRouteFirst={setRouteFirst}
                setRouteByChangeType={setRouteByChangeType}
              />
              <ClientPopup />
            </>
          ) : ''}

        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    idShow: state.popupReducer.idShow
  }
}


export default connect(mapStateToProps)(MapGo);