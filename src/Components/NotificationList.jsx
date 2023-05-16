import React from 'react'
import NotificationItem from './NotificationItem'

const NotificationList = () => {

    const items = [
        {
            name: 'Blueberry Cake',
            qty:3,
            img:null
        },
        {
            name: 'Coca Cola',
            qty:3,
            img:null
        },
        {
            name: 'Happy Rose Tissue',
            qty:3,
            img:null
        },
        {
            name: 'Turbog Beer (Tin)',
            qty:3,
            img:null
        },
        {
            name: 'Myanmar Beer (Bottle)',
            qty:3,
            img:null
        },
        {
            name: 'Nan Gyi Thote',
            qty:2,
            img:'https://www.luckytreasuretravels.com/media/cache/ec/04/ec04c990ae0487d3b139158a97fb438b.jpg'
        },
        {
            name:'Cheese Hamburger',
            qty:5,
            img:'https://www.recipetineats.com/wp-content/uploads/2022/08/Double-cheeseburgers_0.jpg'
        }
    ]

  return (
    <div className='flex flex-col w-full max-h-96 font-poppins bg-slate-200 rounded-xl shadow-md p-6'>
        <div className='flex flex-row justify-between items-center'>
            <span className='py-4 font-semibold text-slate-600'>Notification</span>
            <span className='text-xs text-cyan-600 cursor-pointer hover:font-semibold'>View All</span>
        </div>
        <div className='overflow-y-auto scrollbar-hide px-2'>
            {
                items.map((item,index) => (
                    <NotificationItem data={item} key={index}/>
                ))
                
            }
        </div>
       
    </div>
  )
}

export default NotificationList
