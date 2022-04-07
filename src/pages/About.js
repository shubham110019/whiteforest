import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function About() {
    const[title,setTilte]=useState('');
    const[author,setAuthor]=useState('');
    const[userid,setUserid]=useState('');

    const [data, setData] = useState();

    const apiData = async () => {

        const apidata = await fetch('http://localhost:3000/posts');
        setData(await apidata.json());

    }


    const deleteapi = async (id) => {
        try {
            const apidl = await fetch(`http://localhost:3000/posts/${id}`, {
                method: 'Delete',
            });
            console.log('delete user id' + id);
            apiData();
        }
        catch (error) {
            console.log(error);
        }


    }

    const editapi = async (id) =>{

        const editapidata = await fetch(`http://localhost:3000/posts/${id}`);

        const editmaindata = await editapidata.json()

        setTilte(editmaindata.title);
        setAuthor(editmaindata.author);
        setUserid(id);
    }

    const editfulldata = async (id) =>{
        try {
        const fulleditdata =({title,author});
        const resp = await fetch(`http://localhost:3000/posts/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(fulleditdata)
        });
        apiData();
    } catch(error) {
        console.log(error);
       }

    }

    useEffect(() => {
        apiData();
    }, [])
    return (
        <>

            <div className='container'>
                <div class="row">
                    <div className='col-md-6 mt-5'>
                        <table className='table'>
                            <tr>
                                <td>Id</td>
                                <td>Title</td>
                                <td>Author</td>
                                <td>Edit</td>
                                <td>Delete</td>
                            </tr>
                            {
                                data ?
                                    data.map((result, i) => {
                                        return (
                                            <>
                                                <tr key={i}>
                                                    <td>{result.id}</td>
                                                    <td>{result.title}</td>
                                                    <td>{result.author}</td>
                                                    <td><button className='btn btn-info btn-sm' onClick={() => { editapi(result.id) }}>Edit</button></td>
                                                    <td><button className='btn btn-danger btn-sm' onClick={() => { deleteapi(result.id) }}>delete</button></td>
                                                </tr>

                                            </>
                                        )
                                    }) : null
                            }
                        </table>
                    </div>
                    <div className='col-md-6'>
                    <div class="form-group">
                            <label for="exampleInputEmail1">Title</label>
                            <input type="text" class="form-control" value={title} onChange={(e)=>{setTilte(e.target.value)}}/>

                        </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Author</label>
                            <input type="text" class="form-control" value={author} onChange={(e)=>{setAuthor(e.target.value)}}/>
                        </div>

                        <button className='btn btn-info' onClick={()=>{editfulldata(userid)}}> Submit</button>
                    </div>
                    </div></div>
        </>
    )

}
export default About;