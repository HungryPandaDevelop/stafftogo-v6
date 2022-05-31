import avatar from 'front-end/images/icons/avatar-white.svg';
import carret from 'front-end/images/controls/carret-down-white.svg';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getUserInfo } from 'store/asyncActions/getUserInfo';
import { getListing } from 'store/asyncActions/getListing';

import { getAuth } from 'firebase/auth';

const HeadProfile = () => {


  const auth = getAuth();
  const onLogout = (e) => {
    e.preventDefault();
    auth.signOut();
  }

  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState({});
  const [listings, setListings] = useState(null);

  const [typeList, setTypeList] = useState('');
  const [typeName, setTypeName] = useState('');

  useEffect(() => {

    getUserInfo().then(res => {
      setUserInfo(res.data);
      console.log(res.data)

      if (res.data.typeCabinet === 'employers') {
        setTypeList('vacancies');
        setTypeName('Вакансии');

      } else {
        setTypeList('resume');
        setTypeName('Резюме');
      }

      setTypeList((state) => {

        getListing(state, 'user').then(res => {

          setListings(res);
          setLoading(false);
        });
        return state;
      });
    });

  }, []);


  return (
    <>
      <a className="btn-search-head ico-in" href="#">
        <span>Поиск</span>
      </a>
      <Link className="btn-map-head" to="/catalog"></Link>

      <div className="sigin-body">
        <div>
          <em>{userInfo.name}</em>
          <i className="img-cover img-avatar"
            style={{ backgroundImage: `url(${userInfo.imgsAccount ? userInfo.imgsAccount : avatar})` }}
          >
            <img src={avatar} alt="" />
          </i>
          <i className="carret">
            <img src={carret} alt="" />
          </i>
        </div>
        <div className="sigin-popup">
          <div className="sigin-title">
            {userInfo.name}
          </div>
          <div className="sigin-lists">
            <div className="sigin-top">
              <h3> <Link to="/cabinet/">Мои Кабинет</Link></h3>
              <h3> <Link to={`/cabinet/${typeList}/`}>Мои {typeName}</Link></h3>
            </div>
            <ul className="ln">
              {!loading && listings.length > 0 && (
                <>
                  {
                    listings.map((listing) => (
                      <div key={listing.id}>
                        <li><Link to={`/catalog/${typeList}/${listing.id}`}>{listing.data.card_name}</Link></li>
                      </div>
                    ))
                  }
                </>
              )}
            </ul>
          </div>
          <div className="sigin-bottom">
            <a href="#" onClick={onLogout}><div className="logout-ico"></div><span>Выйти</span></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeadProfile
