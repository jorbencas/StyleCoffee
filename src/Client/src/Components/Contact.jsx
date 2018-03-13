import React from 'react';

class App extends React.Component {
    constructor(props){
        super(props);
        //T.setTexts(Settings.getTraductedText(), { MDFlavor: 0 });        
       // T.setTexts(require('../lib/i18n/' + Settings.getLanguage() + '.json'))
       /* this.state = {                
          motto:T.translate("motto")    
        }; */      
    }    
   /* componentDidMount() {
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
            <div>
                 <p>Prueba</p>
            </div>
        );
    }
}

export default App;