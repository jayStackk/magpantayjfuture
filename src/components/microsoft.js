import { Container, Col, Row } from "react-bootstrap";
import "./firstclass/firstme.css"



function Micro () {


    return (
        <>
          <Container>
        
        <h1 className="d-flex justify-content-center">
            Microsoft
        </h1>

        <img src={require("../components/assets/picture3.png")} alt='house' style={{height: '100px'}}/>
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
                <li> Microsoft is a well respected company and are the source of what i need the most as a software engineer</li>
                <li> Provides Healthcare, PAID leave, 401K,  </li>
                <li> I do have the skills with web development, Mobile soon and game development which is what they do </li>
                <li> my goal would be to grow in the company and sharpen my skills </li>

           <a href="https://leap.microsoft.com/en-US/pathways/engineering/software-engineer/#:~:text=Software%20Engineers%20build%20innovative%20software,deployment%2C%20maintenance%2C%20and%20reporting">SWE At MICROSOFT</a>
            </ul>
        </Row>
        
        </Container>
        </>



    )
}


export default Micro; 