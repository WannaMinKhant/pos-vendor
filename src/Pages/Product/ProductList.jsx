import React,{ useState } from 'react'
import { Table } from 'flowbite-react'
import { FaEdit,FaTrash } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductList = () => {

    const productList = [
        {
            id: 1,
            supplier:"Remax",
            category: 'Electronics',
            item_name: 'Mx 312 Speaker',
            item_qty:5,
            unit:'လုံး',
            barcode:'1238834',
            expireDate: '12/4/2050',
            alertDate: '12/4/2050',
            buy_price: '230000',
            sell_price1: '235000',
            sell_price2: '265000',
            sell_price3: '275000',
            alertQty:'1',
            img:'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwd026df69/JBL_Partybox_Encore_Hero_2xMics_1605x1605px.png?sw=1605&sh=1605'

        },
        {
            id: 1,
            supplier:"Remax",
            category: 'Electronics',
            item_name: 'Mx 312 Speaker',
            item_qty:5,
            unit:'လုံး',
            barcode:'1238834',
            expireDate: '12/4/2050',
            alertDate: '12/4/2050',
            buy_price: '230000',
            sell_price1: '235000',
            sell_price2: '265000',
            sell_price3: '275000',
            alertQty:'1',
            img:'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwd026df69/JBL_Partybox_Encore_Hero_2xMics_1605x1605px.png?sw=1605&sh=1605'

        },
        {
            id: 1,
            supplier:"Remax",
            category: 'Electronics',
            item_name: 'Mx 312 Speaker',
            item_qty:5,
            unit:'လုံး',
            barcode:'1238834',
            expireDate: '12/4/2050',
            alertDate: '12/4/2050',
            buy_price: '230000',
            sell_price1: '235000',
            sell_price2: '265000',
            sell_price3: '275000',
            alertQty:'1',
            img:'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwd026df69/JBL_Partybox_Encore_Hero_2xMics_1605x1605px.png?sw=1605&sh=1605'

        },
        {
            id: 1,
            supplier:"Remax",
            category: 'Electronics',
            item_name: 'Mx 312 Speaker',
            item_qty:5,
            unit:'လုံး',
            barcode:'1238834',
            expireDate: '12/4/2050',
            alertDate: '12/4/2050',
            buy_price: '230000',
            sell_price1: '235000',
            sell_price2: '265000',
            sell_price3: '275000',
            alertQty:'1',
            img:'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwd026df69/JBL_Partybox_Encore_Hero_2xMics_1605x1605px.png?sw=1605&sh=1605'

        },
        {
            id: 1,
            supplier:"Remax",
            category: 'Electronics',
            item_name: 'Mx 312 Speaker',
            item_qty:5,
            unit:'လုံး',
            barcode:'1238834',
            expireDate: '12/4/2050',
            alertDate: '12/4/2050',
            buy_price: '230000',
            sell_price1: '235000',
            sell_price2: '265000',
            sell_price3: '275000',
            alertQty:'1',
            img:'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwd026df69/JBL_Partybox_Encore_Hero_2xMics_1605x1605px.png?sw=1605&sh=1605'

        },
        {
            id: 1,
            supplier:"Remax",
            category: 'Electronics',
            item_name: 'Mx 312 Speaker',
            item_qty:5,
            unit:'လုံး',
            barcode:'1238834',
            expireDate: '12/4/2050',
            alertDate: '12/4/2050',
            buy_price: '230000',
            sell_price1: '235000',
            sell_price2: '265000',
            sell_price3: '275000',
            alertQty:'1',
            img:'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwd026df69/JBL_Partybox_Encore_Hero_2xMics_1605x1605px.png?sw=1605&sh=1605'

        },
        {
            id: 1,
            supplier:"Remax",
            category: 'Electronics',
            item_name: 'Mx 312 Speaker',
            item_qty:5,
            unit:'လုံး',
            barcode:'1238834',
            expireDate: '12/4/2050',
            alertDate: '12/4/2050',
            buy_price: '230000',
            sell_price1: '235000',
            sell_price2: '265000',
            sell_price3: '275000',
            alertQty:'1',
            img:'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwd026df69/JBL_Partybox_Encore_Hero_2xMics_1605x1605px.png?sw=1605&sh=1605'

        },
        {
            id: 1,
            supplier:"Remax",
            category: 'Electronics',
            item_name: 'Mx 312 Speaker',
            item_qty:5,
            unit:'လုံး',
            barcode:'1238834',
            expireDate: '12/4/2050',
            alertDate: '12/4/2050',
            buy_price: '230000',
            sell_price1: '235000',
            sell_price2: '265000',
            sell_price3: '275000',
            alertQty:'1',
            img:'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwd026df69/JBL_Partybox_Encore_Hero_2xMics_1605x1605px.png?sw=1605&sh=1605'

        },
        {
            id: 1,
            supplier:"Remax",
            category: 'Electronics',
            item_name: 'Mx 312 Speaker',
            item_qty:5,
            unit:'လုံး',
            barcode:'1238834',
            expireDate: '12/4/2050',
            alertDate: '12/4/2050',
            buy_price: '230000',
            sell_price1: '235000',
            sell_price2: '265000',
            sell_price3: '275000',
            alertQty:'1',
            img:'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwd026df69/JBL_Partybox_Encore_Hero_2xMics_1605x1605px.png?sw=1605&sh=1605'

        },
        {
            id: 1,
            supplier:"Remax",
            category: 'Electronics',
            item_name: 'Mx 312 Speaker',
            item_qty:5,
            unit:'လုံး',
            barcode:'1238834',
            expireDate: '12/4/2050',
            alertDate: '12/4/2050',
            buy_price: '230000',
            sell_price1: '235000',
            sell_price2: '265000',
            sell_price3: '275000',
            alertQty:'1',
            img:'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwd026df69/JBL_Partybox_Encore_Hero_2xMics_1605x1605px.png?sw=1605&sh=1605'

        },
        {
            id: 1,
            supplier:"Remax",
            category: 'Electronics',
            item_name: 'Mx 312 Speaker',
            item_qty:5,
            unit:'လုံး',
            barcode:'1238834',
            expireDate: '12/4/2050',
            alertDate: '12/4/2050',
            buy_price: '230000',
            sell_price1: '235000',
            sell_price2: '265000',
            sell_price3: '275000',
            alertQty:'1',
            img:'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwd026df69/JBL_Partybox_Encore_Hero_2xMics_1605x1605px.png?sw=1605&sh=1605'

        },
        {
            id: 1,
            supplier:"Remax",
            category: 'Electronics',
            item_name: 'Mx 312 Speaker',
            item_qty:5,
            unit:'လုံး',
            barcode:'1238834',
            expireDate: '12/4/2050',
            alertDate: '12/4/2050',
            buy_price: '230000',
            sell_price1: '235000',
            sell_price2: '265000',
            sell_price3: '275000',
            alertQty:'1',
            img:'https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwd026df69/JBL_Partybox_Encore_Hero_2xMics_1605x1605px.png?sw=1605&sh=1605'

        },
    ]

    const [products, setProducts] = useState(productList)

    const editProduct = ()=> {
        showToast()
    }

    const showToast = ()=>{
        toast.success("successfully",{
            position: toast.POSITION.BOTTOM_RIGHT
        })
    }

  return (
    <div className='flex flex-col w-full items-center p-2'>
      <div className='flex flex-row w-full pb-4'>
        <p className='px-4 py-2 rounded-md bg-slate-800 text-white'>Product List</p>
    </div>
    <div className='text-white font-poppins font-semibold my-2 overflow-x-auto mb-44 p-4 border-2 border-slate-600 rounded-lg shadow-lg'>
        <ToastContainer/>
    <Table className='shadow-lg w-full'>
       <Table.Head className='border-gray-700 text-green-500 bg-gray-700'>

         <Table.HeadCell className='border-gray-700 text-green-200 bg-gray-500'>
           ID
         </Table.HeadCell>

         <Table.HeadCell className='border-gray-700 text-green-200 bg-gray-500'>
           Image
         </Table.HeadCell>

         <Table.HeadCell className='border-gray-700 text-green-200 bg-gray-500'>
           Name
         </Table.HeadCell>

         <Table.HeadCell className='border-gray-700 text-green-200 bg-gray-500'>
           Category
         </Table.HeadCell>

         <Table.HeadCell className='border-gray-700 text-green-200 bg-gray-500'>
           Qty
         </Table.HeadCell>

         <Table.HeadCell className='border-gray-700 text-green-200 bg-gray-500'>
          Unit
         </Table.HeadCell>

         <Table.HeadCell className='border-gray-700 text-green-200 bg-gray-500'>
          BarCode
         </Table.HeadCell>

         <Table.HeadCell className='border-gray-700 text-green-200 bg-gray-500'>
          Expired Date
         </Table.HeadCell>
         <Table.HeadCell className='border-gray-700 text-green-200 bg-gray-500'>
          Buy Price
         </Table.HeadCell>
         <Table.HeadCell className='border-gray-700 text-green-200 bg-gray-500'>
          Sell Price 1
         </Table.HeadCell>

         <Table.HeadCell className='border-gray-700 text-green-200 bg-gray-500'>
          Sell Price 2
         </Table.HeadCell>
         <Table.HeadCell className='border-gray-700 text-green-200 bg-gray-500'>
          Sell Price 3
         </Table.HeadCell>


         <Table.HeadCell className='border-gray-700 text-green-200 bg-gray-500'>
           <span className="sr-only">
             Edit
           </span>
         </Table.HeadCell>
       </Table.Head>
       <Table.Body className="divide-y">

        { 
         products.map((product,id)=>(
           <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={id}>
             <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {id }
             </Table.Cell>

             <Table.Cell>
              <img src={product.img} alt='...' className='object-fill w-full h-full rounded-lg border-2'/>
             </Table.Cell>

             <Table.Cell>
              { product.item_name }
             </Table.Cell>

             <Table.Cell>
             { product.category }
             </Table.Cell>
             <Table.Cell>
             { product.item_qty }
             </Table.Cell>

             <Table.Cell>
             { product.unit }
             </Table.Cell>
             
             <Table.Cell>
             { product.barcode }
             </Table.Cell>

             <Table.Cell>
             { product.expireDate }
             </Table.Cell>

             <Table.Cell>
             { product.buy_price }
             </Table.Cell>
             <Table.Cell>
             { product.sell_price1 }
             </Table.Cell>
             <Table.Cell>
             { product.sell_price2 }
             </Table.Cell>
             <Table.Cell>
             { product.sell_price3 }
             </Table.Cell>

             <Table.Cell>
               <div className='flex flex-row'>
                 <div className='px-2 py-1 bg-green-300 text-green-500 rounded-md mx-4 cursor-pointer' onClick={()=>editProduct(product)}>
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

export default ProductList
