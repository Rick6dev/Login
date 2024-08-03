import React, { useState } from 'react'
import styles from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { InputControl } from '../InputControl/InputControl';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
export const Login = () => {
    const navigate =useNavigate();
    const [values,setvalues]=useState({email:"",pass:""})
   const [errorMsg, seterrorMsg] = useState([]);
   const [submitButtonDisabled,setsubmitButtonDisabled]=useState(false);  
   const login=()=>{
    if(!values.email|| !values.pass){
        seterrorMsg("Datos Incompletos")
        return
    }
    seterrorMsg("")
    setsubmitButtonDisabled(true)
    signInWithEmailAndPassword(auth,values.email,values.pass).then(async(res)=>{
        setsubmitButtonDisabled(false)
        navigate("/")
    }).catch((err)=>{
        setsubmitButtonDisabled(false);
        seterrorMsg(err.message);
    })
   }

    const handleEmail=(event)=>{
        setvalues((prevValues)=>{
            return{
                ...prevValues,
                email:event.target.value,
            }
        })
    }
    const handlePassword=(event)=>{
        setvalues((prevValues)=>{
            return{
                ...prevValues,
                pass:event.target.value
            }
        })
    }
return (
    <div className={styles.container}>
    <div className={styles.innerBox}>
      <h1 className={styles.heading}>Login</h1>
      <InputControl
        label="Email"
        onChange={handleEmail}
        placeholder="Ingrese su correo"
      />
      <InputControl
        label="Contraseña"
        onChange={handlePassword}
        placeholder="Ingrese su contraseña"
      />

      <div className={styles.footer}>
        <b className={styles.error}>{errorMsg}</b>
        <button onClick={login} disabled={submitButtonDisabled}>Login btn</button>
        <p>
          Crear cuenta
          <span>
            <Link to="/signup"> ir</Link>
          </span>
        </p>
      </div>
    </div>
  </div>
  )
}
