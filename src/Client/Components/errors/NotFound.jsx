import React from 'react';

class NotFound extends React.Component{
    render(){
        return(
            <section>   
                <img src="./photos/403.png" alt="Not Found"/>
                <h1>403</h1>
                <h3>Acess Denied</h3>
                <p>You do nothave permission to view this resource</p>
            </section>
        );
    }
}
export default NotFound;