import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Shop = () => {

  const isAuth = localStorage.getItem("auth");
  const navigate = useNavigate();

  useEffect(()=>{
    
     if(!isAuth){
      navigate("/login");
     }
  },[])
  
  return (
    <div>
        Shop
    </div>
  )
}

export default Shop
