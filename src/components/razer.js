
import { Container, Col, Row } from "react-bootstrap";
import "./firstclass/firstme.css"

function Razer () {


    return (

        <>
          <Container>
        
        <h1 className="d-flex justify-content-center">
            RAZER 
        </h1>

        <img src={require("../components/assets/picture4.png")} alt='house' style={{height: '100px'}}/>
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
                <li>No dress code, Wear whatevers comfortable to get the job done.</li>
                <li> Flexible hours and Healthcare</li>
                <li> I have backend skills, Things people wont see but make things function! I can be an asset for this</li>
                <li> my goal would be to grow in the company and sharpen my skills, make a fortune </li>

                <a href ="https://careers.activision.com/job/R019872/Staff-Backend-Engineer-Activision-Blizzard-Media">SWE ROLE </a>
            </ul>
        </Row>
        
        </Container>
        </>
    
    )
}

export default Razer;