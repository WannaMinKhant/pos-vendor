import React from 'react'
import CustomSideBar from './CustomSideBar'
import CustomNavBar from './CustomNavBar'
import { useLocation } from 'react-router-dom'
import CustomFooterBar from './CustomFooterBar'

const Layout = ({children}) => {

  const loc = useLocation();

  return (
    <>
     {
      !loc.pathname.includes("/login") ?
      <div className='flex flex-row w-full h-screen overflow-hidden'>
        <div className='flex flex-col bg-amber-500 dark:bg-slate-100'>
          <CustomSideBar/>
        </div>
        <div className='flex-1 flex-row w-full bg-white mt-16 overflow-y-auto'>
              {children}
        </div>
        <CustomNavBar/>
        <CustomFooterBar/>
      </div> :
      
      <div>
        {children}
      </div>}
    </>
  
  )
}

export default Layout
