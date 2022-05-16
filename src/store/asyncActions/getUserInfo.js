import { 
  getAuth,
} from 'firebase/auth';

import {
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';


import { db } from 'firebase.config';


export const getUserInfo = async () => {

  const auth = getAuth();
  
  const listingsRef = collection(db, 'users');

  const q = query(
    listingsRef,
    where('email', '==', auth.currentUser.email),
  );

  const querySnap = await getDocs(q);

  let getInfoAccount;

  querySnap.forEach((doc) => {
    return getInfoAccount = { data: doc.data() }
  });

  return getInfoAccount;
}