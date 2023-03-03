import { Row, Container, Col } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from  'react-router-dom';

// import { Form } from 'react-bootstrap';
import './App.css';
// import {Row, Navbar, Container, Col, Nav, Button } from 'react-bootstrap';
import AppTwo from './components/navbar/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import NewApp from './components/firstjob';

// import razer from './components/razer';
import Razer from './components/razer';

import  BasicExample from './components/newbutton';
import Activision from './components/activision';
import Rockstar from './components/rockstar';
import Micro from './components/microsoft';





function App() {

 
  return (

    <BrowserRouter>
    

  <AppTwo></AppTwo>


    <BasicExample></BasicExample>
  

<Container fluid style={{backgroundColor: `beige`}}>
  <Row>
    
    <Col>


    
    <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "3px" }} />
 
    
    <h1 className='d-flex justify-content-center'>     Dream Jobs ...   <hr></hr> </h1>
 
    <div style={{ flex: 1, backgroundColor: "#6F38C5", height: "3px" }} />

    
    
    </Col>
    </Row>

    <Col>

    

    </Col>

    <Row>


    </Row>

  
          
    <Routes>
        <Route path='firstjob'  element ={<NewApp/>}/>
        <Route path='Razer'  element ={<Razer/>}/>
        <Route path='activision'  element ={<Activision/>}/>
        <Route path='rockstar'  element ={<Rockstar/>}/>
        <Route path='Micro'  element ={<Micro/>}/>

        {/* <Route path='AskingQuestions' element = {<AskingQuestionComponents/>}/>
        <Route path='OddsEven' element = {<OddsEvenComponents/>}/>
        <Route path='ReverseIt' element = {<ReverseIt/>}/>
        <Route path='GreaterLess' element = {<GreaterLess/>}/>
        <Route path='Madlib' element = {<MadLib/>}/>
        <Route path='RestaurantPicker' element = {<RestaurantPicker/>}/> */}


  
      </Routes>
  </Container>

      
  </BrowserRouter>
  );
};


export default App;
