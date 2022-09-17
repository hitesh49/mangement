import React, { useState } from "react";
import Swal from "sweetalert";

const Edit = ({ employees, setEmployees, setIsEditing, selectedEmployee }) => {
  const [firstName, setFirstName] = useState(selectedEmployee.firstName);
  const [lastName, setLastName] = useState(selectedEmployee.lastName);
  const [email, setEmail] = useState(selectedEmployee.email);
  const [salary, setSalary] = useState(selectedEmployee.salary);
  const [date, setDate] = useState(selectedEmployee.date);
  const handleEdit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal({
        icon: "error",
        title: "Error!",
        text: "All Fields are required",
        showConfirmButton: true,
      });
    }
    const id =selectedEmployee.id
    const employee = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date,
    };
    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
        console.log(employees[i].id)
        employees.splice(i, 1, employee);
      }
    }
    setEmployees(employees);
    setIsEditing(false);
    Swal({
      icon:"success",
      title:"Edit",
      text:"Value has been changed",
      showConfirmButton: true
    }
     
    )
  };
  return (
    <div>
      <form onSubmit={handleEdit}>
        <h1>Edit Employee</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputFirstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputFirstName"
            aria-describedby="emailHelp"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputLastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputLastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputSalary" className="form-label">
            Salary
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputSalary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputDate" className="form-label">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            id="exampleInputDate"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary me-2">
          Submit
        </button>
        <button className="btn btn-success" onClick={() => setIsEditing(false)}>
          Back
        </button>
      </form>
    </div>
  );
};

export default Edit;
