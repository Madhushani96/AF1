import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppPage from '../App';
import UpdateB from './UpdatBook';
import SearchB from './SearchBook';

class UpdateBook extends Component {

    constructor(props){
        super(props);
        this.state={
            name:null,
            author:null,
            price:null
        }

    }

    addBook=()=>{
        ReactDOM.render(<AppPage/>,document.getElementById('root'));
    }

    updateBook=()=>{
        ReactDOM.render(<UpdateB/>,document.getElementById('root'));
    }

    searchBook=()=>{
        ReactDOM.render(<SearchB/>,document.getElementById('root'));
    }


    searchB=(name)=>{

        fetch('http://localhost:8085/book/'+name,{
            method:'GET',
            headers:{'Content-Type':'application/json'}
        }).then(response=>{
            return response.json();
        }).then(data=>{

            for(var book of data){
                var name=book.name;
                var author=book.author;
                var price=book.price;
            }

            this.setState({
                name:name,
                author:author,
                price:price
            })

        }).catch(err=>{
            alert(err);
        })

    }

    UpdateB=(name,author,price)=>{

        var data={"name":name,"author":author,"price":price};

        console.log("Name "+name);
        console.log(data);

        if(name==''||author==''||price==''){
            alert('One or more fields empty please fill all the fields');
        }

        else{
            fetch('http://localhost:8085/book/'+data.name,{

                method:'PUT',
                body:JSON.stringify(data),
                headers:{'Content-Type':'application/json'}
            }).then(response=>{
                return response.json();
            }).then(data=>{
                alert('Update book');
            }).catch(err=>{
                alert(err);
            })
        }
    }


    render() {
        var name=JSON.stringify(this.state.name);
        var author=JSON.stringify(this.state.author);
        var price=JSON.stringify(this.state.price);
        return (

            <div>
                <form>
                    <button type="button" onClick={()=>{this.addBook()}}>Add Book</button>
                    <button type="button" onClick={()=>{this.updateBook()}}>Update Book</button>
                    <button type="button" onClick={()=>{this.searchBook()}}>Search Book</button>
                </form>

                <h1>Update Book</h1>
                <p>Enter Book Name: <input type="text" id="name"/><button type="submit" onClick={()=>{this.searchB(document.getElementById('name').value)}}>Search</button></p>

                <h3>Edit Here</h3>
                <p>Name: <input type="text" placeholder={name} id='name'/></p>
                <p>Author: <input type="text" placeholder={author} id='author'/></p>
                <p>Price: <input type="text" placeholder={price} id='price'/></p>
                <button type={"submit"} onClick={()=>{this.UpdateB(document.getElementById('name').value,document.getElementById('author').value,document.getElementById('price').value)}}>Update</button>
            </div>

        );
    }
}

export default UpdateBook;
