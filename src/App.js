import React, { useEffect, useState } from 'react';
// import './App.css';

 import {
   BrowserRouter as Router,
   Switch,
   Route,
  
 } from "react-router-dom";
import BookCollection from './Components/BookCollection/BookCollection';
 import Login from './Components/Login/Login/Login';
 import Register from './Components/Login/Login/Register';

 import Navbar from './Components/Navbar/Navbar';
import RegistrationBook from './Components/RegistratonBook/RegistrationBook';

 import useFirebase from './Hooks/UseFirebase';


function App() {
  const {users}=useFirebase()
  
 
  return (
    <div className="App">
    
       <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/"> <Login/>  </Route>
          <Route  path="/register"> <Register/> </Route>
          {users.email &&<Route path="/registrationbook"> <RegistrationBook/> </Route>}
          {users.email &&<Route path="/bookcollection"> <BookCollection/> </Route>}
        
                  </Switch>
      </Router> 
      

    </div>
  );
}

export default App;
