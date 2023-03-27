import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { ADDUSER } from './Redux/Reducer/Reducer1';
import { useNavigate } from 'react-router-dom';
function Adduser() {
  const Navigate=useNavigate()
  const dispatch=useDispatch();
  const[data,setdata]=useState({
    id:"",
    name:"",
    age:"",
    city:""
  })

  const getInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setdata({...data,[name]:value})

  }
  const SendData=(e)=>{
    e.preventDefault();
    console.log(data)
      
      if(data.name && data.id !==""){
        dispatch(ADDUSER(data))
        Navigate('/')
      }else{
        alert("data not inserted")
      }
      
      
  }
  return (

 <div>
  <form onSubmit={SendData}>
    <div className="row" style={{display:"flex",justifyContent:"center"}}>
      <div className="four columns" style={{textAlign:"center"}}>
      <label htmlFor="exampletextInput">Id</label>
        <input className="u-full-width" type="text" placeholder="id" name='id'  onChange={(e)=>getInput(e)} />
        <label htmlFor="exampletextInput">Name</label>
        <input className="u-full-width" type="text" placeholder="name" name='name'  onChange={(e)=>getInput(e)} />
        <label htmlFor="exampletextInput">Age</label>
        <input className="u-full-width" type="text" placeholder="age" name='age' onChange={(e)=>getInput(e)} />
        <label htmlFor="exampletextInput">City</label>
        <input className="u-full-width" type="text" placeholder="city" name='city' onChange={(e)=>getInput(e)} />
        <input className="button-primary" type="submit" defaultValue="Submit" />
      </div>
    </div>
  </form>
</div>

  )
}

export default Adduser