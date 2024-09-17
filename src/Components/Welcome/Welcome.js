import React from 'react';
import pics from '../Welcome/back.jpg'
const Welcome = () => {
    return (
        <div>
            <p className='text-center'>Welcome To Book World</p>
            <img className='img-fluid' src={pics}/>
        </div>
    );
};

export default Welcome;