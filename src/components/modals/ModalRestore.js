import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import '../styles/RestoreModal.css'
import { useEffect } from 'react';
function ModalRestore({ navShowRestor, setNavShowRestore, restore, columns, setColumns, setRestore }) {
    const [show, setShow] = useState(false);
    function handleRestore(e, value, index, el) {
        let a = value
        let copiedItem = [...columns[el.name].items]
        copiedItem.push(a)
        setColumns({
            ...columns,
            [el.name]: {
                name: el.name,
                items: [...copiedItem]
            }
        })

        let delClone = [...restore]
        delClone.map((el, indexes) => {
            return (
                el[el.name].filter((it, i) => {
                    if (it.id !== value.id == false) {
                        let cloneArr = [...el[el.name]]
                        cloneArr.splice(i, 1)
                        el[el.name] = cloneArr
                    }
                })
            )
        })
        setRestore(delClone)
    }

    useEffect(() => {
        let isData = restore.find((item) => item[item.name].length > 0)
        if (!isData) {
            setShow(false)
            setNavShowRestore(false)
        }
    }, [restore])

    return (
        <>
            <Modal
                show={navShowRestor}
                onHide={() => setNavShowRestore(false)}
                dialogClassName="modal-90w modal-restore-container"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Custom Modal Styling
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {

                        restore.map((el, i) => {
                            return <div key={i}>
                                <div   >
                                    {
                                        el[el.name].map((ticket, i) => {
                                            return (
                                                <div key={i} >

                                                    <Card style={{ width: '18rem' }}>
                                                        <Card.Body>
                                                            <Card.Title>Title :- {ticket.title}</Card.Title>
                                                            <Card.Subtitle className="mb-2 text-muted">name:- {ticket.username}</Card.Subtitle>
                                                            <Card.Text>
                                                                discription :- {ticket.content}
                                                            </Card.Text>
                                                            <Button variant='secondary' onClick={(e) => { handleRestore(e, ticket, i, el) }} className="btn btn-sm">
                                                                restore
                                                            </Button>

                                                        </Card.Body>
                                                    </Card><br />
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        })
                    }
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalRestore;