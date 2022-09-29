import { useState } from "react"
import { Badge, Button, Container, Modal, Nav, Navbar,} from "react-bootstrap"
import { onSubmitLogout } from "./Bridge"
import { Slide } from "./Slide"

export const Menu=()=>{
    const [show,setShow]=useState(false)
    const handleShow=()=>setShow(true)
    const handleClose=()=>setShow(false)
    return(
        <>
        <Navbar bg="warning" expand="lg">
            <Container fluid>
                <Navbar.Brand className="text-danger">
                <img
                    src="download1.png"
                    width="40"
                    height="40"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
            />Dravidian Matrimony</Navbar.Brand>
                <Navbar.Toggle aria-controls="sil"></Navbar.Toggle>
                <Navbar.Collapse id="sil">
                    <Nav className="ms-auto">
                    
                    <a className="btn btn-outline-danger rounded-5 ms-2" href="/#/view">Home</a>
                    <a className="btn btn-outline-danger rounded-5 ms-2" href="/#/fresh">New</a>
                    <a className="btn btn-outline-danger rounded-5 ms-2" href="/#/filter">Filter</a>
                    <a className="btn btn-outline-danger rounded-5 ms-2" href="/#/remove">Remove</a>
                    <Button  variant="danger" className="ms-2" onClick={handleShow}>
                      Notification<Badge className="btn btn-outline-danger rounded-5 ms-2">Show</Badge>
                    </Button>

                    <Modal show={show} onHide={handleClose} className="text-dark">
                        <Modal.Header closeButton>
                            <Modal.Title>Updated Profiles</Modal.Title>
                        </Modal.Header>
                            <Modal.Body>Will get frequent notification of the exact matches</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <button className="btn btn-outline-danger rounded-5 ms-2" onClick={async()=>{
                                await onSubmitLogout()
                                window.location.assign("/")
                            }}>
                                <i class="bi bi-door-closed-fill"></i>
                    </button>  

                    </Nav>

                </Navbar.Collapse>


            </Container>

        </Navbar>
        
        </>
    )
}