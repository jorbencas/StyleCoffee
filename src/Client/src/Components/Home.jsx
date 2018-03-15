import React from 'react';

class Home extends React.Component {
    constructor(props){
        super(props);
        //T.setTexts(Settings.getTraductedText(), { MDFlavor: 0 });        
       // T.setTexts(require('../lib/i18n/' + Settings.getLanguage() + '.json'))
       /* this.state = {                
          motto:T.translate("motto")    
        }; */      
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
            <div id="home">
                <section id="search-zone" className="search-zone">
                <section className="section">
                        <article className="checkbox" > <input type="radio" name="radio" id="" />Books</article>
                        <article className="checkbox" > <input type="radio" name="radio" id=""/> Coffes</article>
                    </section>
                    <input id="search" placeholder="Search everything that you find" type="search"/><a>Search</a>
                </section>
                
                <div id="Section"></div>
            </div>
        );
    }
}

export default Home;