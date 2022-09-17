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
          <tr>
            <th scope="col">NO</th>
            <th scope="col">First Name </th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Salary</th>
            <th scope="col">Date</th>
            <th colSpan="2" className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((value, i) => {
              return (
                <>
                  <tr key={value.id}>
                    <th scope="row">{i + 1}</th>
                    <td>{value.firstName}</td>
                    <td>{value.lastName}</td>
                    <td>{value.email}</td>
                    <td>{formatter.format(value.salary)}</td>
                    <td>{value.date}</td>
                    <td>
                      <button onClick={()=>{handleEdit(value.id)}} className="btn btn-info">Edit</button>
                    </td>
                    <td>
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
