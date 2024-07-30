import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const PostUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const navigate = useNavigate()

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:5001/api/user', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await response.json(response)
      console.log(data)
      navigate('/')
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <>
      <div className="container ">
        <h1 className="my-5 text-center text-bold">Post New User</h1>
        <div className="card mx-auto p-4 shadow-sm" style={{ width: '32rem' }}>
          <Form className=" " onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Enter phone" />
            </Form.Group>

            <Button variant="dark" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  )
}

export default PostUser
