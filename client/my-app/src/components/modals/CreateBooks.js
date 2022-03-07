
import { observer } from "mobx-react-lite"
import React,{ useContext, useEffect,useState } from "react"
import {Form,Button,Modal,Dropdown,Row,Col} from "react-bootstrap"
import { Context } from "../../index"
import {fetchGenre,fetchAuthor,createBooks} from "../../http/booksApi"

const CreateBooks=observer(({show,onHide})=>{
  const {book}=useContext(Context)
  const [name,setName]=useState("")
  const [price,setPrice]=useState(0)
  const [file,setFile]=useState(null)
  const [info,setInfo]=useState([])
  useEffect(()=>{
    fetchGenre().then(data=>book.setGenres(data))
    fetchAuthor().then(data=>book.setAuthors(data))
    
   
},[])
 

    const addInfo=()=>{
      setInfo([...info,{title:"",discription:"",number:Date.now()}])
    }
    const deleteInfo=(number)=>{
      setInfo(info.filter(i=>i.number!==number))
    }
    const changeInfo=(key,value,number)=>{
      setInfo(info.map(i=>i.number===number ? {...i,[key]:value}:i))
    }
    const addBooks=()=>{
      console.log(info)
      const formData=new FormData()
      formData.append("name",name)
      formData.append("price",`${price}`)
      formData.append("img",file)
      formData.append("authorId",book.selectedAuthor.id)
      formData.append("genreId",book.selectedGenre.id)
      formData.append("info",JSON.stringify(info))
      createBooks(formData).then(data=>onHide())
    }
    const selectFile=e=>{
      setFile(e.target.files[0])
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
                 Добавить новую книгу
            </Modal.Title>
        </Modal.Header>
           <Modal.Body>
             <Form>
                 <Dropdown className="mt-2">
                      <Dropdown.Toggle>{book.selectedGenre.name || "Выбрать жанр"}</Dropdown.Toggle>
                      <Dropdown.Menu>
                          {book.genres.map(gen=>
                      <Dropdown.Item onClick={()=>book.setSelectedGenre(gen)} key={gen.id}>{gen.name}</Dropdown.Item>
                 )}
                      </Dropdown.Menu>
                 </Dropdown>

                 <Dropdown className="mt-2">
                      <Dropdown.Toggle>{book.selectedAuthor.name || "Выбрать автора"}</Dropdown.Toggle>
                      <Dropdown.Menu>
                           {book.authors.map(au=>
                      <Dropdown.Item onClick={()=>book.setSelectedAuthor(au)} key={au.id} >{au.name}</Dropdown.Item>
                           )}
                      </Dropdown.Menu>
                 </Dropdown>
                  <Form.Control  value={name}
                                onChange={e=>setName(e.target.value)}
                                className="mt-2" 
                                placeholder="Введите название книги"></Form.Control>
                  <Form.Control className="mt-2" 
                                type="number"
                                placeholder="Введите цену книги"
                                value={price}
                                onChange={e=>setPrice(Number(e.target.value))}></Form.Control>
                                
                  <Form.Control className="mt-2" 
                                type="file"
                                onChange={selectFile} ></Form.Control>
                  <hr/>
                  <Button className={"outline-dark"} onClick={addInfo}>Добавить характеристики</Button>
                  {info.map(i=>(
                    <Row className="mt-2" key={i.number}>
                      <Col md={4}>
                      <Form.Control placeholder="Введите название характеристики"
                                    value={i.title}
                                    onChange={(e)=>changeInfo("title",e.target.value,i.number)}></Form.Control>
                      </Col>
                      <Col md={4}>
                      <Form.Control placeholder="Введите описание"
                                    value={i.discription}
                                    onChange={(e)=>changeInfo("discription",e.target.value,i.number)}></Form.Control>
                      </Col>
                      <Col md={4}>
                        
                      <Button variant="outline-danger" onClick={()=>deleteInfo(i.number)}>Удалить</Button>
                        
                      </Col>
                    </Row>
                  ))}
    
         </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-success" onClick={addBooks}>Добавить</Button>
          <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        </Modal.Footer>
      </Modal>
    )
})
export default CreateBooks;