import React from 'react'

export default function Registration() {
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
                                        <input type="text" class="form-control" id="validationDefault03" placeholder='Enter your name' required />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="validationDefault03" class="form-label">Last Name</label>
                                        <input type="text" class="form-control" id="validationDefault03" placeholder='Enter last name' required />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="validationDefault03" class="form-label">Mail Id</label>
                                        <input type="email" class="form-control" id="validationDefault03" placeholder='Enter email id' required />
                                    </div>
                                    <div class="col-md-6">
                                        <label for="validationDefault03" class="form-label">DOB</label>
                                        <input type="date" class="form-control" id="validationDefault03" placeholder='Enter DOB' required />
                                    </div>
                                    <div class="col-md-12">
                                        <label for="validationDefault03" class="form-label">Phone No</label>
                                        <input type="text" class="form-control" id="validationDefault03" placeholder='Phone No' required />
                                    </div>
                                    <div class="col-md-12">
                                        <label for="validationDefault03" class="form-label">Addres</label>
                                        <textarea type="text" class="form-control" id="validationDefault03" rows={3} placeholder='Address' required />
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary" type="submit">Submit form</button>
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
