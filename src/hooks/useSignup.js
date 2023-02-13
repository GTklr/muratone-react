import {useState, useEffect} from 'react'
import {useAuthContext} from "./useAuthContext"

//firebase imports
import {auth} from '../firebase/config'
import {createUserWithEmailAndPassword} from "firebase/auth"

export const useSignup = () => {
   const [isCancelled, setIsCancelled] = useState(false)
   const [error, setError] = useState(null)
   const {dispatch} = useAuthContext()
   const signup = (email, password) => {
      setError(null)

      createUserWithEmailAndPassword(auth, email, password)
      .then((res) =>{
         console.log('user signed up', res.user)

         //dispatch authContext
         dispatch({type:'LOGIN', payload: res.user})
      })

      //clean up state
      .catch((err) => {
         if (!isCancelled)  {
         setError(err.message)
      }})



   }

   useEffect(() => {
      return () => setIsCancelled(true)
   }, [])

   return {error, signup}
}