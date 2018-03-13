import React from 'react';

class Menu extends React.Component {
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
              <ul className="menu-listado" role="list">
                <div id="addStudent"></div>
                <li className="listado-item" role="listitem"><a role="menuitem" title="Fen clic sobre aqueste enllaç, es posible afegir un nou estudiant" href="#addStudent">Add new Student</a></li>
                <div id="addGTask"></div>
                <li className="listado-item" role="listitem"><a role="menuitem" title="Fen clic sobre aqueste enllaç, es posible afegir una nova GradedTasks" href="#addGTask">Add graded task</a></li>
              </ul>
            </div>
        );
    }
}

export default Menu;