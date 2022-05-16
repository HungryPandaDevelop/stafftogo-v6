import { 
  getAuth,
} from 'firebase/auth';

import { db } from 'firebase.config';

import {
  addDoc,
  collection,
  serverTimestamp
} from 'firebase/firestore';


import { toast } from 'react-toastify';


export const addVacancies = async (dataForm)=>{
  const auth = getAuth();
  try {
    
    dataForm['userRef'] = auth.currentUser.uid;
    dataForm['timestamp'] = serverTimestamp();

    console.log('nev vac', dataForm)
    const docRef = await addDoc(collection(db, 'vacancies'), dataForm);

    toast.success('Вакансия добавлена');

  } catch (error) {
    toast.error('Невозможно обновить профиль')
    console.log(error)
  }
}