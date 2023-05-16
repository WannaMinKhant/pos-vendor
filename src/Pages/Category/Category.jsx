import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaEdit } from 'react-icons/fa'
import {IoMdAddCircleOutline} from 'react-icons/io'
import { Table,Button,Label } from 'flowbite-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGetCategoryQuery } from '../Services/Api/ApiSlice';
import SkeletonTable from '../../Components/SkeletonTable';

const Category = () => {

  const { data,isLoading,isSuccess,isError,refetch } = useGetCategoryQuery()

  const [cate,setCate] = useState();
  const categories = [
    {
      id:1,
      eng:'Drink',
      myan:'အချိုရည်'
    },
    {
      id:2,
      eng:'Snack',
      myan:'မုန့်'
    },
    {
      id:3,
      eng:'Electronic',
      myan:'လျှပ်စစ်ပစ္စည်း'
    },
  ]

  const isAuth = localStorage.getItem("auth");
 
  const navigate = useNavigate();
  const categoryEng = useRef(null);
  const categoryMyan = useRef(null);

  useEffect(()=>{
    refetch()
     if(!isAuth){
      navigate("/login");
     }
  },[]);

 
  const AddCategory =()=>{
    const category = {
      id:4,
      eng: categoryEng.current.value,
      myan: categoryMyan.current.value
    }
    setCate([...cate,category]);
    showToastMessage()
  }

  const editCategory = (category)=>{
    categoryEng.current.value = category.cateName;
    categoryMyan.current.value = category.created_at;
  }


  const showToastMessage = () => {
    toast.success('Successful Add Category!', {
        position: toast.POSITION.TOP_RIGHT
    });
};

  return (
    <div className="flex flex-col bg-white h-full">
      <div className='bg-gray-400 w-fit rounded-lg shadow-lg px-8 py-2 mx-8 font-poppins font-semibold text-white'> Category </div>
       {/* Category Add Form Section */}
       <div className='flex flex-row w-full gap-4 px-8 py-4'>
        <div className='border-2 w-full flex-col md:flex-row flex'>
         <div className='w-full px-4 py-4'>
            <div className="mb-2 block">
              <Label
                htmlFor="input-eng"
                color="gray"
                value="Category Name (Eng)"
              />
            </div>
            <input type="text" id="input-eng" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm leading-6 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required ref={categoryEng}/>
          </div>  
          <div className='w-full px-4 py-4'>
            <div className="mb-2 block">
              <Label
                htmlFor="input-myan"
                color="gray"
                value="Category Name (မြန်မာ)"
              />
            </div>
            <input type="text" id="input-myan" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm leading-6 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required ref={categoryMyan}/>
            
          </div>
          <div className='flex flex-row justify-end p-4 md:mt-8'>
            <Button
              outline={true}
              gradientDuoTone="tealToLime"
              onClick={AddCategory}
            >
              <IoMdAddCircleOutline className="mr-2 h-5 w-5" />
              Add
            </Button>
          </div>
        </div>
       </div>
       <ToastContainer/>
       <div>
       </div>
       {/* Category List Section */}
      { isLoading ?  <SkeletonTable/> : <div className='text-white font-poppins font-semibold mx-8 my-2'>
       <Table className='shadow-lg'>
          <Table.Head className='border-gray-700 text-green-500 bg-gray-700'>
            <Table.HeadCell className='border-gray-700 text-green-200 bg-gray-500'>
              Product ID
            </Table.HeadCell>
            <Table.HeadCell className='border-gray-700 text-green-200 bg-gray-500'>
              Name(Eng)
            </Table.HeadCell>
            <Table.HeadCell className='border-gray-700 text-green-200 bg-gray-500'>
              Name(Myan)
            </Table.HeadCell>
            <Table.HeadCell className='border-gray-700 text-green-200 bg-gray-500'>
              <span className="sr-only">
                Edit
              </span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">

           { 
              Object.keys(data?.data).map((key,i)=>(
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={data?.data[i].id}>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {data?.data[i].id }
                  </Table.Cell>
                  <Table.Cell>
                  { data?.data[i].cateName }
                  </Table.Cell>
                  <Table.Cell>
                  { data?.data[i].created_at }
                  </Table.Cell>
                  <Table.Cell>
                    <div className='flex flex-row'>
                      <div className='px-2 py-1 bg-green-300 text-green-500 rounded-md mx-4 cursor-pointer' onClick={()=>editCategory(data?.data[i])}>
                        <FaEdit/>
                      </div>
                      <div className='px-2 py-1 bg-red-300 text-red-500 rounded-md cursor-pointer'>
                        <FaTrash/>
                      </div>
                    </div>
                  </Table.Cell>
                </Table.Row>
            ))}

          </Table.Body>
        </Table>
       </div>}
    </div>
  )
}


export default Category
