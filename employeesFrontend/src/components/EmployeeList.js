import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavbarAfter from './NavbarAfter';


const EmployeeList = ({ onEdit, onDelete }) => {
  const [employees, setEmployees] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchName = e.target;
    employees.find(searchName);
  }

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:3000/employees');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  return (
    <div className="container mt-5">
      <NavbarAfter />
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="text" placeholder="Search by Name" aria-label="Search" />
        <button class="btn btn-outline-success" type="button" onClick={handleSearch}>Search</button>
      </form>
      <h2 style={{ marginTop: "20px" }}>Employee List</h2>
      <ul className="list-group">
        {employees.map(employee => (
          <li key={employee.id} className="list-group-item d-flex justify-content-between align-items-center">
            {employee.name} - ${employee.salary} - {employee.age} years old
            <div>
              <button className="btn btn-primary btn-sm me-2" onClick={() => onEdit(employee)}>Edit</button>
              <button className="btn btn-danger btn-sm" onClick={() => onDelete(employee.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
