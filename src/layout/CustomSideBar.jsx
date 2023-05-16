import React,{ useState } from 'react'
import { FaBars,FaChartBar,FaStore } from 'react-icons/fa'
import { AiOutlineCodeSandbox } from 'react-icons/ai'
import { MdCategory,MdGroups,MdOutlineSettingsSuggest,MdOutlineChevronRight,MdOutlineKeyboardArrowDown} from 'react-icons/md'
import { TbPackages } from 'react-icons/tb'
import { GiMoneyStack } from 'react-icons/gi'
import { Link, useLocation } from 'react-router-dom'
import { HiChartPie,HiInbox, HiUser,HiShoppingBag,HiArrowSmRight,HiTable} from 'react-icons/hi'

const CustomSideBar = () => {

    const location = useLocation();
    const menulists = [
        {
            id:"1",
            "title": "Dashboard",
            "icon": FaChartBar,
            "link": "/dashboard",
            collapseState: true,
            child:null
        },
        {
            id:"2",
            "title": "Category",
            "icon": MdCategory,
            "link": "/category",
            collapseState: false,
            child:null
        },
        {
            id:"3",
            "title": "Product",
            "icon": AiOutlineCodeSandbox,
            "link": "/product",
            collapseState: false,
            child:[
                {
                    title: "Add ",
                    icon: GiMoneyStack,
                    link: "/product/add",
                },
                {
                    title: "Edit ",
                    icon: GiMoneyStack,
                    link: "/product/edit",
                },
                {
                    title: "List ",
                    icon: GiMoneyStack,
                    link: "/products",
                },
            ]
        },
        {
            id:"4",
            "title": "Shop",
            "icon": FaStore,
            "link": "/shop",
            collapseState: false,
            child:null
        },
        {
            id:"5",
            "title": "Supplier",
            "icon": MdGroups,
            "link": "/supplier",
            collapseState: false,
            child:null
        },
        {
            
            id:"6",
            "title": "Settings",
            "icon": MdOutlineSettingsSuggest,
            "link": "/setting",
            collapseState: false,
            child:null
        },
        {
            
            id:"7",
            "title": "Units",
            "icon": TbPackages,
            "link": "/unit",
            collapseState: false,
            child:null
        }
        ,
        {
            
            id:"8",
            "title": "Debits",
            "icon": GiMoneyStack,
            "link": "/debit",
            collapseState: false,
            child:[
                {
                    "title": "Supplier ",
                    "icon": GiMoneyStack,
                    "link": "/debit/supplier",
                },
                {
                    "title": "Remain ",
                    "icon": GiMoneyStack,
                    "link": "/debit/remain",
                },
            ]
        }
    ]

    const [menuList,setMenuList] = useState(menulists)
    const [show ,setShow] = useState(false);

    // Menu Collapse function
    const CollapseSet = (item)=>{
        if(item.child == null) return

        const changeMenu1 = menuList.map((menu)=> menu.id == item.id ? menu.collapseState ? menu={...menu,collapseState:!menu.collapseState} :  menu={...menu,collapseState:!menu.collapseState} : menu={...menu,collapseState:false})
 

        setMenuList([...changeMenu1])
    }


  return (
    <div className={ `${!show ? 'md:w-52' : 'w-16' } bg-green-400 flex flex-col min-h-screen font-poppins select-none duration-5000 z-30 text-sm`}>
      <ul>
        <li key={-1} className='px-4 py-4 bg-gray-700'>
            <FaBars size={20} color='white' className='cursor-pointer' onClick={()=> setShow(!show)}/>
        </li>
        {
            menuList.map((menu,key) =>(
                <>
                {
                  menu.child == null ?  <Link to={menu.link} state={show} key={menu.title}>
                        <li key={menu.id} className={`${location.pathname == menu.link ? 'bg-gray-600 text-green-400 font-semibold ' : '' }  px-4 py-4 text-center hover:font-semibold cursor-pointer hover:bg-gray-700 hover:text-green-400 flex flex-row justify-start items-center`} onClick={()=>CollapseSet(menu)}>
                        
                                <div>
                                    <menu.icon size={20}/>
                                </div>
                                <div className='flex flex-row justify-between items-center w-full'>
                                    <p className='overflow-hidden mx-8 transform-gpu'>{ menu.title}</p>
                                    { menu.child ? menu.collapseState ? <MdOutlineKeyboardArrowDown size={25}/> : <MdOutlineChevronRight size={25} /> : <div></div>}
                                </div>                        
                        </li>
                    </Link> : <li key={menu.id} className={`${location.pathname == menu.link ? 'bg-gray-600 text-green-400 font-semibold ' : '' }  px-4 py-4 text-center hover:font-semibold cursor-pointer hover:bg-gray-700 hover:text-green-400 flex flex-row justify-start items-center`} onClick={()=>CollapseSet(menu)}>
                        
                        <div>
                            <menu.icon size={20}/>
                        </div>
                        <div className='flex flex-row justify-between items-center w-full'>
                            <p className='overflow-hidden mx-8 transform-gpu'>{ menu.title}</p>
                            { menu.child ? menu.collapseState ? <MdOutlineKeyboardArrowDown size={25}/> : <MdOutlineChevronRight size={25} /> : <div></div>}
                        </div>                        
                </li>
                
                }
                    { menu.collapseState && menu.child != null && <ul>
                                {
                                    menu.child.map((child)=>(
                                        <Link to={child.link} key={menu.link}>
                                            <li className={`${location.pathname === child.link ? 'bg-gray-600 text-green-400 font-semibold ' : 'bg-gray-700 text-green-400 font-normal ' }  px-6 py-3 text-center hover:font-semibold cursor-pointer hover:bg-gray-800 hover:text-green-400 flex flex-row justify-start items-center`} key={child.title}>
                                                <div>
                                                    <menu.icon size={20}/>
                                                </div>
                                            
                                                <p className='overflow-hidden mx-8 transform-gpu'>{ child.title}</p>
                                            </li>
                                        </Link>
                                    ))
                                }
                            </ul>
                         }
                    
                    </>
            ))
        }
        
      </ul>
      {/* <SideBarCus/> */}
    </div>
  )
}

export default CustomSideBar
