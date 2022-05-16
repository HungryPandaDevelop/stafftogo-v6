import { Link, useParams } from 'react-router-dom';


const ListItem = (props) => {
  const {
    listing,
    onDelete,
    onEdit,
    link
  } = props;

  let normalDate = new Date(listing.timestamp.seconds).toLocaleString('en-GB', { timeZone: 'UTC' });

  console.log(listing.timestamp);
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
                style={{ backgroundImage: `url(${listing.userInfo.imgCompany})` }}
              >
                <img src={listing.userInfo.imgCompany} alt="" />
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
              {listing.userInfo && <li> <a href="/"><i className="phone-ico--black"></i><span>{listing.userInfo.phones_main}</span></a></li>}
              {listing.userInfo && <li><a href="/"><i className="mail-ico--black"></i><span>{listing.userInfo.email}</span></a></li>}
              <li><a href="/"><i className="marker-ico--black"></i><span>Показать на карте</span></a></li>
            </ul>
            <div className="btn-container">
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