import { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

export const Slide=()=>{

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{height:'562px'}}
              src="https://i.pinimg.com/originals/cc/48/3b/cc483b945cf746255339655b2a5f25b3.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className='text-dark'>Your match is waiting here</h3>
              <Button variant="primary" onClick={handleShow}>
                  About US
                </Button>

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                  <Offcanvas.Body>
                  "May this marriage be full of laughter, our every day in paradise."<br/><br/>
                   "Contact genuine profiles with 100% verified mobile numbers.""<br/><br/>
                   "Highest number of documented marriages online.""<br/><br/>
                   "The most trusted matrimony brand.""<br/><br/>
                   www.dravidianmatrimony.com

                   


                  </Offcanvas.Body>
                </Offcanvas>
              {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{height:'562px'}}
              src="https://thumbs.dreamstime.com/b/national-wedding-bride-groom-wedding-muslim-couple-marriage-ceremony-muslim-marriage-national-wedding-bride-168834425.jpg"
              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h3 className='text-dark'>Start searching for your perfect partner</h3>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{height:'562px'}}
              src="https://wallpaperaccess.com/full/1315478.jpg"
              alt="Third slide"
            />
    
            <Carousel.Caption>
              <h3 className='text-white'>Start your journey with your loved one</h3>
              {/* <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
