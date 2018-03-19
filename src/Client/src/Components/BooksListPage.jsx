import React from 'react';
import BooksDetailPage from './BooksDetailPage';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactDOM  from 'react-dom';

class BooksListPage extends React.Component {
    constructor(props){
        super(props);   
        this.state = {                
            components: [],
          };      
          
          this.UserList = this.UserList.bind(this);   
    }    

    componentWillMount(){
      console.log('Mount');
    }

    componentDidMount() {
        this.UserList();
      }
    
      UserList(event) {
        var xmlhttp = new XMLHttpRequest();
        var url = "http://localhost:3001/api/books";
        let that=this;
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var myArr = JSON.parse(this.responseText);
                console.log(myArr);
                that.setState({
                    components: myArr.books
                  });
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.setRequestHeader('Content-Type', 'text/plain');
        xmlhttp.send();
      }

     /* componentWillUnmount(){
        console.log('Unmount');
      }*/

    render() {               
        const component = this.state.components.map((item) => (
            <div>
                <img src={item.image} width="130px" height="180px" alt=""/>
                <p>{ item.title }</p>
                <Link to={'/Books/Book/'+item.id}>details</Link>
            </div>
          ));
          return (
            <div id="listbooks">
              <div className="grid-main">
                <div>Home</div>
                <div>{ component }</div>
              </div>
            </div>
          );
    }
}

export default BooksListPage;