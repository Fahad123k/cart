import React from 'react';

class CartItem extends React.Component {

    constructor (){
        super();
        this.state={
            price:999,
            title:"Mobile Phone",
            qty:1,
            img:''
        }
        
    }


    increaseQuantity = () => {
        console.log('this', this.state);
        // this.setState({
        //    qty: this.state.qty+1,
        // })

        // if prevState is require thdn
        this.setState((prevState)=>{
            return {
             qty:prevState.qty+1
            }
         })
      }
       
    decreaseQuantity = () => {
        console.log('this', this.state);
        // from 1
        // this.setState({
        //    qty: this.state.qty-1,
        // })
        // form 2
        this.setState((prevState)=>{
           return {
            qty:prevState.qty-1
           }
        })
      }

    render() {
        const {price ,title,qty}=this.state;
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
                onClick={this.increaseQuantity}
                />
                <img 
                src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                alt="decrease" 
                className="action-icons" 
                onClick={this.decreaseQuantity}
                />
                <img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" alt="delete" className="action-icons" />
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