import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeForm = ({ currentEmployee, onSave }) => {
  const [employee, setEmployee] = useState({ id: '', name: '', salary: '', age: '' });

  useEffect(() => {
    if (currentEmployee) {
      setEmployee(currentEmployee);
    } else {
      setEmployee({ id: '', name: '', salary: '', age: '' });
    }
  }, [currentEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (employee.id) {
      await axios.put(`http://localhost:3000/employees/${employee.id}`, employee);
    } else {
      await axios.post('http://localhost:3000/employees', employee);
    }
    onSave();
  };

  return (
    <div className="container mt-5">
      <h2>{employee.id ? 'Edit Employee' : 'Add Employee'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
            className="form-control"
            placeholder="Name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Salary</label>
          <input
            type="number"
            name="salary"
            value={employee.salary}
            onChange={handleChange}
            className="form-control"
            placeholder="Salary"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            name="age"
            value={employee.age}
            onChange={handleChange}
            className="form-control"
            placeholder="Age"
            required
          />
        </div>
        <button type="submit" className="btn btn-success">Save</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
