import React from 'react';
import App from './App.jsx';

class Footer extends React.Component {
    constructor(props){
        super(props);   
    }    

    render() {   
        return (
        <div>
            <footer role="footer" className="grid-footer">
      <details className=".grid-footer-details" role="dialog">
        <summary>More Information</summary>
        <h2 role="note">This project has done by Jorge Beneyto Castelló</h2>
      </details>
    </footer>
        </div>
        );
    }
}

export default Footer;