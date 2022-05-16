import { 
  getAuth,
  signInWithEmailAndPassword
} from 'firebase/auth';


import { toast } from 'react-toastify';


export const authAccount =  async (formData) => {

    const { email, password } = formData;

    try {

      const auth = getAuth();

      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      if (userCredential.user) {
        toast.success('Авторизации успешна')
        window.location = '/cabinet/';
      }


    } catch (error) {
      toast.error('Ошибка авторизации')
    }

  }