import React from 'react';

export const FormErrors = ({formErrors}) =>
  <div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (
          <h1 className="error" key={i}>{fieldName} {formErrors[fieldName]}</h1>
        )        
      } else {
        return '';
      }
    })}
  </div>