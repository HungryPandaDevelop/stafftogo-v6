
import { db } from 'firebase.config';

import {
  doc,
  updateDoc,
} from 'firebase/firestore';


import { toast } from 'react-toastify';



export const addInviteAsync = async (addInvite, cardsId, name) => {

  console.log('add addInviteAsync')
    try {

      const vacanciesRef = doc(db, name, cardsId);

      await updateDoc(vacanciesRef, {'addInvite': addInvite});

      toast.success('Данные обновлены')
    } catch (error) {
      toast.error('Невозможно обновить вакансию')
      console.log(error)
    }
  }