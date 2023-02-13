import React, {useState} from 'react'
import { useSignup } from '../hooks/useSignup'

export default function SignUp() {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const {error, signup} = useSignup()

const handleSubmit = (e) => {
   e.preventDefault()
   signup(email, password)
}


  return (
   <div className="bg-secondary">
      <div className="container Auth-page">
         <h2 className="page-title">Sign Up</h2>

            <form onSubmit={handleSubmit} className="d-flex flex-column">
               <label>
                  <span> Email:</span>
                  <input type="email" onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required/>
               </label>

               <label>
                  <span> Password:</span>
                  <input type="password" onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required/>
               </label>   

                  <button className="btn purplebtn btn-success">submit</button>
                  {error && <p>{error}</p>}
            </form>
      </div>
   </div>

  )
}
