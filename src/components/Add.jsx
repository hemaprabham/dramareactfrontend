import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Addheader from './Addheader'

const Add = () => {
    const [inputfield,Changeinputfield]=useState(
        {
            "title": "",
            "genre": "",
            "director": "",
            "writer": "",
            "language": "",
            "country": ""
        }
        
        )
        const inputhandler=(event)=>{

            Changeinputfield({...inputfield,[event.target.name]:event.target.value})
        }
        const readvalue=()=>{
                console.log(inputfield)
                
                    axios.post("http://127.0.0.1:8000/addall/",inputfield).then(
                        (response)=>{
                            alert(response.data.status)
                        }
                    )
                    
               

        }

  return (
    <div>
        <Addheader/>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12" >
                        <div className="row g-3" >
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
  <label htmlFor="" className="label-control">Title</label>
  <input 
    type="text" 
    className="form-control" 
    name='title' 
    value={inputfield.title} 
    onChange={inputhandler} 
  />
</div>
<div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
  <label htmlFor="" className="label-control">Genre</label>
  <input 
    type="text" 
    className="form-control" 
    name='genre' 
    value={inputfield.genre} 
    onChange={inputhandler} 
  />
</div>
<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
  <label htmlFor="" className="label-control">Director</label>
  <input 
    type="text" 
    className="form-control" 
    name='director' 
    value={inputfield.director} 
    onChange={inputhandler} 
  />
</div>
<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
  <label htmlFor="" className="label-control">Writer</label>
  <input 
    type="text" 
    className="form-control" 
    name='writer' 
    value={inputfield.writer} 
    onChange={inputhandler} 
  />
</div>
<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
  <label htmlFor="" className="label-control">Language</label>
  <input 
    type="text" 
    className="form-control" 
    name='language' 
    value={inputfield.language} 
    onChange={inputhandler} 
  />
</div>
<div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
  <label htmlFor="" className="label-control">Country</label>
  <input 
    type="text" 
    className="form-control" 
    name='country' 
    value={inputfield.country} 
    onChange={inputhandler} 
  />
</div>

     
                            
                            
                            
                            <div className="col col-12 col-sm-12 col-md-12 col lg-12 col-xl-12 col-xxl-12">
                                <button  onClick={readvalue}className="btn btn-warning">Add drama</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    
  )
}

export default Add