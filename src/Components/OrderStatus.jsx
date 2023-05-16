import React from 'react'

import { MdOutlineCancel,MdOutlineWarningAmber,MdOutlineCheckCircle } from 'react-icons/md'

const OrderStatus = () => {

  return (
    <div className='flex flex-col w-full max-h-96 font-poppins bg-slate-200 rounded-xl shadow-md p-6'>
    <span className='py-4 font-semibold text-slate-600'>Orders Status</span>
      <div className="flex flex-row justify-between py-4">
        <div className='flex-row flex items-center'>
            <MdOutlineCheckCircle className='text-green-500' size={25}/>
            <span className='text-green-600 px-4'>Complete</span>
        </div>
        
        <span className='font-normal text-xl text-green-600'>70</span>
      </div>
      <div className="flex flex-row justify-between py-4">
        <div className='flex-row flex items-center'>
            <MdOutlineWarningAmber className='text-amber-500' size={25}/>
            <span className='text-amber-600 px-4'>Pending</span>
        </div>
        <span className='font-normal text-xl text-amber-600'>70</span>
      </div>
      <div className="flex flex-row justify-between py-4">
        <div className='flex-row flex items-center'>
            <MdOutlineCancel className='text-rose-500' size={25}/>
            <span className='text-rose-600 px-4'>Cancel</span>
        </div>
        <span className='text-xl font-normal text-red-600'>70</span>
      </div>

      <div className='w-full h-[1px] bg-zinc-300'></div>

      <div className='flex flex-row justify-evenly mt-4'> {/* for total status*/}
        <div className='flex flex-col items-center text-sm text-green-500'>
            Complete
            <span className='py-4 text-xl font-semibold'>70</span>
        </div>
        <div className='flex flex-col items-center text-sm text-amber-500'>
            Pending
            <span className='py-4 text-xl font-semibold'>70</span>
        </div>
        <div className='flex flex-col items-center text-sm text-red-500'>
            Cancel
            <span className='py-4 text-xl font-semibold'>70</span>
        </div>
       
      </div>
    </div>
  )
}

export default OrderStatus
