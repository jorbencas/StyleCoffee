import React from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return { errorMessage: state.printerrors.error }
};

class ListErrors extends React.Component {
  render() {
    const errors = this.props.errorMessage.errors;
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



export default ListErrors;