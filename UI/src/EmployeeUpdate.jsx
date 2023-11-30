import React, { Component } from 'react'
import { useParams, Link } from 'react-router-dom'

function wrapper(Component) {
  return props => (
    <Component {...props} params={useParams()} />
  )
}

class EmployeeUpdate extends Component {

  constructor(props) {
    super(props)
    this.state = {
      errors: [],
      message: '',
      id: null,
      firstName: '',
      lastName: '',
      dateOfJoining: '',
      age: '',
      title: '',
      employeeType: '',
      department: '',
      currentStatus: ''
    },
      this.updateForm = this.updateForm.bind(this)
    this.onChange = this.onChange.bind(this)
    this.updateEmployee = this.updateEmployee.bind(this)
  }

  componentDidCatch() {
    console.log('componentDidCatch');
  }




  componentDidMount() {
    fetch('http://localhost:3000/graphql', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
      query employeeData($id: String!) {
        employeeData(Id: $id) {
          id
          firstName
          lastName
          age
          dateOfJoining
          title
          department
          employeeType
          currentStatus
        }
      }            
    `,
        variables: { id: this.props.params.id }
      })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`GraphQL request failed with status ${response.status}`);
        }
        return response.json();
      })
      .then(result => {
        // Check for errors in the result
        if (result.errors) {
          throw new Error(result.errors.map(error => error.message).join('\n'));
        }

        // Extract data from the result
        const data = result.data.employeeData;
        console.log(data); this.setState({
          firstName: data.firstName,
          lastName: data.lastName,
          age: data.age,
          dateOfJoining: data.dateOfJoining,
          title: data.title,
          department: data.department,
          employeeType: data.employeeType,
          currentStatus: data.currentStatus,
          id: data.id
        })
      })
      .catch(error => {
        console.error('Error fetching employee data:', error);
      });


  }

  updateForm(event) {
    event.preventDefault()
    this.setState({ msg: '' })
    let errors = []

    if (!event.target.firstName.value) {
      errors.push('Firstname is required !')
    }
    if (!event.target.lastName.value) {
      errors.push('Lastname is required !')
    }
    if (!event.target.age.value) {
      errors.push('Age is required !')
    }
    if (parseInt(event.target.age.value) < 20 || parseInt(event.target.age.value) > 70) {
      errors.push('Age should be between 20 to 70');
    }
    if (!event.target.title.value) {
      errors.push('Title is required !')
    }
    if (!event.target.department.value) {
      errors.push('Department is required !')
    }
    if (!event.target.employeeType.value) {
      errors.push('Employee Type is required !')
    }
    if (!event.target.currentStatus.value) {
      errors.push('Current Status is required !')
    }
    this.setState({ errors: errors })
    if (errors.length == 0) {
      let age = parseInt(event.target.age.value)
      const data = {
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        age: event.target.age.value,
        title: event.target.title.value,
        department: event.target.department.value,
        employeeType: event.target.employeeType.value,
        currentStatus: event.target.currentStatus.value
      }
      event.target.firstName.value = ""
      event.target.lastName.value = ""
      event.target.age.value = ""
      event.target.title.value = ""
      event.target.department.value = ""
      event.target.employeeType.value = ""
      event.target.currentStatus.value = ""

      this.updateEmployee(data)
      this.setState({ message: 'Employee Updated Succesfully' })
    }
  }

  onChange(event) {
    const inputData = event.target.value
    this.setState({
      [event.target.name]: inputData
    })
  }

  updateEmployee(inputData) {
    inputData.id = this.state.id
    inputData.currentStatus = this.state.currentStatus == '1' ? true : false
    fetch("http://localhost:3000/graphql", {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
                    mutation updateEmployee(
                    id:ID!,
                    $title: Title,
                    $department: Department,
                    $currentStatus: Boolean!
                    ) {
                        updateEmployee(
                        id:ID!,
                        title: $title,
                        department: $department,
                        currentStatus: $currentStatus
                        ) {
                           id
                           firstName
                           lastName
                           age
                           dateOfJoining
                           title
                           department
                           employeeType
                           currentStatus
                        }
                    }
                `, variables: inputdata
      })
        .then(res => res.json())
        .then(function (res) {
          console.log(res)
        })
    })
  }

  render() {
    const errorlist = this.state.errors.map((error, index) => <p key={index} className="error-txt">{error}</p>)

    return <React.Fragment>
      <form onSubmit={this.updateForm} className="text-center form py-3">
        <h1>Update Employee</h1>
        <Link to="/" className='btn btn-outline-primary my-5 w-25'>All Employees</Link>
        {errorlist}
        <h3 className="success-txt">{this.state.msg}</h3>
        <div className='py-3'>
          <table className='container w-25 table-borderless table' cellPadding={10}>
            <tbody>
              <tr>
                <th>
                  <label>First Name:</label>
                </th>
                <td>
                  <input type="text" className='form-control' name="firstName" defaultValue={this.state.firstName} readOnly />
                </td>
              </tr>
              <tr>
                <th>
                  <label>Last Name:</label>
                </th>
                <td>
                  <input type="text" className='form-control' name="lastName" defaultValue={this.state.lastName} readOnly />
                </td>
              </tr>
              <tr>
                <th>
                  <label>Age:</label>
                </th>
                <td>
                  <input type="number" id="age" name="age" className='form-control' defaultValue={this.state.age} readOnly />
                </td>
              </tr>
              <tr>
                <th>
                  <label>Date of joining:</label>
                </th>
                <td>
                  <input type="date" name="dateOfJoining" className='form-control' />
                </td>
              </tr>
              <tr>
                <th>
                  <label>Title:</label>
                </th>
                <td>
                  <select name="title" className="form-select" value={this.state.title} onChange={this.onChange}>
                    <option value="Director">Director</option>
                    <option value="Employee">Employee</option>
                    <option value="VP">VP</option>
                    <option value="Manager">Manager</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>
                  <label>Department:</label>
                </th>
                <td>
                  <select name="department" className="form-select" value={this.state.department} onChange={this.onChange}>
                    <option value="Engineering">Engineering</option>
                    <option value="HR">HR</option>
                    <option value="IT">IT</option>
                    <option value="Marketing">Marketing</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>
                  <label>Employee of Type:</label>
                </th>
                <td>
                  <select name="employeeType" className="form-select" value={this.state.employeeType} disabled>
                    <option value="FullTime">FullTime</option>
                    <option value="PartTime">PartTime</option>
                    <option value="Contract">Contract</option>
                    <option value="Seasonal">Seasonal</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <button className='btn my-5 w-100 btn-outline-dark' type="submit">Update Employee</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </React.Fragment>
  }
}

export default wrapper(EmployeeUpdate)