import React from 'react';

const BookCollections = ({data}) => {
    console.log(data)
    return (
        <div className='col-md-3'>
            <div className='card'>
                <div className='card-body'>
                    <p>name:{data.name}</p>
                    <p>email:{data.email}</p>
                    <p>dept:{data.dept}</p>
                    <p>book:{data.book}</p>
                </div>
            </div>

            
        </div>
    );
};

export default BookCollections;