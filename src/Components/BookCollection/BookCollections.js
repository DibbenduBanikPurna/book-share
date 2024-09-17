import React from 'react';
import { Link } from 'react-router-dom';
import './BookCollection.css'

const BookCollections = ({data}) => {
    console.log(data)
    return (
        <div className='col-md-3'>
            <div className='card bg-light'>
                <div className='card-body'>
                <img className='img-fluid image'  src={`data:image/jpeg;base64,${data.image}`} alt="" />
                <div className='mt-2'>
                    <p>name:{data.name}</p>
                    <p>email:{data.email}</p>
                    <p>dept:{data.dept_name}</p>
                    <p>book:{data.book}</p>
                    
                    
                   <Link to={`/bookcollection/${data._id}`}> <button className='btn btn-success'>Collect Book</button></Link>
                </div>
                </div>
            </div>

            
        </div>
    );
};

export default BookCollections;