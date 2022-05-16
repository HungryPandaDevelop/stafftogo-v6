
import { db } from 'firebase.config';

import {
  doc,
  updateDoc,
} from 'firebase/firestore';


import { toast } from 'react-toastify';



export const saveInfo = async (dataForm, vacaiciesId, name) => {
  
    try {

      const vacanciesRef = doc(db, name, vacaiciesId);

      await updateDoc(vacanciesRef, dataForm);

      toast.success('Данные обновлены')
    } catch (error) {
      toast.error('Невозможно обновить вакансию')
      console.log(error)
    }
  }