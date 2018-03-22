import React from 'react';
import ReactDOM  from 'react-dom';
import axios from 'axios';

class CoffeeDetailPage extends React.Component {
    constructor(props){
        super(props);
        console.log(props.match.params.id);
        this.state = {                
            components: [],
            params: props.match.params.id
          };
          console.log(this.state);
          this.getdata = this.getdata.bind(this);
    }    
    componentWillMount() {
      this.getdata();
    }

    getdata(event){
      const params = this.state.params;
      if (params){
        axios.post('http://localhost:3001/api/coffee/' + params)
        .then(
          response => this.setState({components: response.data.Coffee})
        );
      }
    }
    render() {               
      const component = this.state.components.map((item) =>
        <div>
          <p>{item.name}</p>
        </div>
      )
          return (
            <div>
              <div className="grid-main">
                <div>{component}</div>
              </div>
            </div>
          );
    }
}

export default CoffeeDetailPage;