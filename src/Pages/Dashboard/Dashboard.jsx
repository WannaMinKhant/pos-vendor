import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import DashboardCard from '../../Components/DashboardCard';
import {FaRegChartBar,FaTruckMoving} from 'react-icons/fa'
import {MdOutlinePersonOutline,MdSupervisorAccount} from 'react-icons/md'
import {BsShop,BsCashCoin,BsCashStack} from 'react-icons/bs'
import {AiOutlineCodeSandbox} from 'react-icons/ai';
import StackChart from '../../Charts/StackChart';
import OrderStatus from '../../Components/OrderStatus';
import MessageList from '../../Components/MessageList';
import NotificationList from '../../Components/NotificationList';

const Dashboard = () => {

  const isAuth = localStorage.getItem("auth");
  const navigate = useNavigate();

  useEffect(()=>{
    
     if(!isAuth){
      navigate("/login");
     }
  },[])

   const cards = [
    {
        name: 'Account',
        icon:<MdOutlinePersonOutline size={50}/>,
        count:'6',
        desp:'No Changes',
        color: 'bg-blue-300'
    },
    {
      name: 'Shop',
      icon:<BsShop size={50}/>,
      count:'5',
      desp:'Add One More',
      color: 'bg-cyan-300'
    },
    {
      name: 'Supplier',
      icon:<FaTruckMoving size={50}/>,
      count:'12',
      desp:'New Supplier',
      color: 'bg-green-300'
    },
    {
      name: 'Product',
      icon:<AiOutlineCodeSandbox size={50}/>,
      count:'224',
      desp:'New Arrival',
      color: 'bg-yellow-300'
    },
    {
      name: 'Manager',
      icon:<MdSupervisorAccount size={50}/>,
      count:'4',
      desp:'Remaing',
      color: 'bg-red-300'
    },
    {
      name: 'Income',
      icon:<BsCashStack size={50}/>,
      count:'33.4M',
      desp:'Increase',
      color: 'bg-fuchsia-300'
    },
    {
      name: 'CashOut',
      icon:<BsCashCoin size={50}/>,
      count:'44',
      desp:'Normal',
      color: 'bg-pink-300'
    },
    {
      name: 'Report',
      icon:<FaRegChartBar size={50}/>,
      count:'48',
      desp:'New Status',
      color: 'bg-lime-300'
    },
]

  return (
    <div className='flex flex-row w-full p-4'>
      <div className='flex flex-col w-full'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 w-full'>
          {
            cards.map((card,key)=>(
              <DashboardCard data={card} key={key}/>
            ))
          }
          </div>
          <div className='mt-4'>
            <StackChart/>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10 w-full mt-4 mb-12'>
            <OrderStatus/>
            <NotificationList/>
            <MessageList/>
          </div>
      </div>
    </div>
  )
}

export default Dashboard
