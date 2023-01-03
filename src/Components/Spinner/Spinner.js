import React from 'react';
import './spinner.css'

const Spinner = () => {
    return (
      <div className='h-[70vh] flex justify-center items-center'>
        <div id="loading"></div>
      </div>
    );
};

export default Spinner;