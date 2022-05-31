import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { getListing } from 'store/asyncActions/getListing';

import { getAuth } from 'firebase/auth';

import ListItem from 'components/cards/ListItem';



const List = (props) => {

  const auth = getAuth();

  const [listings, setListings] = useState(null);

  const [loading, setLoading] = useState(true);


  const params = useParams();

  useEffect(() => {

    getListing('vacancies', 'user').then(res => {

      setListings(res);
      setLoading(false);
    });

    getListing(props.listingType).then(res => {
      setListings(res);
      setLoading(false);
    });

  }, [props.listingType]);

  // getListing('vacancies', 'user').then(res => {
  //   // setInviteList(res);
  // });

  return (
    <>
      <div>
        <h4>
          Мои вакансии
        </h4>
      </div>


      {loading ? 'loading' : listings && listings.length > 0 ? (

        <ul className='ln'>
          {listings.map((listing) => (
            <ListItem
              listing={listing.data}
              id={listing.id}
              key={listing.id}
              imgCompany={listing.imgCompany}
              link={`/catalog/${props.listingType}/${listing.id}`}
              idCategory={props.listingType}
              idElement={listing.id}
              uidUser={auth.currentUser}

            />
          ))}
        </ul>
      ) : (
        <p>Нет элементов {params.catagoryName}</p>
      )}
    </>
  )
}



const mapStateToProps = (state) => {

  return {
    listingType: state.listingTypeReducer
  }
}



export default connect(mapStateToProps)(List);