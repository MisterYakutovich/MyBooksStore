import React,{useState} from "react"
import { Modal,Form,Button } from "react-bootstrap"
import { createAuthor } from "../../http/booksApi"

const CreateAuthor=({show,onHide})=>{
    const [value,setValue]=useState("")

    const addAuthor=()=>{
        createAuthor({name:value}).then(data=>{
            setValue("")
            onHide()
        })
    }  //onHide функция для скрытия модального окна,show пропс

    return(
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
      
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                   Добавить нового автора
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
            <Button variant="outline-success" onClick={addAuthor}>Добавить</Button>
            <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        </Modal.Footer>
      </Modal>
    )
}
export default CreateAuthor