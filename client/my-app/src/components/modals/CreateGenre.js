import React, { useState } from "react";
import {Modal,Button,Form} from "react-bootstrap"
import {createGenre} from "../../http/booksApi"

const CreateGenre=({show,onHide})=>{
    const [value,setValue]=useState("")

    const addGenre=()=>{
        createGenre({name:value}).then(data=>{
            setValue("")
            onHide()
        })
    }

    return(
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
          
        <Modal.Header closeButton>
           <Modal.Title id="contained-modal-title-vcenter">
                   Добавить новый жанр
           </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <Form>
               <Form.Control placeholder={"Ведите имя автора"}
                            value={value}
                            onChange={event=>setValue(event.target.value)}/>
                              
           </Form>
        </Modal.Body>
           <Modal.Footer>
               <Button variant="outline-success" onClick={addGenre}>Добавить</Button>
               <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
           </Modal.Footer>
        </Modal>
    )
}
export default CreateGenre;