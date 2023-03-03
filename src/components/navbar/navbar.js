import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

//  import newPic from '../assets/logo.png'



export default function AppTwo() {
  return (
    <>
      <MDBNavbar dark bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            {/* <img src=''style={{ height: '79px',}}/> */}
            J2 Page 
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>



    </>
  );
}