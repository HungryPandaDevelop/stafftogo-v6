
import { db } from 'firebase.config';

import {
  doc,
  updateDoc,
} from 'firebase/firestore';


import { toast } from 'react-toastify';



export const addLikeAsync = async (idLike, cardsId, name) => {

  console.log('add like')
    try {

      const vacanciesRef = doc(db, name, cardsId);

      await updateDoc(vacanciesRef, {'idLike': idLike});

      toast.success('Данные обновлены')
    } catch (error) {
      toast.error('Невозможно обновить вакансию')
      console.log(error)
    }
  }