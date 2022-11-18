// @flow
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { v4 as uuidv4 } from 'uuid';

function ModalInputAdd({ navShow,setType, setAddInputArr , setNavShow }) {
    const [show, setShow] = useState(false);


    const handleAdd = (e) => {
        e.preventDefault();
        setType('add')
        const userName = e.target.assign.value;
        const title = e.target.title.value;
        const ticketTask = e.target.ticket.value
        const itemFromBackendTwo = { id: uuidv4(), username:userName , title:title ,content: ticketTask ,orderNumber:""}
        setAddInputArr(itemFromBackendTwo)
        setShow(false);
        setNavShow(false)
    }
    
    function handleShow(){
        // let a = localStorage.getItem('modalShow')
        setShow(true)
    }
  
    // console.log("***********",a);
    // const handleShow = () => setShow(true);

    return (
        

            <Modal 
            show={navShow} 
            onHide={() => setNavShow(false)}
             dialogClassName="modal-90w modal-restore-container"
             aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header >
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => { handleAdd(e) }}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Enter Title. </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your title"
                                name='title'
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Enter the ticket instructions here. </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Write ticket work"
                                name='ticket'
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Assign to </Form.Label>
                            <Form.Select name="assign" aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="Leanne Graham">Leanne Graham</option>
                                <option value="Genny Shoan Harresion">Genny Shoan Harresion</option>
                                <option value="Petter Karoen Jarray">Petter Karoen Jarray</option>
                                <option value="Antonette">Antonette</option>
                                <option value="Tony">Tony</option>
                                <option value="John">John</option>
                                <option value="Clementine Bauch">Clementine Bauch</option>
                                <option value="Chelsey Dietrich">Chelsey Dietrich</option>
                                <option value="Clementine Bauch">Clementine Bauch</option>
                                <option value="Kurtis Weissnat">Kurtis Weissnat</option>
                            </Form.Select>
                        </Form.Group>


                        <Modal.Footer>
                            <Button variant="success" type='submit' >
                                Save
                            </Button>

                            <Button onClick={(e) => { setNavShow(false) }} variant="warning"  >
                                Close
                            </Button>

                        </Modal.Footer>
                    </Form>
                </Modal.Body>

            </Modal>
        
    );
};

export default ModalInputAdd;