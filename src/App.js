import React from 'react';
import Cart from './Cart';
import Navbar from './NavBar';
// import Products  from './Products'

import { useState, useEffect } from 'react'
import { db } from "./firebase_config";
import {
    collection, getDocs
} from 'firebase/firestore'


export default function App()  {

 

  // handleIncreaseQuantity = (product) => {
  //   console.log('Heyy please inc the qty of ', product);
  //   const { products } = this.state;
  //   const index = products.indexOf(product);

  //   products[index].qty += 1;

  //   this.setState({
  //     products
  //   })
  // }
  // handleDecreaseQuantity = (product) => {
  //   console.log('Heyy please inc the qty of ', product);
  //   const { products } = this.state;
  //   const index = products.indexOf(product);

  //   if (products[index].qty === 0) {
  //     return;
  //   }

  //   products[index].qty -= 1;

  //   this.setState({
  //     products
  //   })
  // }
  // handleDeleteProduct = (id) => {
  //   const { products } = this.state;

  //   const items = products.filter((item) => item.id !== id); // [{}]

  //   this.setState({
  //     products: items
  //   })
  // }

  // getCartCount = () => {
  //   const { products } = this.state;

  //   let count = 0;
    
  //   products.forEach((product) => {
  //     count += product.qty;
  //   })
    
  //   return count;
  // }



  function getCartTotal () {
    const { products } = this.state;
    
    let cartTotal = 0;

    products.map((product) => {
      if(product.qty>0){

        cartTotal=cartTotal+product.qty * product.price;
      }
      return '';
    })

    return cartTotal;
  }


    // const { products } = this.state;
    const [products, setproducts] = useState([]);
    const productsCollectionRef = collection(db, "products");
       // use effect to get user after loading page
       useEffect(() => {
        // like api fetching
        const getProducts = async () => {
            const data = await getDocs(productsCollectionRef);
            setproducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getProducts();
    }, []);


    return (
      <div className="App">
        {/* <Navbar /> */}
        <Navbar count={getCartCount()} />
        <Cart
          products={products}
          // onIncreaseQuantity={this.handleIncreaseQuantity}
          // onDecreaseQuantity={this.handleDecreaseQuantity}
          // onDeleteProduct={this.handleDeleteProduct}
        />
        <div className="totalCartPrice" style={{fontSize:20,padding:10}}>
          {/* Total: {this.getCartTotal()} */}
        </div>

        {/* <Products/> */}
      </div>
    );
  }

