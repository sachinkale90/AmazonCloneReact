import styled from 'styled-components'
import React from 'react'
import CartItem from './CartItem'

function CartItems({cartItems}) {
    return (
        <Container>
            <Title><h1>Shopping Cart</h1></Title>
            <hr/>
            <ItemsContainer>
                {
                   cartItems.length == 0 ? (
                    <NoCartItems>
                        <p>No items in the cart</p>
                    </NoCartItems>
                   ): (
                    cartItems.map(item => (
                        <CartItem 
                            id = {item.id}
                            item = {item.product}
                        />
                    )))
                }
            </ItemsContainer>
        </Container>
    )
}

export default CartItems

const Container = styled.div`
    background-color: white;
    flex: 0.8;
    margin-right: 18px;
    padding: 20px;
`

const Title = styled.div`
    margin-bottom: 8px;
`

const ItemsContainer = styled.div``

const NoCartItems = styled.div``