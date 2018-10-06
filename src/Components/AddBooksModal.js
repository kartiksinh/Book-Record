import React, { Component } from 'react';
import { Form, Modal, ModalHeader, ModalBody, ModalFooter, Input, Button,FormGroup, Label} from 'reactstrap';


class AddBooksModal extends Component{
  constructor(props) {
    super(props);
    this.state = {
        name : "",
        author : "",
        isRead : false
    }
  }

  updateTitle = (e) =>{
    this.setState({name: e.target.value});
  }
  updateAuthor = (e) =>{
    this.setState({author: e.target.value});
  }
  updateReadStatus = (e) =>{
    this.setState({ isRead : e.target.checked}); 
  }
  addBook = ()=> {
    this.props.addBook(this.state);
    this.resetBook();
  }
  resetBook = (e) =>{
    this.setState({
      name: "",
      author: "",
      isRead : false
    });
  }

  render (){
    return (
      <Form>        
        <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
          <ModalHeader toggle={this.props.toggle}>Add New Book</ModalHeader>
          <ModalBody>
            
            <FormGroup>
              <Label for="exampleEmail">Book Name</Label>
              <Input type="email" onChange={this.updateTitle} value={this.state.name} placeholder="Book's Name" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Author</Label>
              <Input type="email" onChange={this.updateAuthor} value={this.state.author} placeholder="Author's Name" />
            </FormGroup>

            <FormGroup check>
              <Label check>
                <Input onChange={this.updateReadStatus} type="checkbox" checked={this.state.isRead}/>{' '}
                Read?
              </Label>
            </FormGroup>
            
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addBook}>Submit</Button>{' '}
            <Button color="secondary" onClick={this.resetBook}>Reset</Button>
          </ModalFooter>
        </Modal>
      </Form>
    );
  }
}

export default AddBooksModal;