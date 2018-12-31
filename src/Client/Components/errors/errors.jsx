import React from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return { errorMessage: state.printerrors.error }
};

class ListErrors extends React.Component {
    constructor(props){
        super(props);  
        this.state = {  
            errorMessage:''
        }
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        this.setState({
            errorMessage:nextProps.errorMessage.error,
          })
      }

  render() {
    const errors = this.state.errorMessage;
    if (errors) {
      return (
        <ul className="">
          {
            Object.keys(errors).map(key => {
              return (
                <li key={key}>
                  {key} {errors[key]}
                </li>
              );
            })
          }
        </ul>
      );
    } else {
      return null;
    }
  }
}



export default connect (mapStateToProps,actions)  (ListErrors);