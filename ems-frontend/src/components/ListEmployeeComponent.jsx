import React, {useEffect, useState} from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, [])

    function getAllEmployees(){
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.log(error);
        })
    }
    function addNewEmployee(){
        navigator('/add-employee')
    }

    function updateEmployee(id){
        navigator(`/edit-employee/${id}`)
    }


    function removeEmployee(id){
        console.log(id);

        deleteEmployee(id).then((response) => {
            getAllEmployees();
        }).catch(error => {
            console.error(error);
        })
    }
  return (
    <div className='container mt-4'>
        <div className="card shadow-sm">
            <div className="card-header">
                <h2 className='text-center mb-0'>List of Employees</h2>
            </div>
            <div className="card-body">
                <button className='btn btn-primary mb-3' onClick={addNewEmployee}>
                    ➕ Add Employee
                </button>
                <div className="table-responsive">
                    <table className='table table-striped table-bordered table-hover'>
                        <thead className='table-dark'>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th className='text-center'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employees.map(employee =>
                                    <tr key={employee.id}>
                                        <td>{employee.id}</td>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.email}</td>
                                        <td className='text-center'>
                                            <button className='btn btn-info btn-sm me-2' onClick={() => updateEmployee(employee.id)}>✏️ Update</button>
                                            <button className='btn btn-danger btn-sm' onClick={() => removeEmployee(employee.id)}>🗑️ Delete</button>
                                        </td>
                                    </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListEmployeeComponent