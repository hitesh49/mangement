import React from "react";

const List = ({ employees, handleEdit, handleDelete }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: null,
  });
  return (
    <div>
      <table className="table table-striped table-hover">
        <thead>
          <tr className="text-center">
            <th scope="col">NO</th>
            <th scope="col">First Name </th>
            <th scope="col">Last Name</th>
            <th scope="col" className="text-center">Email</th>
            <th scope="col">Salary</th>
            <th scope="col" className="text-center">Date</th>
            <th colSpan="2" className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((value, i) => {
              const {firstName,lastName,email,salary,date} =value
              return (
                <>
                  <tr key={value.id} className="text-center fw-bold">
                    <th scope="row">{i + 1}</th>
<<<<<<< Updated upstream
                    <td>{value.firstName}</td>
                    <td>{value.lastName}</td>
                    <td className="text-center">{value.email}</td>
                    <td>{formatter.format(value.salary)}</td>
                    <td className="text-center">{value.date}</td>
                    <td className="text-center">
=======
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{email}</td>
                    <td>{formatter.format(salary)}</td>
                    <td>{date}</td>
                    <td>
>>>>>>> Stashed changes
                      <button onClick={()=>{handleEdit(value.id)}} className="btn btn-info">Edit</button>
                    </td>
                    <td className="text-center">
                      <button onClick={()=>{handleDelete(value.id)}} className="btn btn-danger">Delete</button>
                    </td>
                  </tr>
                </>
              );
            })
          ) : (
            <tr>
              <th colSpan={7} className="text-center">empty list</th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default List;
