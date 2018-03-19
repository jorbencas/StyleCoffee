import React from 'react';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            subject:''
        }; 
        this.handleInputChange = this.handleInputChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this);     
    }   
    
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
       
        this.setState({
          [name]: value
        });
    
        console.log(this.state);
    }
    
    handleSubmit(event) {
        event.preventDefault();
        if (condition) {
            
        }else if (){

        }
        SearchService(this.state);
    }

    savestate(){
        
    }
  
    render() {
        return(
            <div className="grid-main" id="home">
                <section id="search-zone" className="search-zone">
                <section className="section">
                        <article className="checkbox" > <input type="radio" name="radio" id="" />Books</article>
                        <article className="checkbox" > <input type="radio" name="radio" id=""/> Coffes</article>
                    </section>
                    <input id="search" placeholder="Search everything that you find" onKeyUp={this.handleInputChange()} type="text"/>
                    <input type="submit" onSubmit={this.handleSubmit()}>Search</input>
                </section>

            <h1>Tenga el placer de probar toda clase de cafés</h1>
                <ul id="list">
                    <li className="item">
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/>
                    Capuchino</li>
                    <li className="item">
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/>
                    Bombon</li>
                    <li className="item">
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/>Descafeinado</li>
                    <li className="item">
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/>
                    Cortado</li>
                    <li className="item">
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/>
                    Café solo</li>
                    <li className="item">
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/>
                    Cafe con leche</li>
                    <li className="item">
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/>
                    Acción</li>
                    <li className="item">
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/>
                    Romance</li>
                    <li className="item">
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/>
                    Drama</li>
                    <li className="item">
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/>
                    Novela Negra</li>
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