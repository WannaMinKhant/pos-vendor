import React from 'react'

const CustomFooterBar = () => {
    const currentYear = new Date().getFullYear();
  return (
    <div className='text-white font-poppins flex flex-row w-full h-[36px] bg-gray-700 absolute bottom-0 left-0 z-40 shadow-xl justify-center text-sm items-center'>
      Copyright &copy; { currentYear } Fruitysense Development Team
    </div>
  )
}

export default CustomFooterBar
