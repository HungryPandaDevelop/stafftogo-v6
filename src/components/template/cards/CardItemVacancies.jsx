import Controls from './parts/Controls';
import UserInfo from './parts/UserInfo';
import UserImg from './parts/UserImg';
import CardsInfo from './parts/CardsInfo';
import CardsUpdate from './parts/CardsUpdate';

const ListItem = (props) => {

  const {
    listing,
    onDelete,
    onEdit,
  } = props;

  return (
    <div className="resume-header vacancies-item">
      <div className="main-grid">
        <div className="col-12 ">
          <CardsUpdate update={listing.timestamp} />
        </div>
        <div className="col-2">
          <UserImg img={listing.userInfo.imgsAccount} />
        </div>

        <div className="col-5">
          <CardsInfo
            name={listing.card_name}
            text={listing.responsibilities}
            priceFrom={listing.salary_priceFrom}
            priceTo={listing.salary_priceTo}
            link={listing.userRef}
          />
        </div>

        <div className="col-5">
          <UserInfo
            name={listing.userInfo.name_company}
            phone={listing.userInfo.phones_main}
            mail={listing.userInfo.email}
          />
          <Controls
            id={listing.id}
            name={listing.name}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </div>
      </div>
    </div>
  )
}

export default ListItem;