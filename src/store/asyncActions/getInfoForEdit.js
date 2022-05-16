
import { db } from 'firebase.config';

import {
  doc,
  getDoc,
} from 'firebase/firestore';


import { toast } from 'react-toastify';


export const getInfoForEdit = async (vacaiciesId, name) =>{

    try {
      const listingsRef = doc(db, name, vacaiciesId);
      
      const querySnap = await getDoc(listingsRef);

      return querySnap.data();

  }
  catch (error) {
    console.log(error);
    toast.arror('Что то пошло не так')
  }
}