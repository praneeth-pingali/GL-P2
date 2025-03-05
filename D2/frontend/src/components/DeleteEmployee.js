import React, { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../api";
import { useNavigate } from "react-router-dom";

const DeleteEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const response = await getEmployees();
    setEmployees(response.data);
  };

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    fetchEmployees(); // Refresh list after deletion
  };

  return (
    <div className="container">
      <h2 className="mt-3">Delete Employee</h2>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Department</th>
            <th>Manager</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.address}</td>
              <td>{emp.dept}</td>
              <td>{emp.manager}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(emp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-secondary mt-3" onClick={() => navigate("/list")}>Back to List</button>
    </div>
  );
};

export default DeleteEmployee;
