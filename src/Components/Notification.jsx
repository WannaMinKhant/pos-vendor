import React from 'react'
import { MdLogout,MdManageAccounts } from 'react-icons/md'
const Notification = () => {
  return (
    <div className='absolute right-48 top-12 w-52 overflow-y-auto scrollbar-hide max-h-48 rounded-lg bg-gray-500 z-30 font-semibold text-sm border-2 text-white shadow-xl'>
        <div className='flex flex-row py-2 px-2 hover:bg-slate-400 cursor-pointer rounded-md items-center'>
        <MdManageAccounts size={20}/> <span className='px-2'>Account</span>
        </div>
        <div className='flex flex-row py-2 px-2 hover:bg-slate-400 cursor-pointer rounded-md'>
        <MdLogout size={20}/> <span className='px-2'>Logout</span>
        </div>
        <div className='flex flex-row py-2 px-2 hover:bg-slate-400 cursor-pointer rounded-md items-center'>
        <MdManageAccounts size={20}/> <span className='px-2'>Account</span>
        </div>
        <div className='flex flex-row py-2 px-2 hover:bg-slate-400 cursor-pointer rounded-md'>
        <MdLogout size={20}/> <span className='px-2'>Logout</span>
        </div>
        <div className='flex flex-row py-2 px-2 hover:bg-slate-400 cursor-pointer rounded-md items-center'>
        <MdManageAccounts size={20}/> <span className='px-2'>Account</span>
        </div>
        <div className='flex flex-row py-2 px-2 hover:bg-slate-400 cursor-pointer rounded-md'>
        <MdLogout size={20}/> <span className='px-2'>Logout</span>
        </div>
        <div className='flex flex-row py-2 px-2 hover:bg-slate-400 cursor-pointer rounded-md items-center'>
        <MdManageAccounts size={20}/> <span className='px-2'>Account</span>
        </div>
        <div className='flex flex-row py-2 px-2 hover:bg-slate-400 cursor-pointer rounded-md'>
        <MdLogout size={20}/> <span className='px-2'>Logout</span>
        </div>
    </div>
  )
}

export default Notification
