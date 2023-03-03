

import { Container, Col, Row } from 'react-bootstrap';

import "./firstclass/firstme.css"

function NewApp () {


    return (

      
        <Container>
        
        <h1 className="d-flex justify-content-center">
            Bloomberg
        </h1>

        <img src={require("../components/assets/picture1.png")} alt='house' style={{height: '100px'}}/>

        <Col className='div1'>
        <ul>

        <li style={{ fontSize: '24px'}}> In some roles, no two days are the same </li>


        </ul>

        </Col>

        <Col className='div2'>

        <ul>
        <li style={{ flex: 1, fontSize: '24px'}}> In some roles, no two days are the same </li>

        </ul>

        </Col>

        <Row>
            <ul className='seperation' style={{ fontSize: '24px'}}>
                <li> Bloomberg University gives everyone here a chance to keep learning — whether in the classroom, or at your own pace online.</li>
                <li> Provides Healthcare </li>
                <li> I do have the skills with web development which is what they do </li>
                <li> my goal would be to grow in the company and sharpen my skills </li>

               
                <a href={"https://www.bloomberg.com/company/careers/working-here/engineering/"}> POSITION OVERVIEW</a> 
            </ul>
        </Row>


        
        
        
        </Container>



    )
}


export default NewApp; 