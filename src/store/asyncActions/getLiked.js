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


export const getLiked = async (name, user) => {

  const auth = getAuth();
  
  const listingsRef = collection(db, 'resume');
  
  let q = query(
      listingsRef,
      where("idLike", "array-contains", "Ks8AALPMJ0MkLl888A9jSBr2IaC3"),
      //where('idLike', '==', 'Ks8AALPMJ0MkLl888A9jSBr2IaC3'),
      // where('userRef', '==', 'YpguqFwp1YeEFrQlQeJHaRWVKar1'),
      // orderBy('timestamp', 'desc'),
      // limit(2)
    );


  

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






// export const onEdit = async (listingId) => {
//   const navigate = useNavigate();

//   navigate(`/cabinet/vacancies-edit/${listingId}`)
// }


