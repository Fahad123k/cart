// import React from 'react'
// import { useState, useEffect } from 'react'
// import { db } from "./firebase_config";
// import {
//     collection, getDocs
// } from 'firebase/firestore'




// export default function Products() {
//     const [products, setproducts] = useState([]);
//     const productsCollectionRef = collection(db, "products");

//     // use effect to get user after loading page
//     useEffect(() => {
//         // like api fetching
//         const getProducts = async () => {
//             const data = await getDocs(productsCollectionRef);
//             setproducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//         }
//         getProducts();
//     }, []);

//     return (
//         <div>Products

//             {
//                 products.map((product) => {
//                     return <div>
//                         <h5>title :{product.title}</h5>
//                         <h5>price :{product.price}</h5>
//                         <h5>qty :{product.qty}</h5>
//                     </div>

//                 })
//             }
//         </div>
//     )
// }
