import React, { useState } from 'react';

function Userform() {
    const[title,setTilte]=useState('');
    const[author,setAuthor]=useState('');

    const[data,setData]=useState('');


    const apiPost = async () =>{
        try {
        const fulldata =({title,author});
        const resp = await fetch('http://localhost:3000/posts',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(fulldata)
        });
        setData("user add");
        const checkdata = await resp.json();
        console.log(checkdata);
    } catch(error) {
        console.log(error);
       }

    }
    return (
        <>
            <div className='container bg-dark mt-5 p-5'>
                <div class="row">

                    <div className='col-md-6 offset-md-3 bg-white p-5'>
                        {
                            data
                        }

                        <div class="form-group">
                            <label for="exampleInputEmail1">Title</label>
                            <input type="text" class="form-control" onChange={(e)=>{setTilte(e.target.value)}}/>

                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Author</label>
                            <input type="text" class="form-control" onChange={(e)=>{setAuthor(e.target.value)}}/>
                        </div>

                        <button className='btn btn-info' onClick={()=>{apiPost()}}> Submit</button>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Userform;