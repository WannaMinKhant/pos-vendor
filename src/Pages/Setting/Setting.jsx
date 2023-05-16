import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
const Setting = () => {

  const isAuth = localStorage.getItem("auth");
  const navigate = useNavigate();

  useEffect(()=>{
    
     if(!isAuth){
      navigate("/login");
     }
  },[])

  return (
    <div>
      Setting
    </div>
  )
}

export default Setting
