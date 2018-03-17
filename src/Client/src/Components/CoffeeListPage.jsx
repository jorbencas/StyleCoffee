import React from 'react';
import { CoffeeService } from '../services';

class  CoffeeListPage extends React.Component {
    constructor(props){
        super(props);
       
        this.state = {                
          name :"",
          image:"",
          price:0
        };   
        this.getcoffes() = this.getcoffes.bind(this);
    }   
    
    getcoffes(){
        CoffeeService();
        this.setState({
            [name]:value
        })
    }

   /* componenliidMount() {
        this.subscription = events.subscribe('settings/change',(obj) => {  
            //T.setTexts(Settings.getTraductedText(), { MDFlavor: 0 })
            T.setTexts(require('../lib/i18n/' + Settings.getLanguage() + '.json'))
            this.setState({
                motto:T.translate("motto")     
            });               
        });      
    }

    componentWillUnmount() {
        this.subscription.remove();
    }
*/
    render() {               
        return (
            <div id="listcoffe" onLoad={}>
                <p>{this.state.name}</p>
                
                <div id="Section"></div>
            </div>
        );
    }
}

export default CoffeeListPage;