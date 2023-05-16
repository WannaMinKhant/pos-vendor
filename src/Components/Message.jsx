import React from 'react'

const Message = () => {
  return (
    <div className='absolute right-36 top-12 w-52 overflow-y-auto scrollbar-hide max-h-48 rounded-lg bg-gray-500 z-30 font-semibold text-sm border-2 text-white shadow-xl'>
        <div className='flex flex-row py-2 px-2 hover:bg-slate-400 cursor-pointer rounded-md items-center'>
        <span className='px-2'>Account</span>
        </div>
        <div className='flex flex-row py-2 px-2 hover:bg-slate-400 cursor-pointer rounded-md'>
        <span className='px-2'>Logout</span>
        </div>
    </div>
  )
}

export default Message
