import React from 'react'
import { Avatar } from 'flowbite-react'

const MessageItem = (props) => {
    const avaName = props.data.name[0]
  return (
    <div className="flex flex-row justify-between py-2 text-sm items-center relative">
    <div className='flex-row flex items-center'>
        <Avatar rounded={true} bordered={true} placeholderInitials={avaName} color={props.data.status?'success':'pink'} img={props.data.img}/>
        <div className='flex flex-col items-start'>
            <span className='text-green-600 px-4'>{props.data.name}</span>
            <span className='text-green-600 px-4'>{props.data.msg}</span>
        </div>
    </div>
    <span className='font-normal text-sm text-green-600'>{props.data.currentTime}</span>
    <div className={`${ props.data.status ? 'bg-green-600 ': 'bg-red-600 '} w-4 h-4 rounded-full absolute bottom-0 left-1`}>

    </div>
</div>
  )
}

export default MessageItem
