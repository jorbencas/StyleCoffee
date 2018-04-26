import React from 'react';
import { getCookie, setCookie, deleteCookie } from '../../lib/utils.js';
import { Link } from "react-router";
import { loadlistCoffees, loadListBooks } from '../../actions';
import {connect} from 'react-redux';
import Categorys from './categorys/Categoris';

class Home extends React.Component {
    constructor({props,loadlistCoffees, loadListBooks}){
        super(props);
        this.state = {
            subject:'',
            path:'/books/',
            action:'loadListBooks'
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
                that.setState({path:'/books/'});
                that.setState({action:'loadListBooks'});
            }
        });
    
        $('#coffees').on('click', function() {
            if (getCookie('kindsearch') == 'true') {
                console.log(getCookie('kindsearch'));
                $('#rdb1').removeClass('cheked');
                $('#rdb2').addClass('cheked');
                setCookie('kindsearch','false',12); 
                that.setState({path:'/coffees/'});
                that.setState({action:'loadlistCoffees'});
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
                        <article id="rdb1" className="checkbox"> <input type="radio" name="radio" onClick={this.handleClick} id="books" />Books</article>
                        <article id="rdb2" className="checkbox"> <input type="radio" name="radio" onClick={this.handleClick} id="coffees"/> Coffes</article>
                    </section>
                    <input id="search" placeholder="Search everything that you find" onKeyPress={this.handleInputChange} type="text"/>
                    <Link className="btn-search" to={param} onClick={()=>{this.state.action==='loadListBooks'?this.props.loadListBooks(this.state.subject):this.props.loadlistCoffees(this.state.subject)}}>Search</Link>
                </section>
            <Categorys/>
        </div>
        );
    }
}
const mapStateToProps= state => {
    console.log(state);
    return {
      user:state.loginReducer.user
    };
  }
  
  const mapDispatchToProps = dispatch =>{
      if (getCookie('kindsearch') == 'true') {
          console.log('Books');
        return{
            loadListBooks(param){
              dispatch(loadListBooks(param));
            }
          }
      }else if (getCookie('kindsearch') == 'false') {
        console.log('Coffes');
        return{
            loadlistCoffees(param){
              dispatch(loadlistCoffees(param));
            }
          }
      }
  }
  
export default connect (mapStateToProps,mapDispatchToProps) (Home);