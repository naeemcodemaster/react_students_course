import React from 'react';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';
// import First from './hooks/first';
// import Second from './hooks/Second';
// import Three from './hooks/Three';
// import Data from './components/Data';
// import Index from './website';
// import './App.css';
// import UseRef_One from './hooks/useRef/UseRef_One';
// import UseRef_Two from './hooks/useRef/UseRef_Two';
// import UseRef_Three from './hooks/useRef/UseRef_Three';
// import UseEffect from './hooks/useEffect/UseEffect';
// import UseReducer from './hooks/useReducer/UseReducer';
// import UseMemo from './hooks/useMemo/UseMemo';
// import UseMemo2 from './hooks/useMemo/UseMemo2';
// import UseCallback from './hooks/useCallback/UseCallback';
import DataTable from './project1/DataTable';
import ProductHome from './project2/ProductHome';
import Home from './hooks/router/Home';
import About from './hooks/router/About';
import Contact from './hooks/router/Contact';
import NavBar from './hooks/router/NavBar';
import ErrorPage from './hooks/router/ErrorPage';
import Student from './hooks/router/Student';
import Search from './hooks/router/Search';
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
    {/* <Index/> */}

    {/* <UseRef_One/> */}
    {/* <UseRef_Two/> */}

    {/* <UseRef_Three value={10}/> */}


    {/* <UseEffect/> */}

    {/* <UseReducer/> */}

    {/* <UseMemo/> */}
    {/* <UseMemo2/> */}

    {/* <UseCallback/> */}

    {/* <DataTable/> */}

    {/* <ProductHome/> */}


    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/search' element={<Search/>}></Route>

        {/* Dynamic route set krna */}
        <Route path='/student/:name' element={<Student/>}></Route>
        
        <Route path='/student/:name/:age' element={<Student/>}></Route>

        {/* <Route path='/*' element={<ErrorPage/>}></Route> */}
        <Route path='/*' element={<Navigate to='/'/>}></Route>
      </Routes>
    </BrowserRouter>

    </>

  )
}

export default App;

