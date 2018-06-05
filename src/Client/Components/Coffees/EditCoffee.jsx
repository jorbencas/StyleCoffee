import React from 'react';
import { Link } from "react-router";
import {connect} from 'react-redux';
import {editcoffee, createcoffee} from '../../actions/index';
import { bindActionCreators } from 'redux';
import ListErrors from '../errors/errors';
import { FormErrors } from '../../lib/FormErrors';
import {hashcode} from '../../lib/utils';

const mapStateToProps= state => {
    return {
      detail:state.coffeesdetail.detail
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
            title:'', 
            author:'', 
            description: '',
            yearpublication:'',
            edition:'',
            formato:'',
            image:'',
            languaje:'',
            state:'',
            numpages:0,
            price:0,
            genere:{},
            stock:0,
            encuadernation:''
          };
          this.handleInputChange = this.handleInputChange.bind(this); 
          this.handleSubmit = this.handleSubmit.bind(this); 
         this.editableimg = this.editableimg.bind(this);
    }    

    componentWillReceiveProps(nextProps){
      this.setState({
        title:nextProps.detail[0].title?nextProps.detail[0].title:'', 
        author:nextProps.detail[0].author?nextProps.detail[0].author:'', 
        description:nextProps.detail[0].description?nextProps.detail[0].description:'',
        yearpublication:nextProps.detail[0].yearpublication?nextProps.detail[0].yearpublication:'',
        edition:nextProps.detail[0].edition?nextProps.detail[0].edition:'',
        formato:nextProps.detail[0].formato?nextProps.detail[0].formato:'',
        image:nextProps.detail[0].image?nextProps.detail[0].image:'',
        languaje:nextProps.detail[0].languaje?nextProps.detail[0].languaje:'',
        state:nextProps.detail[0].state?nextProps.detail[0].state:'',
        numpages:nextProps.detail[0].numpages?nextProps.detail[0].numpages:0,
        price:nextProps.detail[0].price?nextProps.detail[0].price:0,
        genere:nextProps.detail[0].genere?nextProps.detail[0].genere:{},
        stock:nextProps.detail[0].stock?nextProps.detail[0].stock:0,
        encuadernation:nextProps.detail[0].encuadernation?nextProps.detail[0].encuadernation:''
        });
        console.log(this.state);
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.value : target.value;
      const name = target.name;

      console.log(name);

      
      this.setState({[name]: value});


      if(name === 'genere'){
        //let newgenere = this.state.genere.push(value);
        this.setState({genere:value});
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
      this.props.editcoffee(this.state);
    }

    editableimg(){
      //if(this.state.image === ''){
        return(
          <div className="form-group">
            <input type="text" id="image" name="image" value={this.state.image} placeholder="Image *" onChange={this.handleInputChange}/>
          </div>
        )
      /*}else{
        <div>
          <img src={this.state.image} alt="" srcSet=""/>
         </div>
      }*/
    }
    render() {      
          return (
            <div>
              <div className="container-fluid main-content">
              <div className="">
              <h1 id="text-center">Crea un libro</h1>
               <form id="contact_form" name="contact_form" className="form-contact">
                      
                      {this.editableimg()}
                        <div className="form-group">
                          <label htmlFor="title">Titulo</label><br/>
                          <input type="text" className="form-control" id="title" name="title" placeholder="title *" onChange={this.handleInputChange} value={this.state.title} required/>
                        </div>
                        <div>
                          <label htmlFor="autor"></label>
                          <input type="text" className="form-control" id="autor" name="author" placeholder="autor *" onChange={this.handleInputChange} value={this.state.author} required/>
                        </div>
                        <div className={`form-group`}>
                          <label htmlFor="description">Descrpcion</label><br/>
                          <input type="text" className="form-control" id="description" name="description" placeholder="Description *" onChange={this.handleInputChange} value={this.state.description}required/>
                        </div>
                        <div className={`form-group`}>
                          <label htmlFor="edition">edition</label><br/>
                          <input type="text" className="form-control" id="edition" name="edition" placeholder="edition *" onChange={this.handleInputChange} required/>
                        </div>
                        <div className={`form-group`}>
                          <label htmlFor="formato">formato</label><br/>
                          <input type="text" className="form-control" id="formato" name="formato" placeholder="formato *" onChange={this.handleInputChange} required/>
                        </div>
                        <div>
                          <label htmlFor="yearpublication">Fecha de nacimiento</label>
                          <input type="date" className="form-control" id="yearpublication" name="yearpublication" placeholder="yearpublication" onChange={this.handleInputChange} required/>
                        </div>
                        <div>
                          <label htmlFor="languaje">languaje</label>
                          <input type="text"className="form-control" name="languaje" id="languaje" onChange={this.handleInputChange} required/>
                        </div>
                        <div className={`form-group`}>
                          <label htmlFor="state" >state</label>
                          <input type="text" className="form-control" name="state" id="state" onChange={this.handleInputChange} required/>
                        </div>
                        <div className={`form-group`}>
                          <label htmlFor="numpages" >numpages</label>
                          <input type="number" name="numpages" id="numpages" onChange={this.handleInputChange} required/>
                        </div>
                        <div className={`form-group`}>
                          <label htmlFor="price" >price</label>
                          <input type="number" name="price" id="price" onChange={this.handleInputChange} required/>
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
                          <input type="number" name="stock" id="stock" onChange={this.handleInputChange} required/>
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