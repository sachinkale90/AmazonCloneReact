import React from 'react'
import styled from 'styled-components'
import {auth, db, provider} from './firebase'

function Login({setUser}) {

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            var newUser = {
                name: result.user.displayName,
                email: result.user.email,
                photo: result.user.photoUrl
            };
            localStorage.setItem('user', JSON.stringify(newUser));
            setUser(newUser);
        })
    }

    return (
        <Container>
            <Content>
                <AmazonLogo src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png" />
            <h1>Sign into Amazon</h1>
                <LoginButton onClick= {signIn}>
                    Sign in with Google
                    </LoginButton>
            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #f8f8f8;
    display: grid;
    place-items: center;
`

const Content = styled.div`
    padding: 100px;
    background-color:white;
    border-radius: 5px;
    box-shadow: 0 1px 3px gray;
    text-align: center; 
`

const AmazonLogo = styled.img`
    height: 100px;
    marigin-bottom: 40px;
`

const LoginButton = styled.button`
    margin-top: 50px;
    background-color: #f0c14b;
    border-radius: 4px;
    border: 2px solid #a88734;
    font-size: 16px;
    padding: 4px 8px 4px 8px;
    cursor:pointer;
    :hover {
        background-color: #ddb347;
    }
`