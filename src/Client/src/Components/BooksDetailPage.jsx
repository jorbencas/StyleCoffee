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
      const id = this.state.params;
      if (id){
        axios.post('http://localhost:3001/api/books/' + id)
        .then(
          response => this.setState({components: response.data.books})
        );
      }
    }
    render() {   
      console.log(this.state.components);            
          const component = this.state.components.map((item) =>
            <div>
                <p>{item.title}</p>
              </div>
          )
          return (
            <div>
              <div className="grid-main">
                <div>Home</div>
                <div>{component}</div>
              </div>
            </div>
          );
    }
}

export default BooksDetailPage;