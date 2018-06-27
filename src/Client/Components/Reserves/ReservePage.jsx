import React from 'react';
import { reserve } from '../../actions/index';
import { FormErrors } from '../../lib/FormErrors';
import {hashcode} from '../../lib/utils'; 
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux' 

const mapStateToProps = state => {
  return {
    detail:state.booksdetails.books
  };
}
  
const mapDispatchToProps = dispatch =>{
   return bindActionCreators({reserve}, dispatch);
} 

class ReserveBook extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id:0,
            title:'',
            dni:'',
            email:'',
            tlf:'',
            isbn:'',
            timestart:'',
            timeend:'',
            datestart:'',
            dateend:'',
        }; 
        this.handleInputChange = this.handleInputChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
    };   

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        this.setState({
            title:nextProps.detail[0].title?nextProps.detail[0].title:'',
        });
        console.log(this.state);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        console.log(this.props.detail.title);
        if (this.state.id === 0) {
            let newid = hashcode(this.state.title + this.state.dni);
            if(newid !== 0){
                this.setState({id: newid});
                console.log(this.state);
            }
        }

        this.setState({[name]: value});
        console.log(this.state);
    }



  handleSubmit(event) {
        event.preventDefault();
        console.log(this.props);
        debugger;
        this.props.reserve(this.state);
    }


    render() {  
        console.log(this.state);             
        return (
            <div className="container-fluid main-content">
                <h1 className="form-group">Reserva un libro</h1>
                    <form id="contact_form" name="contact_form" className="form-contact">                       
                        <div className={`form-group`}>
                            <label htmlFor="email">Correo electronico</label><br/>
                            <input required type="email" id="email" name="email" placeholder="Email *" onChange={this.handleInputChange} required/>
                        </div>
                        <div className={`form-group `}>
                            <label htmlFor="dni">Dni</label><br/>
                            <input required type="dni" id="dni" name="dni" placeholder="Dni *" onChange={this.handleInputChange} required/>
                        </div>
                        <div className={`form-group`}>
                            <label htmlFor="timestart">Hora inicial de la reserva</label><br/>
                            <input required type="timestart" id="timestart" name="timestart" placeholder="Ha quiera quiere hacer su reserva ? *" onChange={this.handleInputChange} required/>
                        </div>
                        <div className={`form-group `}>
                            <label htmlFor="timeend">Hora final de la reserva</label><br/>
                            <input required type="timeend" id="timeend" name="timeend" placeholder="reservar el libro hasta la hora *" onChange={this.handleInputChange} required/>
                        </div>
                        <div className={`form-group`}>
                            <label htmlFor="datestart">fecha inicial de la reserva</label><br/>
                            <input required type="datestart" id="datestart" name="datestart" placeholder="Fecha de inicio de la reserva *" onChange={this.handleInputChange} required/>
                        </div>
                        <div className={`form-group`}>
                            <label htmlFor="dateend">fecha final de la reserva</label><br/>
                            <input required type="dateend" id="dateend" name="dateend" placeholder="Fecha final de la reserva*" onChange={this.handleInputChange} required/>
                        </div>
                        <div className="form-group">
                            <input className="btn btn-primary" type="submit" name="submit" id="submit" value="Enviar" onClick={this.handleSubmit}/>
                        </div>
                    </form>
            </div>
        );
    }
}

export default connect (mapStateToProps,mapDispatchToProps)( ReserveBook);