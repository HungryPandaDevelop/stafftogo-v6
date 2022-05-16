import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getListing } from 'store/asyncActions/getListing';

import {
  getInfoAccountAction,
} from 'actions'

import { toast } from 'react-toastify';

import { getAuth } from 'firebase/auth';

import { db } from 'firebase.config';
import {
  doc,
  collection,
  getDocs,
  query,
  where,
  orderBy,
  deleteDoc,
  limit,
  startAfter
} from 'firebase/firestore';


import ListItem from 'components/template/ListItem';

import TemplateAccount from 'components/template/TemplateAccount';

const Vacancies = (props) => {

  const auth = getAuth();

  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [listings, setListings] = useState(null);
  const [lastFetchedListing, setLastFetchedListing] = useState(null);


  /* получение данных пользователя */

  useEffect(() => {
    props.getInfoAccountAction();

  }, []);

  /* получение данных пользователя */


  useEffect(() => {
    const fetchUserListings = async () => {
      try {
        // list vacaicies
        const listingsRef = collection(db, 'vacancies');

        const q = query(
          listingsRef,
          where('userRef', '==', auth.currentUser.uid),
          orderBy('timestamp', 'desc'),
          limit(2)
        );

        const querySnap = await getDocs(q)

        const lastVisible = querySnap.docs[querySnap.docs.length - 1];
        setLastFetchedListing(lastVisible);

        let listings = []

        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data()
          })
        })

        setListings(listings);
        setLoading(false);

        // list vacaicies
      }
      catch (error) {
        console.log(error);
      }

    }
    fetchUserListings();
  }, [auth.currentUser.uid]);

  // pagination load more
  const onFetchMoreListings = async () => {

    try {
      const listingsRef = collection(db, 'vacancies');

      // create a query
      const q = query(
        listingsRef,
        where('userRef', '==', auth.currentUser.uid),
        orderBy('timestamp', 'desc'),
        startAfter(lastFetchedListing),
        limit(2)
      );

      // execute query

      const querySnap = await getDocs(q);

      const lastVisible = querySnap.docs[querySnap.docs.length - 1];

      setLastFetchedListing(lastVisible)

      let listings = [];

      querySnap.forEach((doc) => {

        return listings.push({
          id: doc.id,
          data: doc.data()
        })
      });



      setListings((prevState) => [...prevState, ...listings])

      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }
  // pagination load more




  const onDelete = async (listingId) => {
    if (window.confirm('Delete ?')) {
      await deleteDoc(doc(db, 'vacancies', listingId))

      const updatedListings = listings.filter((listing) => listing.id !== listingId)
      setListings(updatedListings);
      alert('delete !')
    }
  }

  const onEdit = async (listingId) => {
    navigate(`/cabinet/vacancies-edit/${listingId}`)
  }




  const contentPage = () => {

    return (
      <>
        {!loading && listings.length > 0 && (
          <>
            {
              listings.map((listing) => (
                <ListItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                  // onDelete={() => onDelete(listing.id)}
                  // onEdit={() => onEdit(listing.id)}
                  name={listing.vacancies_name}
                  solary={[listing.salary_priceFrom, listing.salary_priceTo]}
                  nameCompany={props.getInfoAccount.name_company}
                  imgCompany={props.getInfoAccount.imgCompany}
                  phoneCompany={props.getInfoAccount.phones_main}
                  mailCompany={props.getInfoAccount.email}
                />
              ))
            }
          </>
        )}

        {lastFetchedListing && (
          <div
            className="btn"
          // onClick={onFetchMoreListings}
          >Загрузить еще</div>
        )}
      </>
    )
  }
  const rightSibar = () => {
    return (
      <Link className="btn btn--orange" to="/cabinet/vacancies-new">
        Создать вакансию
      </Link>
    )
  }
  const getVac = () => {
    console.log('get')


  }

  return (
    <>
      <TemplateAccount title="Мои вакансии" rightSibar={rightSibar()}>
        <button onClick={getVac}>get</button>
        {contentPage()}
      </TemplateAccount>
    </>
  )
}


const mapStateToProps = (state) => {

  // const formReducer = state.form && state.form.singleInput;

  return {
    // fieldCompanyAccount: state.fieldCompanyAccount, // база полей
    // getInfoAccount: state.getInfoAccountReducer.getInfoAccount, // полученные данные с сервера
    // dataForm: formReducer,
  }
}

export default connect(mapStateToProps,
  {
    // getInfoAccountAction,
  })(Vacancies);