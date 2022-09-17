import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import Swal from "sweetalert";

const Add = ({ employees, setIsAdding, setEmployees }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");
  const textfirst = useRef(null);
  useEffect(() => {
    textfirst.current.focus();
  }, []);
  const handleAdd = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !salary || !date) {
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
      firstName,
      lastName,
      email,
      salary,
      date,
    };
    employees.push(newEmpolyee);
    setEmployees(employees);
    setIsAdding(false);
    Swal({
      icon: "success",
      title: "Added!",
      text: `${firstName}${lastName} data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="container">
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
            ref={textfirst}
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

        <button type="submit" className="btn btn-primary">
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
