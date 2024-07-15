import { useState } from "react";
import axios from "axios";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";

const AdminPage = () => {

    const [currentEmployee, setCurrentEmployee] = useState(null);

    const handleEdit = (employee) => {
        setCurrentEmployee(employee);
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3000/employees/${id}`);
        window.location.reload();
    };

    const handleSave = () => {
        setCurrentEmployee(null);
        window.location.reload();
    };

    return (
        <div className="container mt-5">
            <EmployeeList onEdit={handleEdit} onDelete={handleDelete} />
            <EmployeeForm currentEmployee={currentEmployee} onSave={handleSave} />
            <div style={{ marginBottom: "50px" }}></div>
        </div>
    )
}

export default AdminPage;