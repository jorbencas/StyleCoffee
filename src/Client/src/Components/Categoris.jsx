import React from 'react';

class Categoris extends React.Component {
    constructor(props){
        super(props);
        //T.setTexts(Settings.getTraductedText(), { MDFlavor: 0 });        
       // T.setTexts(require('../lib/i18n/' + Settings.getLanguage() + '.json'))
       /* this.state = {                
          motto:T.translate("motto")    
        }; */      
    }    
   /* componenliidMount() {
        this.subscription = events.subscribe('settings/change',(obj) => {  
            //T.setTexts(Settings.getTraductedText(), { MDFlavor: 0 })
            T.setTexts(require('../lib/i18n/' + Settings.getLanguage() + '.json'))
            this.setState({
                motto:T.translate("motto")     
            });               
        });      
    }

    componentWillUnmount() {
        this.subscription.remove();
    }
*/
    render() {               
        return (
           <div>
                <h1>Tenga el placer de probar toda clase de cafés</h1>
                    <ul id="list">
                        <li className="item">
                        <img src="./assets/cafe.png" width="140px" height="190px" alt=""/>
                        <br/>
                        Capuchino</li>
                        <li className="item">
                        <img src="./assets/cafe.png" width="140px" height="190px" alt=""/>
                        <br/>
                        Bombon</li>
                        <li className="item">
                        <img src="./assets/cafe.png" width="140px" height="190px" alt=""/>
                        <br/>Descafeinado</li>
                        <li className="item">
                        <img src="./assets/cafe.png" width="140px" height="190px" alt=""/>
                        <br/>
                        Cortado</li>
                        <li className="item">
                        <img src="./assets/cafe.png" width="140px" height="190px" alt=""/>
                        <br/>
                        Café solo</li>
                        <li className="item">
                        <img src="./assets/cafe.png" width="140px" height="190px" alt=""/>
                        <br/>
                        Cafe con leche</li>
                        <li className="item">
                        <img src="./assets/cafe.png" width="140px" height="190px" alt=""/>
                        <br/>
                        Acción</li>
                        <li className="item">
                        <img src="./assets/cafe.png" width="140px" height="190px" alt=""/>
                        <br/>
                        Romance</li>
                        <li className="item">
                        <img src="./assets/cafe.png" width="140px" height="190px" alt=""/>
                        <br/>
                        Drama</li>
                        <li className="item">
                        <img src="./assets/cafe.png" width="140px" height="190px" alt=""/>
                        <br/>
                        Novela Negra</li>
                    </ul> 
                    <h1>Disfrute de sus generos favoritos</h1>
                    <ul id="list">
                        <li className="item">
                        <img src="./assets/libro.png" width="185px" height="170px" alt=""/>
                        <br/>
                        Capuchino</li>
                        <li className="item">
                        <img src="./assets/libro.png" width="185px" height="170px" alt=""/>
                        <br/>
                        Bombon</li>
                        <li className="item">
                        <img src="./assets/libro.png" width="185px" height="170px" alt=""/>
                        <br/>
                        Descafeinado</li>
                        <li className="item">
                        <img src="./assets/libro.png" width="185px" height="170px" alt=""/>
                        <br/>
                        Cortado</li>
                        <li className="item">
                        <img src="./assets/libro.png" width="185px" height="170px" alt=""/>
                        <br/>
                        Café solo</li>
                        <li className="item">
                        <img src="./assets/libro.png" width="185px" height="170px" alt=""/>
                        <br/>
                        Cafe con leche</li>
                        <li className="item">
                        <img src="./assets/libro.png" width="185px" height="170px" alt=""/>
                        <br/>
                        Acción</li>
                        <li className="item">
                        <img src="./assets/libro.png" width="185px" height="170px" alt=""/>
                        <br/>
                        Romance</li>
                        <li className="item">
                        <img src="./assets/libro.png" width="185px" height="170px" alt=""/>
                        <br/>
                        Drama</li>
                        <li className="item">
                        <img src="./assets/libro.png" width="185px" height="170px" alt=""/>
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

export default Categoris;