import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import './Home.css'
export const Home = ({name}) => {
    // const navigate =useNavigate();
    const salir=()=>{
        return auth.signOut();
        // navigate("/")
    }

  return (
    <main className='container'>
            <header>
        <nav>
            <ul>
                
                    <Link to="/login"><li><p className='text'>Login</p></li></Link>
                
                
                    <Link to="/signup"><li><p className='text'>SignUp</p></li></Link>
                
            </ul>
        </nav>

        <h2 className='title'>{name? `Bienvenido ${name}`:null}</h2>
        {name?<button className='btn' onClick={salir}>Salir</button>:null}
        
    </header>


    </main>
    
  )
}
