import React from 'react'
import { MdLogout,MdManageAccounts } from 'react-icons/md'
const Language = () => {
  return (
    <div className='absolute right-24 top-12 w-32  rounded-lg bg-gray-500 z-30 font-semibold text-sm border-2 text-white shadow-xl'>
        <div className='flex flex-row py-2 px-2 hover:bg-slate-400 cursor-pointer rounded-md items-center'>
        <MdManageAccounts size={20}/> <span className='px-2'>Eng</span>
        </div>
        <div className='flex flex-row py-2 px-2 hover:bg-slate-400 cursor-pointer rounded-md'>
        <MdLogout size={20}/> <span className='px-2'>Myanmar</span>
        </div>
    </div>
  )
}

export default Language
