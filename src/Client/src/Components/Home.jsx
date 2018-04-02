import React from 'react';
import { getCookie, setCookie, deleteCookie } from '../lib/utils.js';
import { Search  } from '../services/services';
import { Link } from "react-router";
import CoffeeListPage from './CoffeeListPage';
import App from './App.jsx';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            subject:'',
            path:'/book/'
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
        let that = this;
        $('#books').on('click', function(){
            if (getCookie('kindsearch') == 'false'){
                console.log(getCookie('kindsearch'));
                $('#rdb2').removeClass('cheked');
                $('#rdb1').addClass('cheked');
                setCookie('kindsearch','true',12);  
                that.setState({path:'/book/'});
            }
        });
    
        $('#coffees').on('click', function() {
            if (getCookie('kindsearch') == 'true') {
                console.log(getCookie('kindsearch'));
                $('#rdb1').removeClass('cheked');
                $('#rdb2').addClass('cheked');
                setCookie('kindsearch','false',12); 
                that.setState({path:'/coffees/'});
            }
        });
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
                    <br/> Bombón</li>
                    <li className="item">
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/>Descafeinado</li>
                    <li className="item">
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/>Cortado</li>
                    <li className="item">
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/>Café solo</li>
                    <li className="item">
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/>Cafe con leche</li>
                    <li className="item">
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/> Expreso Doble</li>
                    <li className="item">
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/> Café Jamaicano</li>
                    <li className="item">
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/> Làgrima</li>
                    <li className="item">
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/>Instantaneo</li>
                </ul> 
                <h1>Disfrute de sus generos favoritos</h1>
                <ul id="list">
                    <li className="item">
                    <img src="./assets/photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/>
                    Novela Contemporania</li>
                    <li className="item">
                    <img src="./assets/photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/>
                    Libros de Auto ayuda</li>
                    <li className="item">
                    <img src="./assets/photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/>
                    Infantil</li>
                    <li className="item">
                    <img src="./assets/photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/>
                    Novela Juvenil</li>
                    <li className="item">
                    <img src="./assets/photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/>
                    Comedia</li>
                    <li className="item">
                    <img src="./assets/photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/>
                    Thriller</li>
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
        </div>
        );
    }
}

export default Home;