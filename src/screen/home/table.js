import React from 'react'

export default function Table() {
    return (
        <div className='form-box'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <table class="table shadow rounded border">
                            <thead className='table-dark'>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody className='table-secondary'>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td><i class="fa-solid fa-trash-can delete"></i></td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td><i class="fa-solid fa-trash-can delete"></i></td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td><i class="fa-solid fa-trash-can delete"></i></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
