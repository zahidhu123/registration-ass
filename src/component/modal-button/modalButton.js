import React, { useState, useEffect } from 'react'
import './modalButton.css'
import axios from 'axios'
import { useNavigate } from 'react-router';


export default function ModalButton(props) {

    const [first, setFirst] = useState();
    const [last, setLast] = useState();
    const [mail, setMail] = useState();
    const [dob, setDob] = useState();
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();


    return (
        <div>
            <button type="button" className="btn btn-create" data-bs-toggle="modal" data-bs-target="#exampleModalCreate" data-bs-whatever="@mdo">Registration</button>

            <div className="modal fade" id="exampleModalCreate" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header header-wrapper">
                            <h5 className="modal-title" id="exampleModalLabel">Registration</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label for="validationDefault03" class="form-label mb-1">First name</label>
                                    <input type="text" value={first}
                                        onChange={e => setFirst(e.target.value)}
                                        class="form-control" id="validationDefault03" placeholder='Enter your name' required />
                                </div>
                                <div className="mb-3">
                                    <label for="validationDefault03" class="form-label mb-1">Last Name</label>
                                    <input type="text" value={last}
                                        onChange={e => setLast(e.target.value)}
                                        class="form-control" id="validationDefault03" placeholder='Enter last name' required />
                                </div>
                                <div className="mb-3">
                                    <label for="validationDefault03" class="form-label mb-1">Mail Id</label>
                                    <input type="email" value={mail}
                                        onChange={e => setMail(e.target.value)}
                                        class="form-control" id="validationDefault03" placeholder='Enter email id' required />
                                </div>
                                <div className="mb-3">
                                    <label for="validationDefault03" class="form-label mb-1">DOB</label>
                                    <input type="date" value={dob}
                                        onChange={e => setDob(e.target.value)}
                                        class="form-control" id="validationDefault03" placeholder='Enter DOB' required />
                                </div>
                                <div className="mb-3">
                                    <label for="validationDefault03" class="form-label mb-1">Phone No</label>
                                    <input type="text" value={phone}
                                        onChange={e => setPhone(e.target.value)}
                                        class="form-control" id="validationDefault03" placeholder='Phone No' required />
                                </div>
                                <div className='mb-3'>
                                    <label for="validationDefault03" class="form-label mb-1">Addres</label>
                                    <textarea type="text" value={address}
                                        onChange={e => setAddress(e.target.value)}
                                        class="form-control" id="validationDefault03" rows={3} placeholder='Address' required />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer header-wrapper pb-0">
                            <button type="button"  data-bs-dismiss="modal" aria-label="Close" className="btn btn-primary" onClick={()=>props.handleData({
                                first: first,
                                last: last,
                                mail: mail,
                                dob: dob,
                                phone: phone,
                                address: address,
                            })}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
