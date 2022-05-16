import { 
  getAuth,
  updateProfile,
} from 'firebase/auth';

import { db } from 'firebase.config';

import {
  doc,
  updateDoc,
} from 'firebase/firestore';


import { toast } from 'react-toastify';



export const setUserInfo = async (dataForm) => {
  console.log('set', dataForm)

    const auth = getAuth();

    try {

      await updateProfile(auth.currentUser, {
        displayName: dataForm.name
      });

      const userRef = doc(db, 'users', auth.currentUser.uid);


      await updateDoc(userRef, dataForm);

      toast.success('Данные обновлены')
    } catch (error) {
      toast.error('Невозможно обновить профиль')
      console.log(error)
    }
  }


// сохранить информацию об аккаунте