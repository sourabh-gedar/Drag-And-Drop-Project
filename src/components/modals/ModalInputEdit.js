import React, { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { v4 as uuidv4 } from 'uuid';

function ModalInputEdit({ dfaultEditItems, singleCol, setColumns, columns, modalShow, setModalShow }) {

    const [show, setShow] = useState(false);
    const [OnChangedepartment, setChangeDepartment] = useState('')
    const [blockType, setBlockType] = useState("Requested")
    // console.log(modalShow,'modalShowmodalShowmodalShow');
    const handleEdit = (e) => {
        e.preventDefault();
        let department = e.target.department.value;
        let title = e.target.title.value
        let ticket = e.target.ticket.value
        let editAssign = e.target.editAssign.value
        setBlockType(department)
        // console.log('department', department,"hello value.................");
        // console.log('title', title,"hello value.................");
        // console.log('ticket', ticket,"hello value.................");
        // console.log('singleCol  ', singleCol,"singleCol value.................");
        let cloneData = { ...columns }

        let edited = cloneData[singleCol.name].items.map((el, i) => {
            if (el.id == dfaultEditItems.id && OnChangedepartment == '') {
                el.title = title
                el.content = ticket
                el.username = editAssign
                setColumns(cloneData)
                setShow(false);
            }
            else if (el.id == dfaultEditItems.id && OnChangedepartment != '') {
                console.log(columns, 'columns999999999999');
                console.log(singleCol, 'singleCol8989898***');
                console.log(dfaultEditItems.id, 'dfaultEditItems.id dfaultEditItems.id***');
                let cloneItems = { ...columns }
                console.log('cloneItems',cloneItems);
                let myArry = cloneData[singleCol.name].items
                console.log('myArry myArry',myArry);
                let objIndex = myArry.findIndex((obj=>obj.id==dfaultEditItems.id))
                console.log("Before update: ", myArry[objIndex])
                console.log(objIndex,'objIndexobjIndexobjIndexobjIndexobjIndex.id');
                myArry[objIndex].title = title
                myArry[objIndex].content = ticket
                myArry[objIndex].username = editAssign
                let editedData =  myArry[objIndex]
                cloneItems[OnChangedepartment].items.push(editedData)
                cloneItems[singleCol.name].items.splice(objIndex,1)
                setColumns(cloneItems)
                setShow(false)
                setChangeDepartment('')
                console.log("After update: ", myArry[objIndex])
            }
        })
        // console.log('blockType blockType blockType',blockType);

    }
    // console.log('department',OnChangedepartment);
    const handleShow = () => setShow(true);
    useEffect(() => {
        if (modalShow == true) {
            handleShow()
            setModalShow(false)
        }
    }, [modalShow])

    return (
        <div><br />


            <Modal show={show} onHide={handleEdit}>
                <Modal.Header >
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => { handleEdit(e) }}>

                        <Form.Group>
                            <Form.Label>Select Department </Form.Label>
                            <Form.Select name="department" onChange={(e) => { setChangeDepartment(e.target.value) }} defaultValue={singleCol?.name} aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="Requested">Requested</option>
                                <option value="To do">To do</option>
                                <option value="In progress">In progress</option>
                                <option value="Done">Done</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Enter Title. </Form.Label>
                            <Form.Control
                                defaultValue={dfaultEditItems?.title}
                                type="text"
                                placeholder="Enter your title"
                                name='title'
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Enter the ticket instructions here. </Form.Label>
                            <Form.Control
                                defaultValue={dfaultEditItems?.content}
                                type="text"
                                placeholder="Write ticket work"
                                name='ticket'
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Assign to </Form.Label>
                            <Form.Select name="editAssign" defaultValue={dfaultEditItems?.username} aria-label="Default select example">
                                <option>Open this select menu</option>
                                <option value="Leanne Graham">Leanne Graham</option>
                                <option value="Petter Karoen Jarray">Petter Karoen Jarray</option>
                                <option value="Genny Shoan Harresion">Genny Shoan Harresion</option>
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

                            <Button onClick={(e) => { setShow(false) }} variant="warning"  >
                                Close
                            </Button>

                        </Modal.Footer>
                    </Form>
                </Modal.Body>

            </Modal>
        </div>
    );
}

export default ModalInputEdit;