import React from 'react';
import First from './hooks/first';
import Second from './hooks/Second';
import Three from './hooks/Three';
import Data from './components/Data';
import Index from './website';
// import Nav from './components/Nav';
// import Header from './components/Header';
 /*
  In React, a "state" refers to the data that represents the current condition or values of a component. It is used to store and manage dynamic information within a component, allowing the component to render and behave differently based on changes to that data. State is mutable and can be updated over time in response to user actions, events, or other triggers, causing the component to re-render and reflect the updated state.

  or 

  Data over time change

  Important Note
  useState is an asynchronous hook and it doesn't change the state immediately, it has to wait for the component to re-render
  
  */ 

const App = () => {
  
  return (
    <>
      

      {/* <Nav /> */}
      {/* <Header/> */}


    {/* Hooks */}
    {/* <First/> */}
    {/* <Second/> */}
    {/* <Three/> */}


    {/* <Data name="khan" age={22}/> */}


    {/* Website work here */}
    <Index/>
    

    </>

  )
}

export default App;

