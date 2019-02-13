import React from 'react';
import { AST_PropAccess } from 'terser';

const Spinner =(props)=>{

    return(
        <div class="ui active dimmer">
    <div class="ui big text loader">{props.message}</div>
  </div>
    );
};

Spinner.defaultProps={

    message:'Loading'
}

export default Spinner;