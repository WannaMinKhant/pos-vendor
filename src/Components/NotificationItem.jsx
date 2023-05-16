import React from 'react'
import { Avatar } from 'flowbite-react'

const NotificationItem = (props) => {
    const AvaName = props.data.name[0];
  return (
    <div className="flex flex-row justify-between py-2 text-sm items-center">
        <div className='flex-row flex items-center'>
            <Avatar rounded={true} bordered={true} placeholderInitials={AvaName} color='success' img={props.data.img}/>
            <span className='text-green-600 px-4'>{props.data.name}</span>
        </div>
        <span className='font-normal text-sm text-green-600'>{props.data.qty}</span>
    </div>
  )
}

export default NotificationItem
