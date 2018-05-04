import React from 'react';
import { getCookie, setCookie, deleteCookie } from '../../lib/utils.js';
import { Link } from "react-router";
import { loadlistCoffees, loadListBooks } from '../../actions';
import {connect} from 'react-redux';
import Categorys from './Categoris';

const mapStateToProps= state => {
    return {
      user:state.loginReducer.user
    };
  }
  
class Home extends React.Component {
    constructor({props,loadlistCoffees, loadListBooks}){
        super(props);
        this.state = {
            subject:'',
            path:'/books/',
            action:'loadListBooks'
        }; 
        this.handleInputChange = this.handleInputChange.bind(this); 
        this.handleClick = this.handleClick.bind(this);  
    }   
    
    componentDidMount(){
        $('#books').attr('active', true);
        $('#rdb1').addClass('active');
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
        if ($('#rdb1').hasClass('active') && (getCookie('kindsearch') == 'false')) {
            $('#rdb1').removeClass('active');
        }
        let that = this;
        $('#books').on('click', function(){
            if (getCookie('kindsearch') == 'false'){
                console.log(getCookie('kindsearch'));
                $('#rdb2').removeClass('active');
                $('#rdb1').addClass('link');
                setCookie('kindsearch','true',12);  
                that.setState({path:'/books/'});
                that.setState({action:'loadListBooks'});
            }
        });
    
        $('#coffees').on('click', function() {
            if (getCookie('kindsearch') == 'true') {
                console.log(getCookie('kindsearch'));
                $('#rdb1').removeClass('link');
                $('#rdb2').addClass('active');
                setCookie('kindsearch','false',12); 
                that.setState({path:'/coffees/'});
                that.setState({action:'loadlistCoffees'});
            }
        });
        console.log(this.state);
    }
  

    render() {
        const param = this.state.path + this.state.subject;
        return(
            <div className="grid-main" id="home">
                <section id="search-zone" className=" search-zone">
                    <section className="section">
                        <a id="rdb1" className="checkbox" onClick={this.handleClick} id="books"> Books</a>
                        <a id="rdb2" className="checkbox" onClick={this.handleClick} id="coffees"> Coffes</a>
                    </section>
                    <input id="search" placeholder="Search everything that you find" onKeyPress={this.handleInputChange} type="text"/>
                    <Link className="btn-search" to={param} onClick={()=>{this.state.action==='loadListBooks'?this.props.loadListBooks(this.state.subject):this.props.loadlistCoffees(this.state.subject)}}>Search</Link>
                </section>
            <Categorys/>
        </div>
        );
    }
}

  
  const mapDispatchToProps = dispatch =>{
      if (getCookie('kindsearch') == 'true') {
        return{
            loadListBooks(param){
              dispatch(loadListBooks(param));
            }
          }
      }else if (getCookie('kindsearch') == 'false') {
        return{
            loadlistCoffees(param){
              dispatch(loadlistCoffees(param));
            }
          }
      }
  }
  
export default connect (mapStateToProps,mapDispatchToProps) (Home);