import styled from 'styled-components'
import CartItems from './CartItems'
import CartTotal from './CartTotal'

function Cart({cartItems}) {

    const calculateSubTotal = () => {
        let total = 0;
        cartItems.forEach((cartItem) => {
            total+= cartItem.product.price * cartItem.product.quantity;
        });
       
        return total;
    }

    const getCount =() => {
        let count = 0;
        cartItems.forEach((item) => {
            count += item.product.quantity; 
        });

        return count;
    } 


    return (
       <Container>
           <CartItems cartItems ={cartItems}/>
           <CartTotal cartItemsCount = {getCount()} subTotal = {calculateSubTotal()}/>
       </Container>
    )
}

export default Cart

const Container = styled.div`
    display: flex;
    padding: 14px 18px 0px 18px;
    align-items: flex-start;
`

