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
            <div className='row'>
                <div className='col-md-4 m-auto'>
                <form onSubmit={handleSubmit}>
                <label>name:</label>
                <br/>
                <input onBlur={handleBlur} type="text" name="name" placeholder='Enter Name'/>
                <br/>
                <label>email:</label>
                <br/>
                <input onBlur={handleBlur} type="text" name="email" placeholder='Enter email'/>
                <br/>
                <label>Dept:</label>
                <br/>
                <input onBlur={handleBlur} type="text" name="dept_name" placeholder='Enter Dept-name'/>
                <br/>
                                <label>Enter book Name</label>
                                <br/>
                <textarea onBlur={handleBlur} placeholder="Enter Books" name="book"/> 
            <br/>
            <input className='btn btn-success' type="submit" value="Book share"/>
            </form>
                </div>
            </div>
            
        </div>
    );
};

export default RegistrationBook;