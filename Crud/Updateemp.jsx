import React, { useReducer, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATEEMP } from './Redux/Reducer/Reducer1'
function Updateemp() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const empid = pathname.replace("/updateemp/", "")
    const employee = useSelector((state) => state.users.users.find((emp) => emp.id === empid))

    const [data, setdata] = useState({
        id: empid,
        name: employee.name,
        age: employee.age,
        city: employee.city
    })

    const getInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setdata({ ...data, [name]: value })

    }
    const SendData = (e) => {
        e.preventDefault()
        dispatch(UPDATEEMP(data))
        navigate('/')
    }
    return (
        <div>
            <form onSubmit={SendData}>
                <div className="row" style={{ display: "flex", justifyContent: "center" }}>
                    <div className="four columns" style={{ textAlign: "center" }}>
                        <label htmlFor="exampletextInput">Id</label>
                        <input className="u-full-width" type="text" placeholder="id" value={empid} name='id' onChange={getInput} />
                        <label htmlFor="exampletextInput">Name</label>
                        <input className="u-full-width" type="text" placeholder="name" value={data.name} name="name" onChange={getInput} />
                        <label htmlFor="exampletextInput">Age</label>
                        <input className="u-full-width" type="text" placeholder="age" name='age' value={data.age} onChange={getInput} />
                        <label htmlFor="exampletextInput">City</label>
                        <input className="u-full-width" type="text" placeholder="city" name='city' value={data.city} onChange={getInput} />
                        <input className="button-primary" type="submit" defaultValue="Submit" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Updateemp