import React from 'react';
import { Link } from "react-router";
import {connect} from 'react-redux';
import {editcoffee, createcoffee} from '../../actions/index';
import { bindActionCreators } from 'redux';
import ListErrors from '../errors/errors';
import { FormErrors } from '../../lib/FormErrors';
import {hashcode} from '../../lib/utils';

const mapStateToProps = state => {
    return {
      detail:state.coffeedetails.Coffee
    };
  }
  
  const mapDispatchToProps = dispatch =>{
    return bindActionCreators({createcoffee,editcoffee}, dispatch);
  }

  class managecoffees extends React.Component {
    constructor({props,detail}){
        super(props);  
        this.state = {                
            id:0,
            name:'', 
            image:'',
            price:0,
            Kind:{},
            stock:0,
          };
          this.handleInputChange = this.handleInputChange.bind(this); 
          this.handleSubmit = this.handleSubmit.bind(this); 
          this.editableimg = this.editableimg.bind(this);
    }    

    componentWillReceiveProps(nextProps){
      console.log(nextProps.detail[0]);
      this.setState({
        id:nextProps.detail[0].id?nextProps.detail[0].id:0,
        name:nextProps.detail[0].name?nextProps.detail[0].name:'', 
        image:nextProps.detail[0].image?nextProps.detail[0].image:'',
        price:nextProps.detail[0].price?nextProps.detail[0].price:0,
        kind:nextProps.detail[0].kind?nextProps.detail[0].kind:{},
        stock:nextProps.detail[0].stock?nextProps.detail[0].stock:0
        });
        console.log(this.state);
        debugger;
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      console.log(name);

      this.setState({[name]: value});

      if(name === 'kind'){
        //let newgenere = this.state.genere.push(value);
        this.setState({kind:value});
      }
      
      if (this.state.id === 0) {
        let newid = hashcode(this.state.title);
        if(newid !== 0){
          this.setState({id: newid});
          console.log(this.state);
        } 
      }

      console.log(this.state);
  }

    handleSubmit(event){
      window.location.pathname === '/editecoffee/'+this.state.id?this.props.editcoffee(this.state):this.props.createcoffee();
    }

    editableimg(){
      if(this.state.image === ''){
        return(
          <div className="form-group">
            <input type="text" id="image" name="image" value={this.state.image} placeholder="Image *" onChange={this.handleInputChange}/>
          </div>
        )
      }else{
        <div>
          <img src={this.state.image} alt="" srcSet=""/>
         </div>
      }
    }
    render() {      
          return (
            <div>
              <div className="container-fluid main-content">
              <div className="">
              <h1 id="text-center">{ window.location.pathname  === '/createcoffees'?'Crea':'Edita'} un cafe</h1>
               <form id="contact_form" name="contact_form" className="form-contact">
                      {this.editableimg()}
                        <div className="form-group">
                          <label htmlFor="name">name</label><br/>
                          <input type="text" className="form-control" id="name" name="name" placeholder="Nombre del cafe *" onChange={this.handleInputChange} value={this.state.name} required/>
                        </div>
                        <div className={`form-group`}>
                          <label htmlFor="price" >price</label>
                          <input type="number" name="price" id="price" onChange={this.handleInputChange}  value={this.state.price} required/>
                        </div>
                        <div>
                          <input type='checkbox' name="genere" className="genere" id="accion" value="accion" onChange={this.handleInputChange}/>	
					                <label className="terminos" htmlFor="genero">Acción</label>

                          <input type='checkbox' name="genere" className="genere" id="novela_negra" value="novela_negra" onChange={this.handleInputChange}/>	
					                <label className="terminos" htmlFor="genero">Novela Negra</label>

                          <input type='checkbox' name="genere" className="genere" id="drama" value="drama" onChange={this.handleInputChange} />	
					                <label className="terminos" htmlFor="genero">Drama</label>
                        </div>
                        <div className={`form-group`}>
                          <label htmlFor="stock" >stock</label>
                          <input type="number" name="stock" id="stock" onChange={this.handleInputChange} value={this.state.stock} required/>
                        </div> <br/><br/><br/>
                        <div className="form-group" disabled={!this.state.formValid} >
                          <Link to="/BooksList" className="btn btn-primary" onClick={this.handleSubmit} >Resgistrar se</Link>
                        </div>
              </form>
              </div>
              </div>
            </div>
          );
    }
}


export default connect (mapStateToProps,mapDispatchToProps)(managecoffees);