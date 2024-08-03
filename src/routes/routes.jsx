import { BrowserRouter as Router,Routes,Route } from "react-router-dom"



import React, { useEffect, useState } from 'react'
import { Login } from "../components/Login/Login"
import { Home } from "../components/Home/Home"
import { SignUp } from "../components/SignUp/SignUp"
import { auth } from "../firebase"
export const MyRoutes = () => {
    const [userName, setuserName] = useState(null);
    useEffect(() => {
        auth.onAuthStateChanged((user)=>{
            if(user){
                setuserName(user.displayName)
            }else{
                setuserName("")
            }
        })
    }, [])
    
  return (
    <div>
        <Router>
            <Routes>
                <Route exact path="/" element={<Home name={userName}/>}></Route>
                <Route exact path="/login" element={<Login/>}></Route>
                <Route exact path="/signup" element={<SignUp/>}></Route>

            </Routes>
        </Router>


    </div>
  )
}
