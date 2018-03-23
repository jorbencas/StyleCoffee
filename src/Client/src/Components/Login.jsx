import App from './App.jsx';
import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import Home from './Home';

const MODAL_A = 'modal_a';
const MODAL_B = 'modal_b';

const DEFAULT_TITLE = 'Default title';

class Login extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = { isOpen: false };
        this.toggleModal = this. toggleModal.bind(this);
      }
    
      toggleModal(event) {
        console.log(event);
        const { isOpen } = this.state;
        this.setState({ isOpen: !isOpen });
      }
    
      componentWillMount(){
        this.toggleModal();
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
          <div id="fulldescription" tabIndex="0" role="document">
            <p>This is a description of what it does: nothing :)</p>
            <form>
              <fieldset>
                <input type="text"  />
                <input type="text"  />
              </fieldset>
              <fieldset>
                <legend>Radio buttons</legend>
                <label>
                  <input id="radio-a" name="radios" type="radio" /> A
                </label>
                <label>
                  <input id="radio-b" name="radios" type="radio" /> B
                </label>
              </fieldset>
              <fieldset>
                <legend>Checkbox buttons</legend>
                <label>
                  <input id="checkbox-a" name="checkbox-a" type="checkbox" /> A
                </label>
                <label>
                  <input id="checkbox-b" name="checkbox-b" type="checkbox" /> B
                </label>
              </fieldset>
              <input type="text" />
            </form>
          </div>
        </Modal>
            );
          }
}

export default Login;