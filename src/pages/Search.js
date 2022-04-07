import React, { useState } from 'react';


function Search(){

    const[data,setData]=useState('');
    const[maidata,setMaindata]=useState('');

    const searchapi = async () =>{

        const searchdata= await fetch(`http://localhost:3000/posts?q=${data}`);
        setMaindata(await searchdata.json());
        // console.log(await searchdata.json());
    }
    return(
        <>
           <div className='container'>
               <div className='row'>
                   <div className='col-md-6 offset-md-3 mt-5'>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Search Title</label>
                            <input type="text" class="form-control" onChange={(e)=>{setData(e.target.value)}}/>
                        </div>
                        <button className="btn btn-dark" onClick={()=>{searchapi()}}>search submit</button>
                   </div>

                   <div className='col-md-6 offset-md-3 mt-5'>
                       <table className='table'>
                           <tr>
                            <td>Id</td>
                            <td>Title</td>
                            <td>Author</td>
                            </tr>
                   {
                       maidata?
                       maidata.map((res)=>
                               <tr>
                               <td>{res.id}</td>
                               <td>{res.title}</td>
                               <td>{res.author}</td>
                               </tr>
                       )
                       :<p>no data</p>
                   }
                   </table>
                   </div>
               </div>
           </div>
        </>
    )
}
export default Search;