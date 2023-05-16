import React, { useEffect,useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();
    const isAuth = localStorage.getItem("auth");
    const nameRef = useRef();
    const passwordRef = useRef();

    const goDash = ()=> {
        if(nameRef.current.value === "admin" && passwordRef.current.value === "123"){
            localStorage.setItem("auth",true)
            navigate("/dashboard");
        }
    }

    useEffect(()=>{
        if(isAuth){
            navigate("/dashboard");
           }
    },[])

  return (
    <div className='flex flex-row w-full h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% items-center justify-center'>
     <div className='flex flex-col px-6 py-8 bg-violet-300 rounded-xl text-center'>
        <p>Login Here</p>
        <input type='text' name='login_name' className='px-2 py-1 m-2' ref={nameRef}/>
        <input type='password' name='pwd' className='px-2 py-1 m-2' ref={passwordRef}/>
        <button className='px-2 py-1 m-2 bg-green-500 rounded-lg' onClick={goDash}>login</button>
     </div>
    </div>
  )
}

export default Login
