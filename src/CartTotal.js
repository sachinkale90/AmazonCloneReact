import React from 'react'
import styled from 'styled-components'
import NumberFormat from 'react-number-format';

function CartTotal({cartItemsCount, subTotal}) {
    return (
        <Container>
            <SubTotal>Subtotal ({cartItemsCount} items): 
                <NumberFormat value={subTotal} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </SubTotal>

            {
                cartItemsCount == 0 ? (<p></p>):(
                    <CheckOutButton>Proceed to checkout</CheckOutButton>
                )
            }

        </Container>
    )
}

export default CartTotal

const Container = styled.div`
    background-color: white;
    flex: 0.3;
    padding: 20px;
    font-weight: 700;
`

const SubTotal = styled.h2`
    margin-bottom: 16px;

`

const CheckOutButton = styled.button`
    width: 100%;
    padding: 4px 8px;
    background-color: #f0c14b;
    border: 2px solid #aBB734;
    border-radius: 4px;
    font-size: 16px;    
    :hover{
        background-color: #ddb347;
    }
`
