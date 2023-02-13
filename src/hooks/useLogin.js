import { useState, useEffect } from 'react'
//firebase imports
import {auth} from '../firebase/config'
import {signInWithEmailAndPassword} from "firebase/auth"
import {useAuthContext} from './useAuthContext'

export const useLogin = () => {
   const [isCancelled, setIsCancelled] = useState(false)
   const [error, setError] = useState(null)

   const {dispatch} = useAuthContext()

   const login = (email, password) => {
      setError(null)

      signInWithEmailAndPassword(auth, email, password)
      .then((res) =>{
         console.log('user logged in', res.user)
         dispatch({type: 'LOGIN', payload: res.user})
      })
      .catch((err) => {
         if (!isCancelled)  {
         setError(err.message)
      }})

   }

   useEffect(() => {
      return () => setIsCancelled(true)
   }, [])


   return {error, login}
}