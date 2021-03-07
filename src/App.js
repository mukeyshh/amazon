import React, {useEffect} from 'react'
import './App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';


function App() {

  const[{basket},dispatch]=useStateValue();

  //piece of code which runs on given condiion

  useEffect(()=>{
    const unsubscribe=auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        //user is loggen in
        dispatch({
          type:"SET_USER",
          user:authUser
        })
      }else{
        //logged out
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })
  },[])

  return()=>{
    //any cleanup operations go in here
    unsubscribe();  
  }
  return (
    <Router>
    <div className="app">
     <Switch>
     <Route path="/checkout" >
     <Header />
     <Checkout />
         
       </Route>
       <Route path="/login" >
         <Login />
       </Route>
       <Route path="/" >
         <Header />
         <Home />
       </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;