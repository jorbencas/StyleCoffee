import React from 'react';
import { contactService } from '../services/services';

class Contact extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name:'',
            message:'',
            email:'',
            subject:''
        }; 
        this.handleInputChange = this.handleInputChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
    };   

    /*
    handleInputChange = (event) => {
        event.preventDefault();
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });

        console.log(this.state);
    };
*/

handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
   
    this.setState({
      [name]: value
    });

    console.log(this.state);
}

handleSubmit(event) {
    event.preventDefault();
    contactService(this.state);
}

    render() {               
        return (
            <div className="grid-main">
                <div className="Contact">
                    <form id="contact_form" name="contact_form" className="form-contact">
                        <h1 className="contact_item">Contacto</h1>
                        <div className="contact_item">
                            <label htmlFor="name">name</label><br/>
                            <input required type="text" id="name" name="name" placeholder="Nombre" onChange={this.handleInputChange}/>
                        </div>
                        <div className="contact_item">
                            <label htmlFor="email">Email</label><br/>
                            <input required type="email" id="email" name="email" placeholder="Email *" onChange={this.handleInputChange}/>
                        </div>
                        <div className="contact_item">
                            <label className="inputSubject" htmlFor="inputSubject">Tema de Consulta</label><br/>
                            <select className="" id="inputSubject" name="subject" title="Choose subject" onChange={this.handleInputChange}>
                                <option value="">- Por favor, seleccione un tema de consulta -</option>
                                <option value="actividad">Info relativa a alguna actividad</option>
                                <option value="dpto">Contacta con nuestro dpto de actividades</option>
                                <option value="trabaja">Trabaja con nosotros</option>
                                <option value="sugerencias">Haznos sugerencias</option>
                                <option value="reclamaciones">Atendemos tus reclamaciones</option>
                                <option value="novedades">Te avisamos de nuestras novedades</option>
                                <option value="diferente">Algo diferente</option>
                            </select>
                        </div>
                        <div className="contact_item">
                            <label htmlFor="recomendation">Hace Aqui tu recomendación</label><br/>
                            <textarea required className="contact_item" id="recomendation" name="message" placeholder="Introduzca aqui su mensaje *" onChange={this.handleInputChange}></textarea>
                        </div>
                        <div className="contact_item">
                            <input className="contact_Item" type="submit" name="submit" id="submit" value="Enviar"  onClick={this.handleSubmit}/>
                        </div>
                    </form>
                </div> 
            </div>
        );
    }
}

export default Contact;