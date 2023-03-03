import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { Link } from 'react-router-dom';

function BasicExample() {
  return (
    <ButtonGroup aria-label="Basic example" className='d-flex justify-content-center resizeMe'>
      <Button as ={Link} to ='firstjob' className='btn btn-dark' style={{ width: '120px',}}> 1stJob </Button>
      <Button as ={Link} to ='razer' className='btn btn-dark' style={{ width: '120px',}}> 2ndJob </Button>
      <Button as ={Link} to ='activision' className='btn btn-dark' style={{ width: '120px',}}> Activision </Button>
      <Button as ={Link} to ='Micro' className='btn btn-dark' style={{ width: '120px',}}> Micro  </Button>
      <Button as ={Link} to ='Rockstar' className='btn btn-dark' style={{ width: '120px',}}> Rockstar </Button>
      
    </ButtonGroup>
  );
}


export default BasicExample;