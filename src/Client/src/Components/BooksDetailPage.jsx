import React from 'react';
import ReactDOM  from 'react-dom';

class BooksDetailPage extends React.Component {
    constructor(props){
        super(props);   
        /*this.state = {                
            components: [],
          };*/
          console.log('Hola');
    }    
    componentWillMount() {
     // ReactDOM.unmountComponentAtNode(document.getElementById('content'));
      //$('#listbooks').remove();
        //BooksDetailsService();
    }

    render() {               
       
          return (
            <div>
              <div className="grid-main">
                <div>Home</div>
              </div>
            </div>
          );
    }
}

export default BooksDetailPage;