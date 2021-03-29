import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Product from './Product'
import { db } from './firebase'

function Home() {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        db.collection('Products').onSnapshot((spanshot) => {
            let tempProducts = [];

            tempProducts = spanshot.docs.map((doc) => (
                {
                    id: doc.id,
                    product: doc.data()
                }
            ));
            setProducts(tempProducts);
        })
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <Container>
            <Banner></Banner>
            <Content>
                {
                    products.map(p => (
                        <Product 
                            id={p.id}
                            imageUrl={p.product.imageUrl}
                            title={p.product.name}
                            rating={p.product.rating}
                            price={p.product.price} />
                    ))
                }
            </Content>
        </Container>
    )
}

export default Home

const Container = styled.div`
    max-width: 1500px;
    margin: 0 auto;
`

const Banner = styled.div`
    background-image: url('https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Nzg3NzIxZDct/Nzg3NzIxZDct-YTg3MzkwNjMt-w3000._CB412118632_.jpg');
    min-height: 600px;
    background-position: center;
    background-size: cover;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
`

const Content = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    margin-top: -350px;
    display: flex;
`
