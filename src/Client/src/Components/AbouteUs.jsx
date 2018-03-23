import App from './App.jsx';
import React from 'react';

class AbouteUs extends React.Component {
    constructor(props){
        super(props);   
    }    

    render() {   
        return (
        <div className="grid-main">
          <h2>StyleCoffee</h2>
          <p>Somos un pequeño grupio de innovadores, 
              con una idea creada para hacer mas como ha todo/as el poder leeer</p>
        
        <p>Gracias por confiar en nosotros.</p>
        </div>
        );
    }
}

export default AbouteUs;