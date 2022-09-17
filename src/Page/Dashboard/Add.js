import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import Swal from "sweetalert";

const Add = ({ employees, setIsAdding, setEmployees }) => {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    salary: "",
    date: "",
  });
  // useref
  const textfirst = useRef(null);
  useEffect(() => {
    textfirst.current.focus();
  }, []);
  // handleinput field//
  const handleInput = (e) => {
    const namee = e.target.name;
    const value = e.target.value;
    setFormData((prev) => {
      return { ...prev, [namee]: value };
    });
  };
  const handleAdd = (e) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.salary ||
      !formData.date
    ) {
      return Swal({
        icon: "error",
        title: "Error!",
        text: "All Fields are required",
        showConfirmButton: true,
      });
    }

    const id = employees.length + 1;
    const newEmpolyee = {
      id,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      salary: formData.salary,
      date: formData.date,
    };
    employees.push(newEmpolyee);
    setEmployees(employees);
    setIsAdding(false);
    Swal({
      icon: "success",
      title: "Added!",
      text: `${formData.firstName}${formData.lastName} data has been Added.`,
      showConfirmButton: false,
      timer: 2000,
    });
  };

  return (
    <div className="container align-center">
      <form onSubmit={handleAdd}>
        <h1>Add Employee</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputFirstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputFirstName"
            aria-describedby="emailHelp"
            name="firstName"
            ref={textfirst}
            value={formData.firstName}
            onChange={handleInput}
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
            name="lastName"
            value={formData.lastName}
            onChange={handleInput}
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
            name="email"
            value={formData.email}
            onChange={handleInput}
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
            name="salary"
            value={formData.salary}
            onChange={handleInput}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputDate" className="form-label">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            name="date"
            id="exampleInputDate"
            value={formData.date}
            onChange={handleInput}
          />
        </div>

        <button type="submit" className="btn btn-primary me-2">
          Submit
        </button>
        <button className="btn btn-success" onClick={() => setIsAdding(false)}>
          Back
        </button>
      </form>
    </div>
  );
};

export default Add;
