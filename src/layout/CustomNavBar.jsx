import React,{ useEffect } from 'react'
import { MdNotifications,MdMessage,MdMarkUnreadChatAlt,MdOutlineLanguage,MdAccountCircle,MdLogout,MdManageAccounts } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { Dropdown } from 'flowbite-react'

const CustomNavBar = () => {
    const navigate = useNavigate()
    const SignOut =()=>{
        localStorage.clear();
        navigate('/login')
    }
  
  return (
    <div className='flex flex-row w-full h-[52px] bg-gray-700 absolute top-0 left-0 z-0 shadow-xl justify-end items-center'>
        <div className="flex md:order-2 pr-4">
            <Dropdown
            arrowIcon={false}
            inline={true}
            label={ <MdMessage size={25} color='white'/>} className='overflow-y-auto scrollbar-hide max-h-48 '>
                <Dropdown.Item>
                    Dashboard
                </Dropdown.Item>
                <Dropdown.Item>
                    Settings
                </Dropdown.Item>
                <Dropdown.Item>
                    Earnings
                </Dropdown.Item>
                <Dropdown.Item>
                    Dashboard
                </Dropdown.Item>
                <Dropdown.Item>
                    Settings
                </Dropdown.Item>
                <Dropdown.Item>
                    Earnings
                </Dropdown.Item>
                <Dropdown.Item>
                    Dashboard
                </Dropdown.Item>
                <Dropdown.Item>
                    Settings
                </Dropdown.Item>
                <Dropdown.Item>
                    Earnings
                </Dropdown.Item>
                <Dropdown.Item>
                    Dashboard
                </Dropdown.Item>
                <Dropdown.Item>
                    Settings
                </Dropdown.Item>
                <Dropdown.Item>
                    EarningsEarningsEarningsEarningsEarningsEarnings
                </Dropdown.Item>
                <Dropdown.Item>
                    Dashboard
                </Dropdown.Item>
                <Dropdown.Item>
                    Settings
                </Dropdown.Item>
                <Dropdown.Item>
                    Earnings
                </Dropdown.Item> <Dropdown.Item>
                    Dashboard
                </Dropdown.Item>
                <Dropdown.Item>
                    Settings
                </Dropdown.Item>
                <Dropdown.Item>
                    Earnings
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                    Sign out
                </Dropdown.Item>
                </Dropdown>
        </div>
        <div className="flex md:order-2 pr-4">
            <Dropdown
            arrowIcon={false}
            inline={true}
            label={ <MdNotifications size={25} color='white'/>} className='overflow-y-auto scrollbar-hide max-h-48'>
                <Dropdown.Item>
                    Dashboard
                </Dropdown.Item>
                <Dropdown.Item>
                    Settings
                </Dropdown.Item>
                <Dropdown.Item>
                    Earnings
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                    Sign out
                </Dropdown.Item>
                </Dropdown>
        </div>  
        <div className="flex md:order-2 pr-4">
            <Dropdown
            arrowIcon={false}
            inline={true}
            label={ <MdOutlineLanguage size={25} color='white'/>}
            >
                <Dropdown.Header>
                    <span className="block text-sm font-semibold">
                    Language
                    </span>
                </Dropdown.Header>
                <Dropdown.Item>
                   Myan
                </Dropdown.Item>
                <Dropdown.Item>
                   Eng
                </Dropdown.Item>
            </Dropdown>
        </div>  
       <div className="flex md:order-2 pr-4">
            <Dropdown
            arrowIcon={false}
            inline={true}
            label={ <MdAccountCircle size={25} color='white'/>}
            >
                <Dropdown.Header>
                    <span className="block text-sm">
                    Bonnie Green
                    </span>
                    <span className="block truncate text-sm font-medium">
                    name@flowbite.com
                    </span>
                </Dropdown.Header>
                <Dropdown.Item>
                   Profile
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={SignOut}>
                    Sign out
                </Dropdown.Item>
                </Dropdown>
        </div>       
    </div>
  )
}

export default CustomNavBar
