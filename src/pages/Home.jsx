
import React from 'react';
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import { setProductsThunk, filterProductsThunk } from '../store/slices/products.slice'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import cart from '../assets/images/cart4.png'

import '../styles/home.css'



//React Bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';





import {  useEffect } from 'react'

const Home = () => {



  const [ filterValue, setFilterValue ] = useState('')


  let Navigate = useNavigate()
  const dispatch = useDispatch()
  const products = useSelector ( state => state.products )

  useEffect(()=>{
    dispatch(setProductsThunk() )
    // console.log(products);
  },[])

    let wordTurned = filterValue[0]?.toUpperCase()+ filterValue.slice(1)
  

  return (
      
    <div className='product_card-box'>
      <InputGroup className="home_input" onChange={ event => setFilterValue( event.target.value )}>
        <Form.Control
          placeholder="Search product"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary"
         id="button-addon2"
         onClick={ ()=> dispatch( filterProductsThunk( filterValue )) }
         >
          Search
        </Button>
      </InputGroup>
      {
        products.map( item => (
        <article onClick={ () => Navigate(`/productDetail/${item.id}`)}
          key={item.id} className='product-card'>
        
            <div className='image_box'>
              <img src={item.productImgs[0]} alt="product-image" className='product-image'/>
            </div>

            <div className='product-data'>
              <h4>{item.title}</h4>
          
            <p>Price: <br />${item.price}</p>
            </div>

            <div className='cart_box'><img src={cart} alt="" /></div>
        
      
        </article>
        ))
      }
      <Link to='/login' >Login</Link>
    
    </div>
  );
};

export default Home;