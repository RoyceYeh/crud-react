import React, { useEffect, useState } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:5001/api/user')
      const data = await response.json()
      setUsers(data)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    fetchUsers()
  }, [])

  const handleUpdate = (userId) => {
    navigate(`/user/${userId}`)
  }

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5001/api/user/${userId}`, {
        method: 'DELETE',
      })
      if (response.ok) {
        fetchUsers()
      }
    } catch (error) {
      console.log('ERROR delete user', error.message)
    }
  }
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                {/* <th scope="col">Action</th> */}
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => {
                return (
                  <tr key={user._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>
                      {/* <Button variant="dark" className="mx-1">
                        Update
                      </Button> */}
                      <Button variant="dark" className="mx-1" onClick={() => handleUpdate(user._id)}>
                        Update
                      </Button>
                      {/*<Button variant="danger">Dalete</Button>*/}
                      <Button variant="danger" onClick={() => handleDelete(user._id)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </Row>
      </Container>
    </div>
  )
}

export default Dashboard
