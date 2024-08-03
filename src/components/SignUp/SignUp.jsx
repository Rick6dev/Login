import React, { useState } from 'react'
import { MyRoutes } from '../../routes/routes'
import styles from './SignUp.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { InputControl } from '../InputControl/InputControl'
export const SignUp = () => {
    const [values, setvalues] = useState({
        name:"",email:"",pass:""
    });
    const [erroMsg, seterroMsg] = useState([])
    const [submitButtonDisabled, setsubmitButtonDisabled] = useState(false)
    const navigate =useNavigate();

    const registro=()=>{
        if(!values.name|| !values.email||!values.pass){
            seterroMsg("Todos los campos son Obligatorios");
            return;
        }
        seterroMsg("")
        setsubmitButtonDisabled(true);
        createUserWithEmailAndPassword(auth,values.email,values.pass).then(async(res)=>{
            setsubmitButtonDisabled(false);
            const user =res.user;

            await updateProfile(user,{
                displayName:values.name
            })
            navigate("/")
        }).catch((err)=>{
            setsubmitButtonDisabled(false)
            seterroMsg(err.message);
        })
    }
   const  handleName=(event)=>{
    console.log(event.target.value)
    setvalues((prevValues) => {
        return {
          ...prevValues,
          name: event.target.value,
        };
      });
      console(values)
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
          <h1 className={styles.heading}>Registro</h1>
          <InputControl
            label="Nombre"
            placeholder="Ingrese un nombre"
            onChange={(event) =>
              setvalues((prev) => ({ ...prev, name: event.target.value }))
            }
          />
          <InputControl
            label="Email"
            placeholder="Ingrese un correo"
            onChange={(event) =>
              setvalues((prev) => ({ ...prev, email: event.target.value }))
            }
          />
          <InputControl
            label="Contraseña"
            placeholder="Ingrese una contraseña" type="password"
            onChange={handlePassword}
          />
          <div className={styles.footer}>
            <b className={styles.error}>{erroMsg}</b>
            <button onClick={registro} disabled={submitButtonDisabled}>
              Guardar
            </button>
            <p>
              Si ya tienes una cuenta inicia sesión
              <span>
                <Link to="/login"> Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
  )
}
