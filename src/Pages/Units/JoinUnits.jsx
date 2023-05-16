import React,{useState, useRef} from 'react'
import Select from 'react-select'
import { Button,Table } from 'flowbite-react';
import { MdSave,MdEdit,MdRecycling } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JoinUnits = () => {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];

      const data = [
        {
            id: 1,
            category:'Drink',
            fromUnit: 'ဖာ',
            toUnit: 'လုံး',
            unitNumber: 12
        },
        {
            id: 2,
            category:'Snack',
            fromUnit: 'ဖာ',
            toUnit: 'ခု',
            unitNumber: 10
        },
        {
            id: 3,
            category:'Cold Drink',
            fromUnit: 'ကတ်',
            toUnit: 'ဘူး',
            unitNumber: 12
        },
      ]

      const [unitJoin,setUnitJoin] = useState(data);

      const [selectedOption, setSelectedOption] = useState(null);
      const coefficent = useRef();

      const editUnitJoin = (unit)=>{
        showToastMessage();
      }

      const showToastMessage = () => {
        toast.success('Successful Add Category!', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

  return (
    <div className='flex md:flex-row w-full flex-col'>
        <div className='flex flex-col w-full items-center'>
            <div className='flex md:flex-row w-full flex-col p-4 border-2 rounded-md border-slate-600'>
                        <Select
                                value={selectedOption}
                                onChange={setSelectedOption}
                                options={options}
                                className='flex-1 p-2'
                            />
                        <Select
                            value={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                            className='flex-1 p-2'
                        />
                        <div className='p-2 flex-1'>
                            <input type="text" id="input-eng" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm leading-6 rounded-md focus:ring-green-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required ref={coefficent}/>
                        </div>
                        <div className='md:mt-2.5 px-2 flex flex-row justify-end'>
                            <Button
                            outline={true}
                            gradientDuoTone="greenToBlue"
                            >
                            Save
                            <MdSave size={20} className='mx-2'/>
                            </Button>
                        </div>
                </div>
                {/* Unit List Section */}
                <div className='text-white font-poppins font-semibold  my-2 w-full overflow-x-auto'>
                    <Table className='shadow-lg'>
                        <Table.Head className='border-gray-700 text-green-500 bg-gray-700'>
                            <Table.HeadCell className='border-gray-700 text-green-200 bg-gray-500'>
                            Unit ID
                            </Table.HeadCell>
                            
                            <Table.HeadCell className='border-gray-700 text-green-200 bg-gray-500'>
                            Name(Myan)
                            </Table.HeadCell>
                            <Table.HeadCell className='border-gray-700 text-green-200 bg-gray-500'>
                            Category
                            </Table.HeadCell>
                            <Table.HeadCell className='border-gray-700 text-green-200 bg-gray-500'>
                            From Unit
                            </Table.HeadCell>
                            <Table.HeadCell className='border-gray-700 text-green-200 bg-gray-500'>
                            To Unit
                            </Table.HeadCell>
                            <Table.HeadCell className='border-gray-700 text-green-200 bg-gray-500'>
                            Unit Number
                            </Table.HeadCell>
                            <Table.HeadCell className='border-gray-700 text-green-200 bg-gray-500'>
                            <span className="sr-only">
                                Edit
                            </span>
                            </Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">

                        { 
                            unitJoin.map((unit)=>(
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={unit.id}>
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {unit.id }
                                </Table.Cell>
                                <Table.Cell>
                                { unit.category }
                                </Table.Cell>
                                <Table.Cell>
                                { unit.fromUnit }
                                </Table.Cell>
                                <Table.Cell>
                                { unit.toUnit }
                                </Table.Cell>
                                <Table.Cell>
                                { unit.unitNumber }
                                </Table.Cell>
                                <Table.Cell>
                                <div className='flex flex-row'>
                                    <div className='px-2 py-1 bg-green-300 text-green-500 rounded-md mx-4 cursor-pointer' onClick={()=>editUnitJoin(unit)}>
                                    <MdEdit/>
                                    </div>
                                    <div className='px-2 py-1 bg-red-300 text-red-500 rounded-md cursor-pointer'>
                                    <MdRecycling/>
                                    </div>
                                    
                                </div>
                                
                                </Table.Cell>
                            </Table.Row>
                            ))}

                        </Table.Body>
                    </Table>
                </div>
                <ToastContainer/>
        </div>
       
       
    </div>
  )
}

export default JoinUnits
