import React from 'react'
import MessageItem from './MessageItem';

const MessageList = () => {

    const items = [
    {
        name:'BOC',
        msg:'I need new item for Beer',
        status: false,
        currentTime: '9:00 PM',
    },
    {
        name:'Wholesale',
        msg:'I need new item for Coca ',
        status: true,
        currentTime: '9:00 PM',
    },
    {
        name:'Wholesale',
        msg:'I need new item for Coca ',
        status: true,
        currentTime: '9:00 PM',
    },
    {
        name:'Wholesale',
        msg:'I need new item for Coca ',
        status: true,
        currentTime: '9:00 PM',
    },
];

  return (
    <div className='flex flex-col w-full max-h-96 font-poppins bg-slate-200 rounded-xl shadow-md p-6'>
        <div className='flex flex-row justify-between items-center'>
            <span className='py-4 font-semibold text-slate-600'>Messages</span>
            <span className='text-xs text-cyan-600 cursor-pointer hover:font-semibold'>View All</span>
        </div>
        <div className='overflow-y-auto scrollbar-hide px-2'>
            {
                items.map((item,index) => (
                    <MessageItem data={item} key={index}/>
                ))
                
            }
        </div>
       
    </div>
  )
}

export default MessageList
