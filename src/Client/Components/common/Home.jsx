import React from 'react';
import { categoriesbook, categoriescoffee,loadListBooks, loadlistCoffees } from '../../actions';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { Link } from "react-router";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { React_Bootstrap_Carousel } from "react-bootstrap-carousel";

const styles = { height: 250, width: "100%" };
const colors = ['aqua','red','green','blue'];

    const mapStateToProps= state => {
        return {
        user:state.loginReducer.user,
        books: state.productsList.books,
        coffees:state.productsOffer.Coffee
        };
    }
  
    const mapDispatchToProps = dispatch =>{
        return bindActionCreators({categoriesbook,categoriescoffee,loadListBooks,loadlistCoffees}, dispatch);
    }

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            listbooks:[],
            autoplay: true,
            leftIcon:<button className="fa fa-arrow-circle-left" />,
            rightIcon:<button className="fa fa-arrow-circle-right" />
        };
        this.handlecarouselbg = this.handlecarouselbg.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.slideNext = this.slideNext.bind(this);
        this.slidePrev = this.slidePrev.bind(this);
        this.goToSlide = this.goToSlide.bind(this);
        this.autoplay = this.autoplay.bind(this);
        this._changeIcon = this._changeIcon.bind(this);
        this.carouselElemwent = this.carouselElemwent.bind(this);
    }

    componentWillMount(){
        this.props.loadListBooks();
        this.props.loadlistCoffees();
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        var miMapa = new Map();

        miMapa.set('books',nextProps.books);
        miMapa.set('coffees',nextProps.coffees);
        console.log(miMapa);
        this.setState({
            listbooks:nextProps.books
        });
        console.log('Hola');
        console.log(this.state);
    }

    handlecarouselbg(colors,key){
      console.log('Elemnto:' + key);
      console.log(colors.length);

      for (let index = 0; index < colors.length; index++) {
        const element = colors[index];
          if (key === index) {
            let bg = element;
            return bg;
          }
      }
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
            leftIcon: <button className="fa fa-arrow-circle-left" /> ,
            rightIcon: <button className="fa fa-arrow-circle-right" />
          });
        } else {
          this.setState({
            leftIcon: <button className="fa fa-glass" />,
            rightIcon: <button className="fa fa-music" />
          });
        }
      };

      carouselElemwent(item,i){
        return(
          <div key={i} style={{ height: 250, backgroundColor: this.handlecarouselbg(colors,i) }}>
            <div style={{ width:'80%', height:'90%', margin:0}} className="row carousel-center">
              <div style={{textAlign:'center', margin:'auto'}} className=" col-sm-6">
               <img src={item.image}  width="140px" height="215px" alt="http://placehold.it/150x150"/>
              </div>
              <article style={{textAlign:'center', margin:'auto'}} className="col-sm-6">
              <p>{ item.title }</p>
              <p>{item.author}</p>
              <p>{item.edition}</p>
              <h2>{item.price}€</h2>
              </article>
            </div>
          </div>
        )
      }

    render() {
        console.log(this.state.listbooks);
        const element = this.state.listbooks.map( (item, i) => (
          this.carouselElemwent(item, i)
        ));
        return(
        <div>
            <div className="container-fluid" style={{padding:0}}>
            <div className="row" style={{margin:0}}>
              <div className="col-md-12" style={{padding:0}}>
                <React_Bootstrap_Carousel
                  animation={true}
                  autoplay={this.state.autoplay}
                  slideshowSpeed={5000}
                  leftIcon={this.state.leftIcon}
                  rightIcon={this.state.rightIcon}
                  onSelect={this.onSelect}
                  ref={r => (this.slider = r)}
                  version={4}
                >
                {this.state.listbooks === []?'Hola':element}
                </React_Bootstrap_Carousel>
              </div>
              <div className="col-md-12 text-center" style={{ marginTop: 5 }}>
                <div className="btn-group">
                  <button type="button" style={{borderRadius:'20px', marginRight:'2%'}} className="btn btn-default" onClick={this._changeIcon} >
                    <i className="fa fa-exchange"></i>
                  </button>
                  <button type="button" style={{borderRadius:'20px', marginRight:'2%'}} className="btn btn-default" onClick={this.slidePrev} >
                    <i className="fa fa-angle-left"></i>
                  </button>
                  <button type="button" style={{borderRadius:'20px', marginRight:'2%'}} className="btn btn-default" onClick={this.slideNext}>
                   <i className="fa fa-angle-right"></i>
                  </button>
                  <button type="button" style={{borderRadius:'20px', marginRight:'2%'}} className="btn btn-default" onClick={this.goToSlide}>
                    <i className="fa fa-fast-forward"></i>
                  </ button>
                  <button type="button" style={{borderRadius:'20px', marginRight:'2%'}} className="btn btn-default" onClick={this.autoplay}>
                    {this.state.autoplay ? <i className="fa fa-pause"></i> : <i className="fa fa-play"></i>}
                  </button>
                </div>
              </div>
            </div>
          </div>
          
            <div className="container">
            <h1>Tenga el placer de probar toda clase de cafés</h1>
            <ul className="nav nav-tabs nav-justified">
              <li className="active"><Link to={'/coffees/capuchino'} onClick={()=>{this.props.categoriescoffee('capuchino')}}> Capuchino</Link></li>
              <li><Link to={'/coffees/capuchino'} onClick={()=>{this.props.categoriescoffee('capuchino')}}> Bombón</Link></li>
              <li><Link to={'/coffees/capuchino'} onClick={()=>{this.props.categoriescoffee('capuchino')}}> Descafeinado</Link></li>
              <li><Link to={'/coffees/capuchino'} onClick={()=>{this.props.categoriescoffee('capuchino')}}> Cortado</Link></li>
              <li><Link to={'/coffees/capuchino'} onClick={()=>{this.props.categoriescoffee('capuchino')}}> Café solo</Link></li>
              <li><Link to={'/coffees/capuchino'} onClick={()=>{this.props.categoriescoffee('capuchino')}}> Cafe con leche</Link></li>
              <li><Link to={'/coffees/capuchino'} onClick={()=>{this.props.categoriescoffee('capuchino')}}> Expreso Doble</Link></li>
              <li><Link to={'/coffees/capuchino'} onClick={()=>{this.props.categoriescoffee('capuchino')}}> Café Jamaicano</Link></li>
              <li><Link to={'/coffees/capuchino'} onClick={()=>{this.props.categoriescoffee('capuchino')}}> Làgrima</Link></li>
              <li><Link to={'/coffees/capuchino'} onClick={()=>{this.props.categoriescoffee('capuchino')}}> Instantaneo</Link></li>
            </ul> 
            <h1>Disfrute de sus generos favoritos</h1>
            <ul className="nav nav-tabs nav-justified">
              <li  className="active"><Link  to={'/books/capuchino'} onClick={()=>{this.props.categoriesbook('capuchino')}}> Novela Contemporania</Link></li>
              <li><Link to={'/books/capuchino'} onClick={()=>{this.props.categoriesbook('capuchino')}}> Libros de Auto ayuda</Link></li>
              <li><Link to={'/books/capuchino'} onClick={()=>{this.props.categoriesbook('capuchino')}}> Infantil</Link></li>
              <li><Link to={'/books/capuchino'} onClick={()=>{this.props.categoriesbook('capuchino')}}> Novela Juvenil</Link></li>
              <li><Link to={'/books/capuchino'} onClick={()=>{this.props.categoriesbook('capuchino')}}> Comedia</Link></li>
              <li><Link to={'/books/Thriller'} onClick={()=>{this.props.categoriesbook('capuchino')}}> Thriller</Link></li>
              <li><Link to={'/books/accion'} onClick={()=>{this.props.categoriesbook('capuchino')}}> Acción</Link></li>
              <li><Link to={'/books/romantica'} onClick={()=>{this.props.categoriesbook('capuchino')}}> Romance</Link></li>
              <li><Link to={'/books/Drama'} onClick={()=>{this.props.categoriesbook('Drama')}}> Drama</Link></li>
              <li><Link to={'/books/Novela Negra'} onClick={()=>{this.props.categoriesbook('Novela Negra')}}> Novela Negra</Link></li>
            </ul> 
          </div>  
        </div>  
        );
    }
}
  
export default connect (mapStateToProps,mapDispatchToProps) (Home);