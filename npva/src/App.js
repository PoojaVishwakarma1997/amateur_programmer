import React, { useEffect } from "react";
import './App.css';
import Header from './Header'; 
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js"

const promise = loadStripe('pk_test_51J6SuASDUcydOdrhlTmWNZMMYIuUp8sgyrXrVNMsk9MDkKkxZFvszjCVdHpSWd3wf7ExNSXJlPAAT4L5F4Cj4GBE00I26QcJli');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        //user just loggen in or was already logged in
      
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        //user logged out
      
        dispatch({
          type: 'SET_USER',
          user: null
        })
      
      }
    })
  }, [])

  return (
    // BEM Convention
    <Router>
    <div className="app">
    
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
        </Route>
        <Route path ="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        </Route>
        <Route path="/">
         <Header />
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
