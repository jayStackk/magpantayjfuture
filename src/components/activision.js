import { Container, Col, Row } from "react-bootstrap";
import "./firstclass/firstme.css"


function Activision () {


    return (

        <>
        <Container>
      
      <h1 className="d-flex justify-content-center">
          Activision
      </h1>

      <img src={require("../components/assets/picture2.png")} alt='house' style={{height: '100px'}}/>
      <Col className='div1'>
      <ul>
      <li> In some roles, no two days are the same </li>

      </ul>
      </Col>

      <Col className='div2'>

      <ul>
      <li style={{ flex: 1}}> In some roles, no two days are the same </li>

      </ul>

      </Col>

      <Row>
          <ul className='seperation'>
              <li> Probably #1 in my list, As a huge Call of Duty gamer, this company is somewhere i'm thriving for a career </li>
              <li> Provides Healthcare, Modifications, Get to design Guns/ SKINS, UI/UX the framework of the game </li>
              <li> Paid vacation and I reserched that they use similar languages like javascript, UI/UX designing. c++ is something i need to work on </li>
              <li> my goal would be to grow in the company and sharpen my skills </li>

              <a href={"https://careers.activision.com/job/R019872/Staff-Backend-Engineer-Activision-Blizzard-Media"}> POSITION OVERVIEW</a> 
          </ul>
      </Row>
      
      </Container>
      </>
    
    )
}

export default Activision;