import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Adduser from './Crud/adduser'
import EmpList from './Crud/EmpList'
import EmpTable from './Crud/EmpTable'
import Updateemp from './Crud/Updateemp'
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<EmpTable />}></Route>
          <Route path='/adduser' element={<Adduser />}></Route>
          <Route path='/emplist' element={<EmpList />}></Route>
          <Route path='emptable' element={<EmpTable />}></Route>
          <Route path='updateemp/:id' element={<Updateemp />}></Route>
          <Route path='/updateemp' element={<Updateemp />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App