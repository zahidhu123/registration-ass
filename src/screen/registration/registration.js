import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Registration() {


    const [first, setFirst] = useState();
    const [last, setLast] = useState();
    const [mail, setMail] = useState();
    const [dob, setDob] = useState();
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();
    
    const handleData = () => {
        console.log(first, last,mail,dob,phone,address)
    }

    
    return (
        <>
            <div className='form-box'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className='shadow form-wrapper rounded-3'>
                                <form class="row g-3">
                                    <div>
                                        <h1>Registration page</h1>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="validationDefault03" class="form-label">First name</label>
                                        <input type="text" value={first}
                                        onChange={e => setFirst(e.target.value)}
                                         class="form-control" id="validationDefault03" placeholder='Enter your name' required />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="validationDefault03" class="form-label">Last Name</label>
                                        <input type="text" value={last}
                                        onChange={e => setLast(e.target.value)} 
                                        class="form-control" id="validationDefault03" placeholder='Enter last name' required />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="validationDefault03" class="form-label">Mail Id</label>
                                        <input type="email" value={mail}
                                        onChange={e => setMail(e.target.value)} 
                                         class="form-control" id="validationDefault03" placeholder='Enter email id' required />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="validationDefault03" class="form-label">DOB</label>
                                        <input type="date" value={dob} 
                                        onChange={e => setDob(e.target.value)}
                                        class="form-control" id="validationDefault03" placeholder='Enter DOB' required />
                                    </div>
                                    <div class="col-md-12">
                                        <label for="validationDefault03" class="form-label">Phone No</label>
                                        <input type="text" value={phone}
                                        onChange={e => setPhone(e.target.value)}
                                         class="form-control" id="validationDefault03" placeholder='Phone No' required />
                                    </div>
                                    <div class="col-md-12">
                                        <label for="validationDefault03" class="form-label">Addres</label>
                                        <textarea type="text" value={address}
                                        onChange={e => setAddress(e.target.value)}
                                         class="form-control" id="validationDefault03" rows={3} placeholder='Address' required />
                                    </div>
                                    <div class="col-12">
                                        <NavLink to={''}>
                                        <button class="btn btn-primary" type="submit" onClick={handleData}>Registration</button>
                                        </NavLink>
                                        
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
