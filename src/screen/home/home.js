import React, { useEffect,useState } from 'react'
import ModalButton from '../../component/modal-button/modalButton'
import Navbar from '../../component/navbar/navbar'

export default function Home() {


    const demolist = [
        {
            first: 'md',
            last: 'imran',
            mail: 'abc@gmail.com',
            dob: '20-08-2022',
            phone: 8809294836,
            address: 'bhopal'

        },
        {
            first: 'md',
            last: 'kalim',
            mail: 'abcd@gmail.com',
            dob: '25-08-2022',
            phone: 8809294536,
            address: 'Muzagarpur'
        },
        {
            first: 'md',
            last: 'Shahbaj',
            mail: 'abcde@gmail.com',
            dob: '30-08-2022',
            phone: 8808294536,
            address: 'Mithanpura'
        },
        {
            first: 'md',
            last: 'Iqbal',
            mail: 'asdf@gmail.com',
            dob: '02-08-2022',
            phone: 9808294536,
            address: 'ashoka garden'
        }
    ]

    const [item, setItem] = useState(demolist);


    // useEffect(() => {
    //     setItem(oldArray => [...oldArray, user])
    // }, [user]);

    function onUserAdd(data) {
        setItem(oldArray => [...oldArray, data])
    }



    function onDelete(index) {
        setItem([
            ...item.slice(0, index),
            ...item.slice(index + 1, item.length)
        ]);
    }


    return (
        <>
            <div className=''>
                <Navbar />
                <div className="container">
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-8">
                            <div className="row p-0 justify-content-between">
                                <div className="col-md-6">
                                    <h2 className='heading'>User List</h2>
                                </div>
                                <div className="col-md-3">
                                    <div className='d-flex justify-content-end'>
                                        <ModalButton handleData={(data) => onUserAdd(data)} />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">


                            <table class="table shadow rounded border mt-2">
                                <thead className='table-dark'>
                                    <tr>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Dob</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody className='table-secondary'>
                                    {item.map((data, index) => {
                                        return <tr>
                                            <td>{data.first}</td>
                                            <td>{data.last}</td>
                                            <td>{data.mail}</td>
                                            <td>{data.dob}</td>
                                            <td>{data.phone}</td>
                                            <td>{data.address}</td>
                                            <td><i class="fa-solid fa-trash-can delete" onClick={() => { onDelete(index) }}></i></td>
                                        </tr>
                                    })}

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
