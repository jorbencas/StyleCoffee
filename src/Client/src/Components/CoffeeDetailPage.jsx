import React from 'react';
import ReactDOM  from 'react-dom';

class CoffeeDetailPage extends React.Component {
    constructor(props){
        super(props);   
        /*this.state = {                
            components: [],
          };*/
          console.log('Hola');
    }    
    componentWillMount() {
      console.log('Unmount');
      //ReactDOM.unmountComponentAtNode(document.getElementById('content'));
      // $('#listcoffee').remove();
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

export default CoffeeDetailPage;