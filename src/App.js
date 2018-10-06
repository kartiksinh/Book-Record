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
      ]
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
      books:books,
      modal : !this.state.modal
    });

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
                this.state.books.map(function(val, index){
                  return(
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>{val.name}</td>
                      <td>{val.author}</td>
                      <td>{val.isRead? 'Yes' : 'No'}</td>
                      <th><Button color="primary">Update </Button>{' '}</th>
                      <th><Button color="danger">Remove</Button>{' '}</th>
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
                   />
      </div>
    );
  }
}

export default App;
