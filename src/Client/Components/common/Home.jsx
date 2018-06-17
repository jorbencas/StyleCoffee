import React from 'react';
import { categoriesbook, categoriescoffee,loadListBooks } from '../../actions';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { Link } from "react-router";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { React_Bootstrap_Carousel } from "react-bootstrap-carousel";

const styles = { height: 400, width: "100%" };

    const mapStateToProps= state => {
        return {
        user:state.loginReducer.user,
        books: state.productsList.books,
        coffees:state.productsOffer.Coffee
        };
    }
  
    const mapDispatchToProps = dispatch =>{
        return bindActionCreators({categoriesbook,categoriescoffee,loadListBooks}, dispatch);
    }

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            listbooks:[],
            autoplay: true,
            leftIcon:<span className="fa fa-arrow-circle-left" />,
            rightIcon:<span className="fa fa-arrow-circle-right" />
        };
        this.handleClick = this.handleClick.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.slideNext = this.slideNext.bind(this);
        this.slidePrev = this.slidePrev.bind(this);
        this.goToSlide = this.goToSlide.bind(this);
        this.autoplay = this.autoplay.bind(this);
        this._changeIcon = this._changeIcon.bind(this);
    }   
    componentWillMount(){
        this.props.loadListBooks();
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        this.setState({
            listbooks:nextProps.books
        });
    }

    handleClick(event){
        /*
            <img src="./photos/cafe.png" width="140px" height="190px" alt=""/>
            <img src="./photos/libro.png" width="185px" height="170px" alt=""/>
        */
    }

    onSelect(active, direction){
        console.log(`active=${active} && direction=${direction}`);
      };
      slideNext(){
        this.slider.slideNext();
      };
      slidePrev(){
        this.slider.slidePrev();
      };
      goToSlide(){
        this.slider.goToSlide(4);
      };
      autoplay() {
        this.setState({ autoplay: !this.state.autoplay });
      };
      _changeIcon(){
       
        if (this.state.leftIcon && this.state.rightIcon) {
          this.setState({
            leftIcon: <span className="fa fa-arrow-circle-right" />,
            rightIcon: <span className="fa fa-arrow-circle-left" />
          });
        } else {
          this.setState({
            leftIcon: <span className="fa fa-glass" />,
            rightIcon: <span className="fa fa-music" />
          });
        }
      };

    render() {
        return(
        <div>
            <div className="container-fluid">
            <div className="row">
              <div className="col-md-12" style={{ marginTop: 20 }}>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this._changeIcon}
                  >
                    Change Icon
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.slidePrev}
                  >
                    Slider prev
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.slideNext}
                  >
                    Slider next
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.goToSlide}
                  >
                    Go to slide 4
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.autoplay}
                  >
                    {this.state.autoplay ? "Stop Autoplay" : "Start Autoplay"}
                  </button>
                </div>
              </div>
              <div className="col-md-12" style={{ marginTop: 20 }}>
                <React_Bootstrap_Carousel
                  animation={true}
                  autoplay={this.state.autoplay}
                  slideshowSpeed={7000}
                  leftIcon={this.state.leftIcon}
                  rightIcon={this.state.rightIcon}
                  onSelect={this.onSelect}
                  ref={r => (this.slider = r)}
                  version={4}
                >
                  <div style={{ height: 400 }}>
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src="https://www.w3schools.com/bootstrap/ny.jpg"
                    />
                    <div className="carousel-caption">Image</div>
                  </div>
                  <div style={{ height: 400, backgroundColor: "aqua" }}>
                    <div className="row">
                        <div className=" col-md-8">
                            <img src="http://placehold.it/100x100" alt=""/>
                        </div>
                        <article className="col-md-12 text-right">
                            <p>{ 'Image' }</p>
                            <p>{'Image'}</p>
                            <p>{'Image'}</p>
                            <h2>{'Image'}€</h2>
                        </article>
                    </div>
                    <div className="carousel-caption">Video</div>
                  </div>
                  <div style={{height: 400,backgroundColor: "lightpink"}}>
                    <div className="carousel-center">center Text</div>
                    <div className="carousel-caption">Text</div>
                  </div>
                  <div style={{ height: 400, backgroundColor: "lightblue" }}>
                    <div className="carousel-caption">Text</div>
                  </div>
                  <div style={{ height: 400, backgroundColor: "lightblue" }}>
                    <div className="carousel-center">
                      Hola Pepito
                    </div>
                    <div className="carousel-caption">Youtube</div>
                  </div>
                </React_Bootstrap_Carousel>
              </div>
            </div>
          </div>
          
            <div className="container">
            <h1>Tenga el placer de probar toda clase de cafés</h1>
            <ul className="nav nav-tabs nav-justified">
              <li className="active"><Link to={'/coffees/capuchino'} onClick={()=>{categoriescoffee('capuchino')}}> Capuchino</Link></li>
              <li><Link to={'/coffees/capuchino'} onClick={()=>{categoriescoffee('capuchino')}}> Bombón</Link></li>
              <li><Link to={'/coffees/capuchino'} onClick={()=>{categoriescoffee('capuchino')}}> Descafeinado</Link></li>
              <li><Link to={'/coffees/capuchino'} onClick={()=>{categoriescoffee('capuchino')}}> Cortado</Link></li>
              <li><Link to={'/coffees/capuchino'} onClick={()=>{categoriescoffee('capuchino')}}> Café solo</Link></li>
              <li><Link to={'/coffees/capuchino'} onClick={()=>{categoriescoffee('capuchino')}}> Cafe con leche</Link></li>
              <li><Link to={'/coffees/capuchino'} onClick={()=>{categoriescoffee('capuchino')}}> Expreso Doble</Link></li>
              <li><Link to={'/coffees/capuchino'} onClick={()=>{categoriescoffee('capuchino')}}> Café Jamaicano</Link></li>
              <li><Link to={'/coffees/capuchino'} onClick={()=>{categoriescoffee('capuchino')}}> Làgrima</Link></li>
              <li><Link to={'/coffees/capuchino'} onClick={()=>{categoriescoffee('capuchino')}}> Instantaneo</Link></li>
            </ul> 
            <h1>Disfrute de sus generos favoritos</h1>
            <ul className="nav nav-tabs nav-justified">
              <li  className="active"><Link  to={'/books/capuchino'} onClick={()=>{categoriesbook('capuchino')}}> Novela Contemporania</Link></li>
              <li><Link to={'/books/capuchino'} onClick={()=>{categoriesbook('capuchino')}}> Libros de Auto ayuda</Link></li>
              <li><Link to={'/books/capuchino'} onClick={()=>{categoriesbook('capuchino')}}> Infantil</Link></li>
              <li><Link to={'/books/capuchino'} onClick={()=>{categoriesbook('capuchino')}}> Novela Juvenil</Link></li>
              <li><Link to={'/books/capuchino'} onClick={()=>{categoriesbook('capuchino')}}> Comedia</Link></li>
              <li><Link to={'/books/Thriller'} onClick={()=>{categoriesbook('capuchino')}}> Thriller</Link></li>
              <li><Link to={'/books/accion'} onClick={()=>{categoriesbook('capuchino')}}> Acción</Link></li>
              <li><Link to={'/books/romantica'} onClick={()=>{categoriesbook('capuchino')}}> Romance</Link></li>
              <li><Link to={'/books/Drama'} onClick={()=>{categoriesbook('Drama')}}> Drama</Link></li>
              <li><Link to={'/books/Novela Negra'} onClick={()=>{categoriesbook('Novela Negra')}}> Novela Negra</Link></li>
            </ul> 
          </div>  
        </div>  
        );
    }
}
  
export default connect (mapStateToProps,mapDispatchToProps) (Home);