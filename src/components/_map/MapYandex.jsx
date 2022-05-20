import React, { useState, useEffect } from "react"
import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps"


import { getListing } from 'store/asyncActions/getListing';

import userMarker from 'front-end/images/icons/marker.svg'

import { connect } from 'react-redux';
import ActionFn from 'store/actions';



const MapYandex = (props) => {
  const [listings, setListings] = useState(null);

  const mapState = {
    center: [55.739625, 37.5412],
    zoom: 12
  };

  useEffect(() => {

    getListing('vacancies').then(res => {

      setListings(res);

    });

  }, []);

  const showPopup = (index, idpopup, coords) => {

    props.setPointA(coords)

    props.ActionFn('SHOW_POPUP', Number(idpopup));
    props.ActionFn('POPUP_INFO', listings[index]);


  }

  const loadMap = (y) => {
    props.setYmaps(y);
    getPointB();
  }

  const getPointB = () => {
    if (!('geolocation' in navigator)) {
      return alert('Your browser not suported goelocation')
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const pos = [position.coords.latitude, position.coords.longitude]
      props.setPointB(pos)
    })
  };


  return (
    <>
      <YMaps query={{ apikey: 'fdb17d90-1d93-4d15-aa02-45c372d5e0f8' }}>
        <Map
          id="map"
          onLoad={(y) => { loadMap(y) }}
          modules={["multiRouter.MultiRoute"]}
          state={mapState}
          instanceRef={props.map}
          height="100%"
          width="100%"
          options={{ scrollwheel: false }}>
          <Placemark
            geometry={props.pointB}
            options={{
              iconLayout: 'default#image',
              iconImageHref: userMarker,
              iconImageSize: [30, 42],
            }}
          />
          {
            listings && listings.map((item, index) => {
              const coords = [item.data.coords_ltd, item.data.coords_lng];
              return (
                <Placemark
                  key={index}
                  idMarket={item.id}
                  onClick={() => {
                    showPopup(index, 5, coords)

                  }}
                  defaultGeometry={coords} />
              )
            })
          }
          <ZoomControl />
        </Map>
      </YMaps>



    </>
  );
}


export default connect(null, { ActionFn })(MapYandex);