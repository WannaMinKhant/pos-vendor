import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { Tabs } from 'flowbite-react'
import { MdAddShoppingCart,MdOutlineTableChart } from 'react-icons/md'
import EditProduct from './EditProduct';
import AddProduct from './AddProduct';
import ProductList from './ProductList';

const Product = () => {
  const isAuth = localStorage.getItem("auth");
  const navigate = useNavigate();

  useEffect(()=>{
   
     if(!isAuth){
      navigate("/login");
     }
  },[])
  return (
    <div>
        <Tabs.Group
            aria-label="Tabs with icons"
            style={"underline"}
          >
            <Tabs.Item
              title="Product Add"
              icon={MdAddShoppingCart}
            >
              <AddProduct/>
            </Tabs.Item>
            <Tabs.Item
              active={true}
              title="Product List"
              icon={MdOutlineTableChart}
            >
              <ProductList/>
            </Tabs.Item>
            <Tabs.Item
              active={false}
              title="Product Edit"
              icon={MdOutlineTableChart}
            >
              <EditProduct/>
            </Tabs.Item>
          </Tabs.Group>
    </div>
  )
}

export default Product
