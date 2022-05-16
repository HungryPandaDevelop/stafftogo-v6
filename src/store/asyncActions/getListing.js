import { 
  getAuth,
} from 'firebase/auth';

import { toast } from 'react-toastify';

import { useNavigate, Link } from 'react-router-dom';

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

import { db } from 'firebase.config';


export const getListing = async (name, user) => {

  const auth = getAuth();
  
  const listingsRef = collection(db, name);
  
  let q;
  if(user){
    q = query(
      listingsRef,
      where('userRef', '==', auth.currentUser.uid),
      orderBy('timestamp', 'desc'),
      // limit(2)
    );
  }
  else{
    q = query(
      listingsRef,
      orderBy('timestamp', 'desc'),
      // limit(2)
    );
  }
  

  const querySnap = await getDocs(q);

  const getData = []

  querySnap.forEach((doc) => {
    return getData.push({
      id: doc.id,
      data: doc.data()
    })
  });

  return getData;

}


export const onDelete = async (listings, listingId, name) => {
  if (window.confirm('Delete ?')) {
    await deleteDoc(doc(db, name, listingId))

    return  listings.filter((listing) => listing.id !== listingId)

  }
}




// export const onEdit = async (listingId) => {
//   const navigate = useNavigate();

//   navigate(`/cabinet/vacancies-edit/${listingId}`)
// }


