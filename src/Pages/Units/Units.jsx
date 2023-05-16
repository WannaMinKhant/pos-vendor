import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FaTrash, FaEdit } from 'react-icons/fa'
import { TbPackages } from 'react-icons/tb'
import { IoMdInfinite,IoMdAddCircleOutline } from 'react-icons/io';
import { Table,Button,Label,TextInput,Tabs } from 'flowbite-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import JoinUnits from './JoinUnits';

const Units = () => {

    const units = [
        {
            id:1,
            name:'ခု'
        },
        {
            id:2,
            name:'လုံး'
        },
        {
            id:3,
            name:'ထုပ်'
        }
    ]

    const isAuth = localStorage.getItem("auth");
    const navigate = useNavigate();
    const unitMyan = useRef();

    const [unit, setUnits] = useState(units)
    useEffect(()=>{
       
         if(!isAuth){
          navigate("/login");
         }
      },[]);

      const AddUnit =()=>{
        showToastMessage()
      }

    const editUnit =(unit)=>{
        unitMyan.current.value = unit.name;
    }
    const showToastMessage = () => {
        toast.success('Successful Add Category!', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

  return (
    <div className="flex flex-col bg-white h-full">
        <Tabs.Group
            aria-label="Tabs with icons"
            style={"underline"}
            >
            <Tabs.Item
                title="Unit Add"
                icon={TbPackages}
            >
                <div className='bg-gray-400 w-fit rounded-lg shadow-lg px-8 py-2 mx-8 font-poppins font-semibold text-white'> Units </div>
                    {/* Category Add Form Section */}
                    <div className='flex flex-row w-full gap-4 px-8 py-4'>
                        <div className='border-2 w-full flex-col md:flex-row flex border-slate-500 rounded-md'>
                        <div className='w-full px-4 py-4 leading-normal'>
                            <div className="mb-2 block">
                            <Label
                                htmlFor="unit-name"
                                color="gray"
                                value="Unit Name"
                            />
                            </div>
                            <TextInput
                            id="unit-name"
                            placeholder="Unit Name"
                            required={true}
                            color="gray"
                            ref={unitMyan}
                            sizing="lg"
                            />
                        </div>  
                        <div className='flex flex-row justify-end p-4 md:mt-8'>
                            <Button
                            size="xl"
                            outline={true}
                            gradientDuoTone="tealToLime"
                            onClick={AddUnit}
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
                    {/* Unit List Section */}
                    <div className='text-white font-poppins font-semibold mx-8 my-2'>
                    <Table className='shadow-lg'>
                        <Table.Head className='border-gray-700 text-green-500 bg-gray-700'>
                            <Table.HeadCell className='border-gray-700 text-green-200 bg-gray-500'>
                            Unit ID
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
                            unit.map((unit)=>(
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={unit.id}>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {unit.id }
                                </Table.Cell>
                                
                                <Table.Cell>
                                { unit.name }
                                </Table.Cell>
                                <Table.Cell>
                                <div className='flex flex-row'>
                                    <div className='px-2 py-1 bg-green-300 text-green-500 rounded-md mx-4 cursor-pointer' onClick={()=>editUnit(unit)}>
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
                    </div>
            </Tabs.Item>
            <Tabs.Item
                active={true}
                title="Join Unit"
                icon={IoMdInfinite}
            >
                <JoinUnits/>
            </Tabs.Item>
            </Tabs.Group>
      
    </div>
  )
}

export default Units
