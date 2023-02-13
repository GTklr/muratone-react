import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: "AIzaSyBI75gikFeqJunCoz6xTIGuQojDPgFRWOs",
   authDomain: "muratone-react.firebaseapp.com",
   projectId: "muratone-react",
   storageBucket: "muratone-react.appspot.com",
   messagingSenderId: "315886488295",
   appId: "1:315886488295:web:9cf0978d884a5157aaf042",
   measurementId: "G-9SLF0C3DSS"
 };

 //init firebase
initializeApp(firebaseConfig)

 //init services
 const db = getFirestore()

 //init firebase auth
 const auth = getAuth()

 export { db, auth }
 