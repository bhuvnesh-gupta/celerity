import Accordion from 'react-bootstrap/Accordion';
import '../Styles/Login.css'

function SideBar() {
  return (
    <>
    
    <Accordion  className='Flex m-2 rounded' defaultActiveKey="0" flush>
    <div className='d-flex p-2 m-2
    '>3 top Quote 6 in total</div>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Filters</Accordion.Header>
        <Accordion.Body className='bg-light'>
          Filters
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Price</Accordion.Header>
        <Accordion.Body className='bg-light'>
            Price
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Modes</Accordion.Header>
        <Accordion.Body className='bg-light'>
            modes
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Seller</Accordion.Header>
        <Accordion.Body className='bg-light'>
            seller
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </>
  );
}

export default SideBar;