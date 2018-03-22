import React from 'react';
import { getCookie, setCookie } from '../lib/utils.js';
import {  Search  } from '../services.js';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CoffeeListPage from './CoffeeListPage';
import Menu from './Menu';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            subject:''
        }; 
        this.handleInputChange = this.handleInputChange.bind(this); 
        this.handleClick = this.handleClick.bind(this);  
    }   
    
    componentDidMount(){
        $('#books').attr('checked', true);
        $('#rdb1').addClass('cheked');
        setCookie('kindsearch','false',12);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
       
        this.setState({
            subject: value
        });
        console.log(this.state);
    }

    handleClick(event){
        
        $('#books').on('click', function(){
            if (getCookie('kindsearch') == 'false'){
                console.log(getCookie('kindsearch'));
                $('#rdb2').removeClass('cheked');
                $('#rdb1').addClass('cheked');
                setCookie('kindsearch','true',12);  
            }
        });
           
        $('#coffees').on('click', function() {
            if (getCookie('kindsearch') == 'true') {
                console.log(getCookie('kindsearch'));
                $('#rdb1').removeClass('cheked');
                $('#rdb2').addClass('cheked');
                setCookie('kindsearch','false',12); 
            }
        });
    }
  

    render() {
        return(
            <div className="grid-main" id="home">
                <section id="search-zone" className="search-zone">
                    <section className="section">
                        <article id="rdb1" className="checkbox " > <input type="radio" name="radio" onClick={this.handleClick} id="books" />Books</article>
                        <article id="rdb2" className="checkbox " > <input type="radio" name="radio" onClick={this.handleClick} id="coffees"/> Coffes</article>
                    </section>
                    <input id="search" placeholder="Search everything that you find" onKeyPress={this.handleInputChange} type="text"/>
                    <Link to={'/Coffee/:' + this.state.subject} >Search</Link>
                </section>

            <h1>Tenga el placer de probar toda clase de cafés</h1>
                <ul id="list">
                    <li className="item"><Link to={'/Coffee/:capuchino'}>
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/>Capuchino</Link></li>
                    <li className="item">
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/> Bombon</li>
                    <li className="item">
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/>Descafeinado</li>
                    <li className="item">
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/> Cortado</li>
                    <li className="item">
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/>Café solo</li>
                    <li className="item">
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/>Cafe con leche</li>
                    <li className="item">
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/> Acción</li>
                    <li className="item">
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/> Romance</li>
                    <li className="item">
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/> Drama</li>
                    <li className="item">
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/> Novela Negra</li>
                </ul> 
                <h1>Disfrute de sus generos favoritos</h1>
                <ul id="list">
                    <li className="item">
                    <img src="./assets/photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/>
                    Capuchino</li>
                    <li className="item">
                    <img src="./assets/photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/>
                    Bombon</li>
                    <li className="item">
                    <img src="./assets/photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/>
                    Descafeinado</li>
                    <li className="item">
                    <img src="./assets/photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/>
                    Cortado</li>
                    <li className="item">
                    <img src="./assets/photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/>
                    Café solo</li>
                    <li className="item">
                    <img src="./assets/photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/>
                    Cafe con leche</li>
                    <li className="item">
                    <img src="./assets/photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/>
                    Acción</li>
                    <li className="item">
                    <img src="./assets/photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/>
                    Romance</li>
                    <li className="item">
                    <img src="./assets/photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/>
                    Drama</li>
                    <li className="item">
                    <img src="./assets/photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/>
                    Novela Negra</li>
                </ul> 
                <section className="listbatido">
                <h1>Disponemos de gran variedad de batidos pensados especialmente para ti:</h1>
                <ul id="list">
                <li className="item"><img src="http://cafeconlibrosmalaga.com/wp-content/themes/cafe_libros/img/batido.png" width="100px" height="170px" alt=""/></li>
                    <li className="item"><img src="http://cafeconlibrosmalaga.com/wp-content/themes/cafe_libros/img/batido.png" width="100px" height="170px" alt=""/></li>
                    <li className="item"><img src="http://cafeconlibrosmalaga.com/wp-content/themes/cafe_libros/img/batido.png" width="100px" height="170px" alt=""/></li>
                    <li className="item"><img src="http://cafeconlibrosmalaga.com/wp-content/themes/cafe_libros/img/batido.png" width="100px" height="170px" alt=""/></li>
                    <li className="item"><img src="http://cafeconlibrosmalaga.com/wp-content/themes/cafe_libros/img/batido.png" width="100px" height="170px"  alt=""/></li>
                </ul>
                </section>
        </div>
        );
    }
}

export default Home;