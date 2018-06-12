import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppPage from './App';
import UpdateBook from './Components/UpdatBook';
import SearchB from './Components/SearchBook';
import './App.css';

class App extends Component {

  addBook=()=>{
       ReactDOM.render(<AppPage/>,document.getElementById('root'));
  }

  updateBook=()=>{
        ReactDOM.render(<UpdateBook/>,document.getElementById('root'));
  }

  searchBook=()=>{
      ReactDOM.render(<SearchB/>,document.getElementById('root'));
  }

  addNewBook(name,author,price) {

      var data = {"name": name, "author": author, "price": price};
      console.log(data);
      fetch('http://localhost:8085/book/', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {'Content-Type': 'application/json'}
      }).then(response => {
          return response.json();
      }).then(data => {
          alert('Book Added');
      }).catch(err => {
          alert(err);
      })
  }


  render() {
    return (

        <div>
            <form class ="container">
                <button type="button" onClick={()=>{this.addBook()}}>Add Book</button>
                <button type="button" onClick={()=>{this.updateBook()}}>Update Book</button>
                <button type="button" onClick={()=>{this.searchBook()}}>Search Book</button>
            </form>


            <h1>Add Book</h1>
            <p>Name: <input type="text" id="name"/></p>
            <p>Author: <input type="text" id="author"/></p>
            <p>Price: <input type="text" id="price"/></p>
            <button type="submit" onClick={()=>{this.addNewBook(document.getElementById('name').value,document.getElementById('author').value,document.getElementById('price').value)}}>Submit</button>
        </div>

    );
  }
}

export default App;
