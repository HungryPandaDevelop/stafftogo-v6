import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { addLikeAsync } from 'store/asyncActions/addLikeAsync';


import { getListing } from 'store/asyncActions/getListing';

const ListItem = (props) => {
  const {
    listing,
    onDelete,
    onEdit,
    link,
    uidUser,
    idElement,
  } = props;

  const [liked, setLiked] = useState(false);
  const [invite, setInvite] = useState(false);
  const [likeMass, setLikeMass] = useState([]);
  // console.log(listing.idLike)

  let normalDate = new Date(listing.timestamp.seconds).toLocaleString('en-GB', { timeZone: 'UTC' });

  //

  useState(() => {
    setLikeMass(listing.idLike);

    if (listing.idLike && listing.idLike.includes(uidUser.uid)) {
      setLiked(true);

    }
  }, []);

  const addLike = () => {

    setLikeMass(likeMass.filter(item => item !== uidUser.uid));

    if (likeMass.includes(uidUser.uid)) {
      setLiked(false);
    } else {
      setLikeMass([...likeMass, uidUser.uid]);
      setLiked(true);
    }

    setLikeMass((state) => {
      addLikeAsync(state, idElement, 'resume');
      return state;
    });

  }



  const addInvite = () => {

    console.log('invite',);

    getListing('vacancies', 'user').then(res => {

      console.log('res', res[0].id);


    });
  }




  return (
    <div className="resume-header vacancies-item">
      <div className="main-grid">
        <div className="col-12 resume-header-roof">
          <div className="resume-update"><span>Резюме обновлено: {normalDate}</span></div>
        </div>
        {listing.userInfo && (
          <div className="col-2">
            <div className="resume-face-container">
              <div
                className="resume-face img-cover"
                style={{ backgroundImage: `url(${listing.userInfo.imgsAccount})` }}
              >
                <img src={listing.userInfo.imgsAccount} alt="" />
              </div>
            </div>
          </div>
        )}

        <div className="col-5">
          <div className="resume-info">
            <h2>
              <Link to={link}>
                {listing.card_name}
              </Link>
            </h2>
            <div className="vacancies-price">
              {listing.salary_priceFrom && `Р ${listing.salary_priceFrom}`}
              {listing.salary_priceTo && ` - ${listing.salary_priceTo}`}
            </div>
            <div>
              {listing.responsibilities}
            </div>
          </div>
        </div>

        <div className="col-5">
          <div className="resume-info resume-info--more">
            <div className="resume-delimentr"></div>
            <h2>{listing.userInfo && listing.userInfo.name_company}</h2>
            <ul className="ln">
              {listing.userInfo && <li><a href="/"><i className="phone-ico--black"></i><span>{listing.userInfo.phones_main}</span></a></li>}
              {listing.userInfo && <li><a href="/"><i className="mail-ico--black"></i><span>{listing.userInfo.email}</span></a></li>}
              <li><a href="/"><i className="marker-ico--black"></i><span>Показать на карте</span></a></li>
            </ul>
            <div className="btn-container">
              <div className={`btn ${liked ? 'btn--orange' : ''}`} onClick={addLike}>Лайк</div>
              <div className={`btn ${invite ? 'btn--orange' : ''}`} onClick={addInvite} >Пригласить</div>
              {onEdit && (
                <div
                  className='btn btn--orange btn--smaill ico-in'
                  onClick={() => onEdit(listing.id, listing.name)}
                >
                  <i>
                    <span className="back-ico"><img src="images/icons/edit-black.svg" alt="" /></span>
                    <span className="front-ico"><img src="images/icons/edit-white.svg" alt="" /></span>
                  </i>
                  <span>
                    Редактировать
                  </span>
                </div>
              )}
              {onDelete && (
                <div
                  className="btn btn--blue btn--smaill ico-in"
                  onClick={() => onDelete(listing.id, listing.name)}
                >
                  <i>
                    <span className="back-ico"><img src="images/icons/trash-black.svg" alt="" /></span>
                    <span className="front-ico"><img src="images/icons/trash-white.svg" alt="" /></span>
                  </i>
                  <span>
                    Удалить
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListItem;