import React from 'react';

class CartItem extends React.Component {

   
    render() {
        const {price ,title,qty}=this.props.product;
        const {product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct}=this.props
        console.log(this.props)
        return (
           <div className="cart-item">
            <div className="left-block">
                <img style={styles.iamge} />
            </div>
            <div className="right-block">
            <div style={{fontSize:25}}> {title}</div>
            <div style={{color:'#777'}}> {price}</div>
            <div style={{color:'#777'}}> {qty}</div>
            <div className="cart-item-actions">
                {/* buttons */}
                <img 
                src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                alt="increase" 
                className="action-icons"
                onClick={()=> onIncreaseQuantity(product)}
                />
                <img 
                src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                alt="decrease" 
                className="action-icons" 
                onClick={()=> onDecreaseQuantity(product)}
                />
                <img 
                src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" 
                alt="delete"
                 className="action-icons"
                 onClick={()=> onDeleteProduct(product.id)}

                  />
            </div>
            </div>
           </div>
        );
    }
}


const styles={
    iamge:{
        height:110,
        width:110,
        borderRadius:4,
    }
}
export default CartItem;