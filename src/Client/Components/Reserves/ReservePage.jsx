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
    constructor({props, reserve, detail}){
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
        this.props.reserve(this.state);
    }


    render() {  
        console.log(this.state);             
        return (
            <div className="grid-main">
                <div className="Contact">
                    <form id="contact_form" name="contact_form" className="form-contact">
                        <h1 className="contact_item">Reserva un libro</h1>
                        <div className="contact_item">
                            <label htmlFor="title">Titulo</label><br/>
                            <input required type="text" id="title" name="title" placeholder="Nombre" onChange={this.handleInputChange} value={this.state.title} required/>
                        </div>
                        <div className={`contact_item`}>
                            <label htmlFor="email">Correo electronico</label><br/>
                            <input required type="email" id="email" name="email" placeholder="Email *" onChange={this.handleInputChange} required/>
                        </div>
                        <div className={`contact_item `}>
                            <label htmlFor="dni">Dni</label><br/>
                            <input required type="dni" id="dni" name="dni" placeholder="Email *" onChange={this.handleInputChange} required/>
                        </div>
                        <div className={`contact_item`}>
                            <label htmlFor="timestart">Hora de la reserva</label><br/>
                            <input required type="timestart" id="timestart" name="timestart" placeholder="Email *" onChange={this.handleInputChange} required/>
                        </div>
                        <div className={`contact_item `}>
                            <label htmlFor="timeend">Hora de la reserva</label><br/>
                            <input required type="timeend" id="timeend" name="timeend" placeholder="Email *" onChange={this.handleInputChange} required/>
                        </div>
                        <div className={`contact_item`}>
                            <label htmlFor="datestart">Hora de la reserva</label><br/>
                            <input required type="datestart" id="datestart" name="datestart" placeholder="Email *" onChange={this.handleInputChange} required/>
                        </div>
                        <div className={`contact_item`}>
                            <label htmlFor="dateend">Hora de la reserva</label><br/>
                            <input required type="dateend" id="dateend" name="dateend" placeholder="Email *" onChange={this.handleInputChange} required/>
                        </div>
                        <div className="contact_item">
                            <input className="contact_Item" type="submit" name="submit" id="submit" value="Enviar" onClick={this.handleSubmit}/>
                        </div>
                    </form>
                </div> 
            </div>
        );
    }
}

export default connect (mapStateToProps,mapDispatchToProps)( ReserveBook);