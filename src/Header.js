import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import RoomIcon from '@material-ui/icons/Room';
import { Link } from 'react-router-dom'

function Header({user, cartItems, signOut}) {

    const getCount =() => {
        let count = 0;
        cartItems.forEach((item) => {
            count += item.product.quantity; 
        });
        return (count);
    } 

    return (
        <Container>
            <HeaderLogo>
                <Link to="/">
                <img src={"https://i.imgur.com/7I9Was5.png"} />
                </Link>
            </HeaderLogo>

            <HeaderOptionAddress>
                <RoomIcon />
                <HeaderOption>
                    <OptionLineOne>Hello</OptionLineOne>
                    <OptionLineTwo>Select your address</OptionLineTwo>
                </HeaderOption>
            </HeaderOptionAddress>

            <HeaderSearch>
                <HeaderSearchInput type="text" />
                <HeaderSearchIconContainer>
                    <SearchIcon />
                </HeaderSearchIconContainer>
            </HeaderSearch>

            <HeaderNavItems>
                <HeaderOption onClick= {signOut}>
                    <OptionLineOne>Hello, {user.name}</OptionLineOne>
                    <OptionLineTwo>Accounts & Lists</OptionLineTwo>
                </HeaderOption>

                <HeaderOption>
                    <OptionLineOne>Returns</OptionLineOne>
                    <OptionLineTwo> & Orders</OptionLineTwo>
                </HeaderOption>

                
                    <HeaderOptionCart>
                    <Link to="/cart">
                        <ShoppingBasketIcon />
                        <CartCount >{getCount()}</CartCount>
                        </Link>
                    </HeaderOptionCart>
            </HeaderNavItems>


        </Container>
    )
}

export default Header;

const Container = styled.div`
    height:60px;
    background-color:#3B5998;
    display: flex;
    align-items:center;
    justify-content: space-between;
    color: white;
`
const HeaderLogo = styled.div`
    img {
        width:100px;
        margin-left: 11px;
    }
`

const HeaderOptionAddress = styled.div`
    padding-left: 9px;
    display: flex;
    align-items: center;
`

const OptionLineOne = styled.div``

const OptionLineTwo = styled.div`
    font-weight: 700;
`
const HeaderSearch = styled.div`
    display: flex;
    flex-grow: 1;
    height: 40px;
    border-radius: 4px;
    overflow: hidden;
    padding-left: 5px;
    background-color: white;
    :focus-within: {
        box-shadow: 0 0 0 3px #f90;
    }
`
const HeaderSearchInput = styled.input`
    border: 0;
    flex-grow: 1;
    :focus:{
        outline: none;
    }
`
const HeaderSearchIconContainer = styled.div`
    background-color: #febd69;
    width: 45px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`
const HeaderNavItems = styled.div`
    display: flex;
    
`
const HeaderOption = styled.div`
    padding: 10px 9px 10px 9px; 
    cursor: pointer;
`
const HeaderOptionCart = styled.div`
    display: flex;
    align-items: center;
    padding-right: 9px;
    a {
        display: flex;
        align-items: center;
        padding-right: 9px;
        color: white;
        text-decoration: none;
    }
`
const CartCount = styled.div`
    padding-left: 4px;
    font-weight: 700;
    color: #f08804;
`