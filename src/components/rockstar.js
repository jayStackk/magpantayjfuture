import { Container, Col, Row } from "react-bootstrap";
import "./firstclass/firstme.css"

function Rockstar () {


    return (

        <>
        <Container>
      
      <h1 className="d-flex justify-content-center">
          ROCKSTAR GAMES 
      </h1>

      <img src={require("../components/assets/picture5.png")} alt='house' style={{height: '100px'}}/>
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
              <li> I would like to start with activision's location, I would love to work there. I play gta a lot and very familiar with their games, Although the culture might be a problem.</li>
              <li> To be a SWE for activision, i'll need to sharpen my CS skills and databases, I did notice that they use c#, Which i'm familiar of. </li>
              <li> I do have the skills with web and game development which is what they do, They also use similar languages! I need to learn SQL to meet requirements </li>
              <li> my goal would be to grow in the company and sharpen my skills </li>

              <a href={"https://www.rockstargames.com/careers/openings/position/4110900003"}> POSITION OVERVIEW</a>    
          </ul>
      </Row>
      
      </Container>
      </>
    
    )
}

export default Rockstar;