import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppPage from '../App';
import UpdateB from './UpdatBook';
import SearchB from './SearchBook';

class SearchBook extends Component {

    constructor(props){
        super(props);
        this.state={
            name:"",
            author:"",
            price:""
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
                name: name,
                author: author,
                price: price
            })

        }).catch(err=>{
            alert(err);
        })

    }


    buy=(price,qty,name)=>{

        var data={"name":this.state.name,"qty":qty,"price":this.state.price};
        console.log(data);
        fetch('http://localhost:3009/book/',{
            method:'POST',
            body:JSON.stringify(data),
            headers:{'Content-Type':'application/json'}
        }).then(response=>{
            return response;
        }).then(data=>{
            alert('Purchase success');
        }).catch(err=>{
            alert(err);
        })


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

                <h1>Search Book</h1>
                <p>Enter Book Name: <input type="text" id="name"/><button type={"submit"} onClick={()=>{this.searchB(document.getElementById('name').value)}}>Search</button></p>
                <p>Name: {name}</p>
                <p>Author: {author}</p>
                <p>Price:{price} </p>
                <p>Qty: <input type={"text"} id={"qty"}/><button type={"submit"} onClick={()=>{this.buy(price,document.getElementById('qty').value,name)}}>BUY</button></p>
            </div>
        );
    }
}

export default SearchBook;
