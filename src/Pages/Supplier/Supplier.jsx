import React,{useEffect,useState,useRef} from 'react'
import { useNavigate } from 'react-router-dom';
import { Table,Label,Button } from 'flowbite-react';
import { FaEdit, FaTrash } from 'react-icons/fa'
import {IoMdAddCircleOutline} from 'react-icons/io'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Supplier = () => {

  const suppliers = [
    {
      id:1,
      name:'Drink',
      status: 1
    },
    {
      id:2,
      name:'Drink',
      status: 1
    },
    {
      id:3,
      name:'Drink',
      status: 1
    },
  ]


  const isAuth = localStorage.getItem("auth");
  const [supply,setSupply] = useState(suppliers);
  const navigate = useNavigate();
  const supplierName = useRef(null);

  useEffect(()=>{
    
     if(!isAuth){
      navigate("/login");
     }
  },[]);

 
  const Addsupp =()=>{
    const supplier = {
      id:4,
      name:'Drink',
      status: 1
    }
    setSupply([...supply,supplier]);
    showToastMessage()
  }

  const editsupp = (supp)=>{
    supplierName.current.value = supp.eng;
  }


  const showToastMessage = () => {
    toast.success('Successful Add supp!', {
        position: toast.POSITION.TOP_RIGHT
    });
};

  return (
    <div className="flex flex-col bg-white h-full">
      <div className='bg-gray-400 w-fit rounded-lg shadow-lg px-8 py-2 mx-8 font-poppins font-semibold text-white'> Supplier </div>
       {/* supp Add Form Section */}
       <div className='flex flex-row w-full gap-4 px-8 py-4'>
        <div className='border-2 w-full flex-col md:flex-row flex rounded-lg shadow-lg shadow-purple-200'>
         <div className='w-full px-4 py-4'>
            <div className="mb-2 block">
              <Label
                htmlFor="input-eng"
                color="gray"
                value="Supplier Name (Eng)"
              />
            </div>
            <input type="text" id="input-eng" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm leading-6 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required ref={supplierName}/>
          </div>  
          
          <div className='flex flex-row justify-end p-4 md:mt-8'>
            <Button
              outline={true}
              gradientDuoTone="tealToLime"
              onClick={Addsupp}
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
       {/* supp List Section */}
       <div className='text-white font-poppins font-semibold mx-8 my-2'>
       <Table className='shadow-lg'>
          <Table.Head className='border-gray-700 text-green-500 bg-gray-700'>
            <Table.HeadCell className='border-gray-700 text-green-200 bg-gray-500'>
              Product ID
            </Table.HeadCell>
            <Table.HeadCell className='border-gray-700 text-green-200 bg-gray-500'>
              Name
            </Table.HeadCell>
            <Table.HeadCell className='border-gray-700 text-green-200 bg-gray-500'>
              Status
            </Table.HeadCell>
            <Table.HeadCell className='border-gray-700 text-green-200 bg-gray-500'>
              <span className="sr-only">
                Edit
              </span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">

           { 
            suppliers.map((supp)=>(
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={supp.id}>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                 {supp.id }
                </Table.Cell>
                <Table.Cell>
                 { supp.name }
                </Table.Cell>
                <Table.Cell>
                { supp.status }
                </Table.Cell>
                <Table.Cell>
                  <div className='flex flex-row'>
                    <div className='px-2 py-1 bg-green-300 text-green-500 rounded-md mx-4 cursor-pointer' onClick={()=>editsupp(supp)}>
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
    </div>
  )
}

export default Supplier
