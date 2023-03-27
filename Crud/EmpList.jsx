import React from 'react'
import { Link } from 'react-router-dom'

function EmpList() {
  return (
    <div>
     <h1>Empolyee List</h1>
    <button><Link to="adduser">Adduser</Link></button>
    </div>
  )
}

export default EmpList