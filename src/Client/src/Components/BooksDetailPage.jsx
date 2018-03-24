import React from 'react';
import ReactDOM  from 'react-dom';
import axios from 'axios';

class BooksDetailPage extends React.Component {
    constructor(props){
        super(props);   
        this.state = {                
            components: [],
            params: props.match.params.id
          };
          console.log('Hola' +  this.state.params);
    }    
    componentWillMount() {
      this.getdata();
    }

    getdata(event){
      const params = this.state.params;
      if (params){
        axios.post('http://localhost:3001/api/books/' + params)
        .then(
          response => this.setState({components: response.data.Coffee})
        );
      }
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