import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from "./components/EmployeeForm";
import UpdateEmployee from "./components/UpdateEmployee";
import DeleteEmployee from "./components/DeleteEmployee";

function App() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (
    <div className="container mt-5">
      <h1>Employee Management</h1>
      <nav className="mb-3">
        <Link to="/form" className="btn btn-primary mx-2">Add Employee</Link>
        <Link to="/list" className="btn btn-secondary">View Employees</Link>
        <Link to="/update" className="btn btn-warning">Update Employee</Link>
        <Link to="/delete" className="btn btn-danger">Delete Employee</Link>  
      </nav>
      
      <Routes>
        <Route path="/form" element={<EmployeeForm employee={selectedEmployee} />} />
        <Route path="/list" element={<EmployeeList onEdit={setSelectedEmployee} />} />
        <Route path="/update" element={<UpdateEmployee employee={selectedEmployee} />} />
        <Route path="/delete" element={<DeleteEmployee />} />
      </Routes>
    </div>
  );
}

export default App;
