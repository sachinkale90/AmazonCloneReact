import './App.css';
import styled from 'styled-components'
import Header from './Header'
import Cart from './Cart'
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { auth, db } from './firebase'
import Login from './Login'


function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [cartItems, setCartItems] = useState([])

  const signOut = () =>{
    auth.signOut().then(
      localStorage.clear()
    ).then(
      setUser(null)
    )
  }

  const getCartItems = () => {
    db.collection('cartItems').onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => (
        {
          id: doc.id,
          product: doc.data()
        }
      ));
      setCartItems(tempItems);
    })
  }

  useEffect(() => {
    getCartItems();
  }, [])

  return (
    <Router>
      {
        !user ? (
          <Login  setUser={setUser} />
        ) : (
          <Container>
            <Header signOut= {signOut} user={user} cartItems={cartItems} />
            <Switch>
              <Route path="/cart">
                <Cart cartItems={cartItems} />
              </Route>
              <Route path="/login">
                <Login setUser={setUser} />
              </Route>
              <Route path="/"><Home /></Route>
            </Switch>
          </Container>
        )
      }
    </Router>
  );
}

export default App;

const Container = styled.div``