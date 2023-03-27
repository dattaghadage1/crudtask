import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE } from './Redux/Reducer/Reducer1'
function EmpTable() {
    const [data, setdata] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const empdata = useSelector((state) => state.users.users)

    useEffect(() => {
        setdata(empdata)
    }, [empdata])

    const Deleterecord = (e) => {
        dispatch(DELETE(e))
    }
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Employee Table</h1>
            <button style={{ float: "right", background: "purpal", marginRight: "60px" }}><Link to="adduser" style={{ textDecoration: "none", fontSize: "2rem", }}>Add-user</Link></button>
            <table className="five column">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>City</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((e, i) => (
                            <tr key={i}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.age}</td>
                                <td>{e.city}</td>
                                <td ><button onClick={() => Deleterecord(e.id)}>Delete</button></td>
                                <td><Link to={`/updateemp/${e.id}`}><button>Update</button></Link></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default EmpTable