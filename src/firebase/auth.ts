import { auth } from './app'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'


export const authenticate = async (email: string, password: string) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password)

    return {
      error: null,
      result,
    }
  } catch(err) {
    return {
      result: null,
      error: err,
    }
  } 
}

export const register = async (email: string, password: string) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password)

    return {
      error: null,
      result,
    }
  } catch(err) {
    return {
      result: null,
      error: err,
    }
  } 
}
