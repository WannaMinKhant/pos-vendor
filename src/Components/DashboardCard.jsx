import React from 'react'

const DashboardCard = (props) => {
    
  return (
    <div className={`flex flex-row w-full ${props.data.color} p-2 shadow-xl rounded-lg font-poppins select-none justify-between`}>
        <div className='flex flex-col px-6 md:py-7 py-2'>
            <div className='text-sm'>{props.data.name}</div>
            <span className='font-bold text-slate-800 font-poppins text-2xl py-2'>{props.data.count}</span>
            <div className='text-xs'>{props.data.desp}</div>
        </div>
        <div className='flex flex-col py-4 px-2 text-white'>
            { props.data.icon} 
        </div>
        
    </div>
  )
}

export default DashboardCard
