import React from 'react';
import Modal from 'react-bootstrap4-modal';
//import T from 'i18n-react';
import Dropzone from 'react-dropzone';
import Managebooks from '../Books/EditBooks';
import { Link } from "react-router";

class EditModal extends React.Component {
  // event handling methods go here
  constructor(props){
    super(props);
    this.state = {     
        visible:true,
        accept: 'application/jpeg',
        files: [],
        dropzoneActive: false,
        objectURL:'',
        pdfUploaded:false,
        border :"5px dashed red"                       
    };
    //T.setTexts(require('../../lib/i18n/' + Settings.getLanguage() + '.json'));   
    this.handleInputChange = this.handleInputChange.bind(this);   
    this.handleSubmit = this.handleSubmit.bind(this);                              
    this.modalBackdropClicked = this.modalBackdropClicked.bind(this);
    
}

  onDragEnter() {
    this.setState({
      dropzoneActive: true
    });
  }

  onDragLeave() {
    this.setState({
      dropzoneActive: false
    });
  }

onDrop(files) {
  this.setState({     
    pdfUploaded:true,
    border : "5px dashed green"
  });
  this.setState({
    dropzoneActive: false,
    files: files        
  });
  $('#hr-text').hide();
}



handleSubmit(event) {
  event.preventDefault();
  console.log(event.target);
  var formData = new FormData(event.target);
  if (this.state.pdfUploaded) {
    formData.append('myFile',this.state.files[0], this.state.files[0]); 
  }
  for (var [key, value] of formData.entries()) { 
    console.log(key, value);
  } 
  this.setState({
      couldBeClosed: true
  },function(){ this.modalBackdropClicked(undefined);  });     
   
}

handleInputChange(event) {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;       
  this.setState({
    [name]: value
  });      
}

  modalBackdropClicked(event) { 
    this.setState({ visible: false }); 
}

  render() {
      console.log('Hola Modal');
      const dropzoneStyle = {
        width  : "100%",
        height : "25%",
        border: this.state.border,
        padding: "15px",
        borderRadius:20                    
      };
      const overlayStyle = {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        padding: '2.5em 0',
        background: 'rgba(0,0,0,0.5)',
        textAlign: 'center',
        color: '#fff'
      };

      
      const { accept, files, dropzoneActive } = this.state;

    return (
      <Modal visible={this.state.visible === true? this.state.visible = true: this.state.visible = false} onCancel={this.modalBackdropClicked} onClickBackdrop={this.modalBackdropClicked}>
        <div className="modal-header">
          <h5 className="modal-title">Selecciona la portada de un libro!!</h5>
        </div>
        <div className="modal-body">
        <div className="dragPdfReport">
          <hr className="hr-text" data-content={/*T.translate(*/"uploadPDFOr"/*)*/} id="hr-text"/>
          <p className="desc small">{/*T.translate(*/"uploadPDFAdvice"/*)*/}</p>
          <div> 
          {/* Asi es la part del drop zone */}
            <form id="newFile" encType="multipart/form-data" className="formDetail small" onSubmit={this.handleSubmit}>
              <Dropzone className="Dropzone"
                  onDrop={this.onDrop.bind(this)}
                  style={dropzoneStyle}
                  accept={accept}
                  onDragEnter={this.onDragEnter.bind(this)}
                  onDragLeave={this.onDragLeave.bind(this)}
                  name="myFile">
                  <p>Seleciona una foto para la caratura del libro</p>
                  <ul>{files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)} </ul>
              </Dropzone>
              <br/>
              <input type="submit" className="btn btn-primary" value=/*{T.translate(*/"uploadPDFCreateSubject"/*)}*//>
              </form>
            </div>
          </div>
        </div>
        <div className="modal-footer">
            <Link to={window.location.pathname} className="btn btn-secondary"  onClick={this.modalBackdropClicked} >Cerrar</Link>
        </div>
      </Modal>
    );
  }
}
export default EditModal;