import React, {useState} from 'react'
import { useLogin } from '../hooks/useLogin'
import { useAuthContext } from "../hooks/useAuthContext";
import "./Login.css"

export default function Login() {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const {error, login} = useLogin()

const handleSubmit = (e) => {
   e.preventDefault()
   login(email, password)
}

const {user} = useAuthContext()
  


  return (
   <div className="bg-secondary">
      <div className="Auth-page">
         {!user && <h2 className="page-title">Login</h2>}
         {user && <h2 className="page-title">Welcome back</h2>}

            <form onSubmit={handleSubmit} className="d-flex flex-column container">
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

                  <button className="btn purplebtn btn-success">login</button>
                  {error && <p>{error}</p>}
            </form>
      </div>
   </div>

  )
}
