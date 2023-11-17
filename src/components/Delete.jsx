import React from 'react'
import Addheader from './Addheader'


const Delete = () => {
    return (
        <div>
            <Addheader/>
            <div class="container">
            <div class="row">
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 xol-xxl-12">
                        <div class="row g-3">
                            <div class="col col-12 col-sm-6 col-mg-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <label for="" class="input-label">title</label>
                                    <input type="text" className="form-control" />
                            </div>
                            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button class="btn btn-danger">Delete</button>
                            </div>
                            
                        </div>
    
                </div>
            </div>
        </div>
    
    
        </div>
      )
    }


export default Delete