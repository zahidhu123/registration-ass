import React, { useState } from 'react'

export default function Table() {

    const demolist = [
        {
            first: 'Jacob',
            last: 'Thornton',
            handle: '@fat',
        },
        {
            first: 'Jacob',
            last: 'Thornton',
            handle: '@fat',
        },
        {
            first: 'Jacob',
            last: 'Thornton',
            handle: '@fat',
        },
        {
            first: 'Jacob',
            last: 'Thornton',
            handle: '@fat',
        }
    ]

    const [item, setItem] = useState(demolist)



    function onDelete(index) {
        setItem([
            ...item.slice(0, index),
            ...item.slice(index + 1, item.length)
        ]);
    }

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
                                {item.map((data, index) => {
                                    return <tr>
                                        <th scope="row">2</th>
                                        <td>{data.first}</td>
                                        <td>{data.last}</td>
                                        <td>{data.handle}</td>
                                        <td><i class="fa-solid fa-trash-can delete" onClick={() => { onDelete(index) }}></i></td>
                                    </tr>
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
