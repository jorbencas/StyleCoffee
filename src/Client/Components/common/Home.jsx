import React from 'react';
import { categoriesbook, categoriescoffee,loadListBooks } from '../../actions';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { Link } from "react-router";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { React_Bootstrap_Carousel } from "react-bootstrap-carousel";

const styles = { height: 250, width: "100%" };
const colors = ['aqua','red','yellow','green'];

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
        console.log(props);
        this.state = {
            listbooks:[],
            autoplay: true,
            leftIcon:<i className="fa fa-arrow-circle-left" ></i>,
            rightIcon:<i className="fa fa-arrow-circle-right" ></i>
        };
        this.handlecarouselcontrols = this.handlecarouselcontrols.bind(this);
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
    }
    
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        this.setState({
            listbooks:nextProps.books
        });
        console.log(this.state);
    }

    handlecarouselbg(colors,key){
      for (let index = 0; index < colors.length; index++) {
        const element = colors[index];
        if (key === index) return element;
      }
    }

    handleClick(event){
        /*
            <img src="./photos/cafe.png" width="140px" height="190px" alt=""/>
            <img src="./photos/libro.png" width="185px" height="170px" alt=""/>
        */
    }

    handlecarouselcontrols(){
      return(
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
      )
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
            leftIcon: <i className="fa fa-arrow-circle-left" ></i> ,
            rightIcon: <i className="fa fa-arrow-circle-right" ></i>
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
        const element = this.state.listbooks.map( (item, i) => (
          this.carouselElemwent(item, i)
        ));
        return(
        <div>
            <div className="container-fluid" style={{padding:0}}>
            <div className="row" style={{margin:0}}>
              <div className="col-md-12" style={{padding:0}}>
                <React_Bootstrap_Carousel animation={true} autoplay={this.state.autoplay} slideshowSpeed={5000} leftIcon={this.state.leftIcon} rightIcon={this.state.rightIcon} onSelect={this.onSelect} ref={r => (this.slider = r)} version={4} >
                  {this.state.listbooks === []?'':element}
                </React_Bootstrap_Carousel>
              </div>
              <div className="col-md-12 text-center" style={{ marginTop: 5 }}>
                {this.props.user.role == 'admin'?this.handlecarouselcontrols():''}
              </div>
            </div>
          </div>
          
            <div className="container">
              <h1>Tenga el placer de probar toda clase de cafés</h1>
              <ul className="nav nav-tabs nav-center">
                <li><Link to={'/coffees/capuchino'} onClick={()=>{this.props.categoriescoffee('capuchino')}}>
                  <img src="./photos/cafe.png" width="140px" height="190px" alt=""/><br/> Capuchino</Link></li>
                <li><Link to={'/coffees/capuchino'} onClick={()=>{this.props.categoriescoffee('capuchino')}}>
                  <img src="./photos/cafe.png" width="140px" height="190px" alt=""/><br/> Bombón</Link></li>
                <li><Link to={'/coffees/capuchino'} onClick={()=>{this.props.categoriescoffee('capuchino')}}>
                  <img src="./photos/cafe.png" width="140px" height="190px" alt=""/><br/> Descafeinado</Link></li>
                <li><Link to={'/coffees/capuchino'} onClick={()=>{this.props.categoriescoffee('capuchino')}}>
                  <img src="./photos/cafe.png" width="140px" height="190px" alt=""/><br/> Cortado</Link></li>
                <li><Link to={'/coffees/capuchino'} onClick={()=>{this.props.categoriescoffee('capuchino')}}>
                  <img src="./photos/cafe.png" width="140px" height="190px" alt=""/><br/> Café solo</Link></li>
                <li><Link to={'/coffees/capuchino'} onClick={()=>{this.props.categoriescoffee('capuchino')}}>
                  <img src="./photos/cafe.png" width="140px" height="190px" alt=""/><br/> Cafe con leche</Link></li>
                <li><Link to={'/coffees/capuchino'} onClick={()=>{this.props.categoriescoffee('capuchino')}}>
                  <img src="./photos/cafe.png" width="140px" height="190px" alt=""/><br/> Expreso Doble</Link></li>
                <li><Link to={'/coffees/capuchino'} onClick={()=>{this.props.categoriescoffee('capuchino')}}>
                  <img src="./photos/cafe.png" width="140px" height="190px" alt=""/><br/> Café Jamaicano</Link></li>
                <li><Link to={'/coffees/capuchino'} onClick={()=>{this.props.categoriescoffee('capuchino')}}>
                  <img src="./photos/cafe.png" width="140px" height="190px" alt=""/><br/> Làgrima</Link></li>
                <li><Link to={'/coffees/capuchino'} onClick={()=>{this.props.categoriescoffee('capuchino')}}>
                  <img src="./photos/cafe.png" width="140px" height="190px" alt=""/><br/> Instantaneo</Link></li>
              </ul> 
              <h1>Disfrute de sus generos favoritos</h1>
              <ul className="nav nav-tabs nav-center">
                <li><Link to={'/books/capuchino'} onClick={()=>{this.props.categoriesbook('capuchino')}}>
                <img src="./photos/libro.png" width="185px" height="170px" alt=""/><br/> Novela Contemporania</Link></li>
                <li><Link to={'/books/capuchino'} onClick={()=>{this.props.categoriesbook('capuchino')}}>
                <img src="./photos/libro.png" width="185px" height="170px" alt=""/><br/> Libros de Auto ayuda</Link></li>
                <li><Link to={'/books/capuchino'} onClick={()=>{this.props.categoriesbook('capuchino')}}>
                <img src="./photos/libro.png" width="185px" height="170px" alt=""/><br/> Infantil</Link></li>
                <li><Link to={'/books/capuchino'} onClick={()=>{this.props.categoriesbook('capuchino')}}>
                <img src="./photos/libro.png" width="185px" height="170px" alt=""/><br/> Novela Juvenil</Link></li>
                <li><Link to={'/books/capuchino'} onClick={()=>{this.props.categoriesbook('capuchino')}}>
                <img src="./photos/libro.png" width="185px" height="170px" alt=""/><br/> Comedia</Link></li>
                <li><Link to={'/books/Thriller'} onClick={()=>{this.props.categoriesbook('capuchino')}}>
                <img src="./photos/libro.png" width="185px" height="170px" alt=""/><br/> Thriller</Link></li>
                <li><Link to={'/books/accion'} onClick={()=>{this.props.categoriesbook('capuchino')}}>
                <img src="./photos/libro.png" width="185px" height="170px" alt=""/><br/> Acción</Link></li>
                <li><Link to={'/books/romantica'} onClick={()=>{this.props.categoriesbook('capuchino')}}>
                <img src="./photos/libro.png" width="185px" height="170px" alt=""/><br/> Romance</Link></li>
                <li><Link to={'/books/Drama'} onClick={()=>{this.props.categoriesbook('Drama')}}>
                <img src="./photos/libro.png" width="185px" height="170px" alt=""/><br/> Drama</Link></li>
                <li><Link to={'/books/Novela Negra'} onClick={()=>{this.props.categoriesbook('Novela Negra')}}>
                <img src="./photos/libro.png" width="185px" height="170px" alt=""/><br/> Novela Negra</Link></li>
              </ul> 
          </div>  
        </div>  
        );
    }
}
  
export default connect (mapStateToProps,mapDispatchToProps) (Home);