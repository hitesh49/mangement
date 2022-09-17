import React from "react";
import swal from "sweetalert";
import Edit from "./Edit";
import Header from "./Header";
import List from "./List";
import Add from "./Add";
import { employeesData } from "../../data";
import { useState } from "react";

const Dashboard = () => {
  const [employees, setEmployees] = useState(employeesData);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const handleEdit = (id) => {
    const [emloyee] = employees.filter((employe) => employe.id === id);
    setSelectedEmployee(emloyee);
    setIsEditing(true);
  };
  const handleDelete = (id) => {
    const newList = employees.filter((value) => value.id !== id);
    setEmployees(newList);
    swal({
      icon:"success",
      title:"Delete",
      text:"item has been deleted",
      timer:1500
    })
  };
  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header setIsAdding={setIsAdding} />
          <List
            employees={employees}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isAdding && (
        <Add
          setIsAdding={setIsAdding}
          employees={employees}
          setEmployees={setEmployees}
        />
      )}
      {isEditing && (
        <Edit
          employees={employees}
          setEmployees={setEmployees}
          setIsEditing={setIsEditing}
          selectedEmployee={selectedEmployee}
        />
      )}
    </div>
  );
};

export default Dashboard;
