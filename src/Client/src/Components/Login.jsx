import App from './App.jsx';
import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import Home from './Home';
import { LoginService } from '../services/services';

const MODAL_A = 'modal_a';
const MODAL_B = 'modal_b';

const DEFAULT_TITLE = 'Default title';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
          isOpen: false,
          username: '',
          email:'',
          password: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.toggleModal = this. toggleModal.bind(this);
    }
    
      toggleModal(event) {
        console.log(event);
        const { isOpen } = this.state.isOpen;
        this.setState({ isOpen: !isOpen });
      }
    
    componentWillMount(){
      this.toggleModal();
    }
      
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
        LoginService(this.state);
        <Link to="/" component={Home}></Link>
    }

    componentWillUnmount(){
      <Link to="/" component={Home}></Link>
    }
    render() {
      return (
        <Modal
          id="modal_with_forms"
          isOpen={this.state.isOpen}
          closeTimeoutMS={150}
          contentLabel="modalB"
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.toggleModal}
          aria={{
            labelledby: "heading",
            describedby: "fulldescription"
          }}>
          <h1 id="heading">Forms!</h1>
            <p>Iniciar Sesión</p>
            <form>
              <div className="contact_item">
                <label htmlFor="username">name</label><br/>
                <input required type="text" id="username" name="username" placeholder="Nombre *" onChange={this.handleInputChange} required/>
              </div>
              <div className="contact_item">
                <label htmlFor="email">Email</label><br/>
                <input required type="email" id="email" name="email" placeholder="Email *" onChange={this.handleInputChange} required/>
              </div>
              <div className="contact_item">
                <label htmlFor="password">Password</label><br/>
                <input required type="password" id="password" name="password" placeholder="Password *" onChange={this.handleInputChange} required/>
              </div>
              <div className="contact_item">
                <Link to="/" className="contact_Item" id="submit"  onClick={this.handleSubmit}>Inicia Sesión</Link>
              </div>
            </form>
        </Modal>
      );
    }
}

export default Login;