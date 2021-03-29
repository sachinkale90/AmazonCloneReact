import React from 'react'
import styled from 'styled-components'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import {db} from './firebase'

function Product({id, imageUrl, title, rating, price }) {
    const addToCart = () => {
        const cartItem = db.collection('cartItems').doc(id);
        cartItem.get()
        .then((doc)=> {
            if(doc.exists){
                cartItem.update({
                    quantity: doc.data().quantity +1
                });
            }else{
                db.collection('cartItems').doc(id).set({
                    name: title,
                    image: imageUrl,
                    price: price,
                    quantity: 1  
                })
            }
        })
    }

    return (
        <Container key={id}>
            <Title>{title}</Title>
            <Price>${price}</Price>
            <Rating>
                {
                    Array(rating)
                        .fill("⭐")
                }
            </Rating>

            <Image src={imageUrl} />

            <ActionSection>
                <AddToCartButton onClick={addToCart}>
                    Add to Cart
                </AddToCartButton>
                &nbsp;
                &nbsp;
                <LikeActionButton>
                    <ThumbUpIcon />
                     &nbsp; Like
                </LikeActionButton>
            </ActionSection>
        </Container>
    )
}

export default Product

const Container = styled.div`
    background-color: white;
    z-index: 100;
    flex: 1;
    padding: 20px;
    margin: 10px;
    max-height: 400px;
    display: flex;
    flex-direction: column;

`

const Title = styled.span``
const Price = styled.span`
    font-weight: 500;
    margin-top: 3px;
`
const Rating = styled.div``
const Image = styled.img`
    max-height: 200px;
    object-fit: contain;
`;

const ActionSection = styled.div`
    display: flex;
    margin-top: 12px;
    place-content: center;
`

const AddToCartButton = styled.button`
    width: 100px;
    height: 30px;
    background-color: #f0c14b;
    border: 2px solid #aBB734;
    border-radius: 2px;
`
const LikeActionButton = styled.button`
    width: 100px;
    height: 30px;
    color: white;
    display: flex;
    background-color: #3B5998;
    justify-content: center;
    align-items: center;    
    border-radius: 2px;
`