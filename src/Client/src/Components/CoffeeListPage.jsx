import React from 'react';
import { CoffeeService } from '../services';

class  CoffeeListPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {                
          components: [],
        };      
        
        this.UserList = this.UserList.bind(this);
      } 
    
      componentDidMount() {
        this.UserList();
      }
    
      UserList(event) {
        var xmlhttp = new XMLHttpRequest();
        var url = "http://localhost:3001/api/coffee";
        let that=this;
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var myArr = JSON.parse(this.responseText);
                console.log(myArr);
                that.setState({
                    components: myArr.Coffee
                  });
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.setRequestHeader('Content-Type', 'text/plain');
        xmlhttp.send();
      }
      render() {
        const component = this.state.components.map((item) => (
          <div>
            <p>{ item.name }</p>
          </div>
        ));
        return (
          <div>
            <div className="grid-main">
              <div>Home</div>
              <div>{ component }</div>
            </div>
          </div>
        );
      }
}

export default CoffeeListPage;