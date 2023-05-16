import { Label,FileInput } from 'flowbite-react';
import React, { useState,useRef } from 'react'
import Select from 'react-select'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import {BsCalendar2Date,BsCalendarDateFill } from 'react-icons/bs'

const EditProduct = () => {
  const suppliers = [
    { value: 'remax', label: 'Remax' },
    { value: 'jbl', label: 'JBL' },
    { value: 'vjune', label: 'V-June' },
    { value: 'wpg', label: 'WPG' },
  ];

  const categories = [
    { value: 'drink', label: 'Drink' },
    { value: 'snack', label: 'Snack' },
    { value: 'electronic', label: 'Electronic' },
  ];

  const units = [
    {
        value:1,
        label:'ခု'
    },
    {
        value:2,
        label:'လုံး'
    },
    {
        value:3,
        label:'ထုပ်'
    }
]

  const [category, setCategories] = useState()
  const [supplier, setSupplier] = useState()
  const [preview, setPreview] = useState(null);
  const [expierDate,setExpierDate] = useState(new Date())
  const [alertDate,setAlertDate] = useState(new Date())
  const [unit, setUnit] = useState()
  const itemName = useRef()
  const itemQty = useRef()
  const itemBuyPrice = useRef(0)
  const itemAlertQty = useRef(0)

const showToastEdit = ()=>{
    toast.success("successfully",{
        position: toast.POSITION.BOTTOM_RIGHT
    })
}

const PreviewUpload = (e)=>{
    const file = e.target.files[0]

    setPreview(URL.createObjectURL(file))
}
return (
<div className='flex flex-col w-full items-center p-2'>
        <div className='flex flex-row w-full pb-4'>
            <p className='px-4 py-2 rounded-md bg-slate-800 text-white'>Edit Product</p>
        </div>
    <div className='p-4 border-2 border-slate-500 w-full rounded-md font-poppins grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/** Supplier */}
        <div className='mb-1 block sm:order-1'>
        <Label
            htmlFor="supplier-name"
            color="gray"
            value="Select Supplier"
            />
            <Select 
                id='supplier-name'
                value={supplier}
                onChange={setSupplier}
                options={suppliers}
                className='flex-1 px-2'
             />
        </div>
         {/** Category */}
         <div className='mb-1 block sm:order-2'>
            <Label
                htmlFor="category-name"
                color="gray"
                value="Select Category"
                />
            <Select 
                id='category-name'
                value={category}
                onChange={setCategories}
                options={categories}
                className='flex-1 px-2'
            />
        </div>
        {/** item_name */}
        <div className='px-2 block mb-2 sm:order-3'>
            <Label
                htmlFor="item-name"
                color="gray"
                value="Enter Item Name"
                />
            <input type="text" id="item-name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm leading-6 rounded-md focus:ring-green-500 focus:border-blue-500 block w-full p-2.5" placeholder="Item Name" required ref={itemName}/>
        </div> 
        {/** item_qty */}
        <div className='px-2 block mb-2 sm:order-4'>
            <Label
                htmlFor="item-qty"
                color="gray"
                value="Enter Item Quantity"
                />
            <input type="number" id="item-qty" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm leading-6 rounded-md focus:ring-green-500 focus:border-blue-500 block w-full p-2.5" placeholder="Item Quantity" required ref={itemQty}/>
        </div>
        {/** choice Unit */}
        <div className='mb-1 block sm:order-5'>
            <Label
                htmlFor="unit-name"
                color="gray"
                value="Select Unit"
                />
            <Select 
                id='unit-name'
                value={unit}
                onChange={setUnit}
                options={units}
                className='flex-1 px-2'
            />
        </div>
        {/**barcode */}
        <div className='px-2 block mb-2 sm:order-6'>
            <Label
                htmlFor="item-barcode"
                color="gray"
                value="Enter Item Barcode"
                />
            <input type="text" id="item-barcode" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm leading-6 rounded-md focus:ring-green-500 focus:border-blue-500 block w-full p-2.5" placeholder="Item BarCode" ref={itemQty}/>
        </div>
        {/* set ExpireDate */}
        <div className='px-2 block mb-2 sm:order-7'>
            <Label
                htmlFor="item-barcode"
                color="gray"
                value="Choose Expire Date"
                />
            <div className='flex flex-row relative'>
                <BsCalendar2Date size={40} className='p-1 -mt-1'/>
                <DatePicker
                    showIcon
                    id='item-expier'
                    selected={expierDate}
                    onChange={(date) => setExpierDate(date)}
                    isClearable
                    className='rounded-md w-full'
                />
            </div>
        </div>
        {/** item_buy-price */}
        <div className='px-2 block mb-2 sm:order-9'>
            <Label
                htmlFor="item-qty"
                color="gray"
                value="Enter Buying Price"
                />
            <input type="number" id="item-qty" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm leading-6 rounded-md focus:ring-green-500 focus:border-blue-500 block w-full p-2.5" placeholder="Item Buying Price" required ref={itemBuyPrice}/>
        </div>
        {/** item_alert_qty */}
        <div className='px-2 block mb-2 sm:order-8'>
            <Label
                htmlFor="item-alert-qty"
                color="gray"
                value="Enter Item Alert Quantity"
                />
            <input type="number" id="item-alert_qty" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm leading-6 rounded-md focus:ring-green-500 focus:border-blue-500 block w-full p-2.5" placeholder="Item alert Quantiy" ref={itemAlertQty}/>
        </div>
            {/** alert Date */}
        <div className='px-2 block mb-2 sm:order-10'>
            <Label
                htmlFor="item-barcode"
                color="gray"
                value="Choose Alert Date"
                />
            <div className='flex flex-row relative'>
                <BsCalendarDateFill size={40} className='p-1 -mt-1'/>
                <DatePicker
                    showIcon
                    id='item-expier'
                    selected={alertDate}
                    onChange={(date) => setAlertDate(date)}
                    isClearable
                    className='rounded-md w-full'
                />
            </div>
        </div>
                    {/** item_sell-price1 */}
        <div className='px-2 block mb-2 sm:order-11'>
            <Label
                htmlFor="item-sell-price1"
                color="gray"
                value="Enter Sell Price"
                />
            <input type="number" id="item-sell-price1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm leading-6 rounded-md focus:ring-green-500 focus:border-blue-500 block w-full p-2.5" placeholder="Item Sell price" required ref={itemBuyPrice}/>
        </div>
                    {/** item-sell-price2 */}
        <div className='px-2 block mb-2 sm:order-12'>
            <Label
                htmlFor="item-sell-price2"
                color="gray"
                value="Enter Sell Price"
                />
            <input type="number" id="item-sell-price2" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm leading-6 rounded-md focus:ring-green-500 focus:border-blue-500 block w-full p-2.5" placeholder="Item Sell Price" required ref={itemBuyPrice}/>
        </div>
                    {/** item_buy-price3 */}
        <div className='px-2 block mb-2 sm:order-[13]'>
            <Label
                htmlFor="item-sell-price3"
                color="gray"
                value="Enter Sell Price"
                />
            <input type="number" id="item-sell-price3" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm leading-6 rounded-md focus:ring-green-500 focus:border-blue-500 block w-full p-2.5" placeholder="Item Sell Price" required ref={itemBuyPrice}/>
        </div>
        {/* file Upload */}
        <div className='px-2 block mb-2 sm:order-last'>
            <Label
                htmlFor="item-sell-price3"
                color="gray"
                value="Choose Image"
                />
            <FileInput accept='image/*' onChange={e=>PreviewUpload(e)}/>
        </div>
        {/* Upload Image */}
        <div className='px-2 block mb-2 sm:order-last'>
        <Label
                htmlFor="upload-img"
                color="gray"
                value="Item Image"
                />
           <div className='w-full h-80 border-4 border-dotted rounded-lg text-center' id='upload-img'>
            {
                preview === null ?
                <div className='flex flex-row w-full h-full justify-center items-center font-semibold'>
                Upload Image
                </div> : <img src={preview} alt='item' className='object-fill w-full h-full'/>
            }
           </div>
        </div>
    </div>
    <div className='w-fit flex flex-row bg-green-400 text-white rounded-xl justify-center px-4 py-2 my-4 cursor-pointer select-none' onClick={showToastEdit}>
        Save Product
    </div>     
    <ToastContainer/>
  <div className='h-44'>

  </div>
</div>
)
}

export default EditProduct
