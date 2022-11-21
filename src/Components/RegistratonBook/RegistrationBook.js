import React, { useState } from 'react';
   







const RegistrationBook = () => {

    const [bookData,setBookData]=useState({})
    console.log(bookData)

    const handleBlur=(e)=>{
        const field = e.target.name;
        const value = e.target.value
        const newData = { ...bookData };
        newData[field] = value
        setBookData(newData)
    }



    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(bookData)
        fetch('http://localhost:5000/books',{
            method:'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookData )
        }).then(res=>res.json())
        .then(data=>{
            alert(data)
        })

    }

    
    return (
        <div className='container'>
            <div className='row bg-light mt-5'>
                <div className='col-md-4 m-auto'>
                <form onSubmit={handleSubmit}>
                <label>name:</label>
              
                <input className='form-control' onBlur={handleBlur} type="text" name="name" placeholder='Enter Name'/>
               
                <label>email:</label>
              
                <input className='form-control' onBlur={handleBlur} type="text" name="email" placeholder='Enter email'/>
               
                <label>Dept:</label>
           
                <input className='form-control' onBlur={handleBlur} type="text" name="dept_name" placeholder='Enter Dept-name'/>
               
                                <label>Enter book Name</label>
                                <br/>
                <textarea className='form-control' onBlur={handleBlur} placeholder="Enter Books" name="book"/> 
            <br/>
            <input className='btn btn-success form-control' type="submit" value="Book share"/>
            </form>
                </div>
            </div>
            
        </div>
    );
};

export default RegistrationBook;