import React from 'react';
import { getCookie, setCookie, deleteCookie } from '../lib/utils.js';
import { Search  } from '../services/services';
import { Link } from "react-router-dom";
import CoffeeListPage from './CoffeeListPage';
import App from './App.jsx';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            subject:'',
            path:''
        }; 
        console.log(this.state);
        this.handleInputChange = this.handleInputChange.bind(this); 
        this.handleClick = this.handleClick.bind(this);  
    }   
    
    componentDidMount(){
        $('#books').attr('checked', true);
        $('#rdb1').addClass('cheked');
        setCookie('kindsearch','true',12);
    }
    componentWillUnmount(){
        deleteCookie('kindsearch');
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
        if ($('#rdb1').hasClass('checked') && (getCookie('kindsearch') == 'false')) {
            $('#rdb1').removeClass('cheked');
        }

        $('#books').on('click', function(){
            if (getCookie('kindsearch') == 'false'){
                console.log(getCookie('kindsearch'));
                $('#rdb2').removeClass('cheked');
                $('#rdb1').addClass('cheked');
                setCookie('kindsearch','true',12);  
                setCookie('path','/book/',12);
            }
            
        });
    
        $('#coffees').on('click', function() {
            if (getCookie('kindsearch') == 'true') {
                console.log(getCookie('kindsearch'));
                $('#rdb1').removeClass('cheked');
                $('#rdb2').addClass('cheked');
                setCookie('kindsearch','false',12); 
                setCookie('path','/coffees/',12);
            }
           
        });
        this.setState({path:getCookie('path')});


        console.log(this.state);

    }
  

    render() {
        const param = this.state.path + this.state.subject;
        console.log(param);
        return(
            <div className="grid-main" id="home">
                <section id="search-zone" className=" search-zone">
                    <section className="section">
                        <article id="rdb1" className="checkbox " > <input type="radio" name="radio" onClick={this.handleClick} id="books" />Books</article>
                        <article id="rdb2" className="checkbox " > <input type="radio" name="radio" onClick={this.handleClick} id="coffees"/> Coffes</article>
                    </section>
                    <input id="search" placeholder="Search everything that you find" onKeyPress={this.handleInputChange} type="text"/>
                    <Link className="btn-search" to={param} >Search</Link>
                </section>

            <h1>Tenga el placer de probar toda clase de cafés</h1>
                <ul id="list">
                    <li className="item"><Link to={'/coffees/capuchino'}>
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