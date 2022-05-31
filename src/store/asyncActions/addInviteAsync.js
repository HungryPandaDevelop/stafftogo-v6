
import { db } from 'firebase.config';

import {
  doc,
  updateDoc,
} from 'firebase/firestore';


import { toast } from 'react-toastify';



export const addInviteAsync = async (idInvite, cardsId, name) => {

    try {

      const vacanciesRef = doc(db, name, cardsId);

      await updateDoc(vacanciesRef, {'idInvite': idInvite});

      toast.success('Данные обновлены')
    } catch (error) {
      toast.error('Невозможно обновить вакансию')
      console.log(error)
    }
  }