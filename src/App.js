import React, { Component } from 'react';
// import './App.css';
import {Badge, Button,Table,Alert} from 'reactstrap';
import AddBooksModal from './Components/AddBooksModal';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal: false,
      books: [
        {
          name: 'Harry Potter',
          author: 'JK Rowling',
          isRead: false,
        },
        {
          name: 'Wings of fire',
          author: 'Dr. APJ Abdul Kalaam',
          isRead: false,
        },
        {
          name: 'Limitless',
          author: 'NZT',
          isRead: false,
        },
        {
          name: '3 Idiots',
          author: 'Chetan Bhagat',
          isRead: false,
        }
      ],
      book: {
        name: "",
        author: "",
        isRead: false
      }
    }
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  addBook = (newBook) =>{
    var books = JSON.parse(JSON.stringify(this.state.books));
    books.unshift(newBook);
    this.setState({
      books,
      modal : !this.state.modal,
      book:{
         name: "",
         author: "",
         isRead: false,
      }
    });
  }
 deleteBook(index) {
    var books = JSON.parse(JSON.stringify(this.state.books));
    books.splice(index, 1)
    this.setState({
      books
    });
  }

  updateBook(val){
    this.setState({
      selectedBook: val,
      modal: !this.state.modal
    })
  }

  updateTitle = (title)=>{
    var book = Object.assign({}, this.state.book);
    book.name = title;
    this.setState({book: book});
  }
  updateAuthor = (author) =>{
    var book = Object.assign({}, this.state.book);
    book.author = author;
    this.setState({book: book});
  }
  updateReadStatus = (isRead) => {
    var book = Object.assign({}, this.state.book);
    book.isRead = isRead;
    this.setState({book: book});
  }

  

  render() {

    return (
      <div className="App">
        <div>
          <h2>Books <Badge color="secondary"></Badge></h2>
          <Alert color="warning">
            This is a warning alert — check it out!
          </Alert>

          <Button color="danger" onClick={this.toggle}>Add Book</Button>
          <Table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Book</th>
                <th>Author</th>
                <th>Read ?</th>
                <th>Edit</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.books.map((val, index) => {
                  return(
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>{val.name}</td>
                      <td>{val.author}</td>
                      <td>{val.isRead? 'Yes' : 'No'}</td>
                      <th><Button color="primary" onClick={()=> {this.updateBook(val)}}>Update </Button>{' '}</th>
                      <th><Button color="danger" onClick={()=>{this.deleteBook(index)}}>Remove</Button>{' '}</th>
                    </tr>
                    )
                })
              }
              
            </tbody>
          </Table>
        </div>

        <AddBooksModal
                    isOpen={this.state.modal} 
                    toggle={this.toggle}
                    addBook={this.addBook}
                    selectedBook={this.state.selectedBook}
                    book={this.state.book}
                    updateTitle={this.updateTitle}
                    updateAuthor={this.updateAuthor}
                    updateReadStatus={this.updateReadStatus}
                   />
      </div>
    );
  }
}

export default App;
