import React from 'react'
import { useState } from 'react';
import { Button, Form } from 'react-bootstrap'
import swal from 'sweetalert';

function Useradd() {
  const [user, setUser] = useState({
    user_id: "",
    user_name: "",
    date_of_joining: "",
    password: "",
    role: "",
    department: "",
    admin: ""
  });

  let name, value;
  const handleInput = (e) => {
    e.preventDefault();
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  }

  const PostData = async (e) => {
    e.preventDefault();

    const { user_id, user_name, date_of_joining, password, role, department, admin } = user;

    const res = await fetch("http://localhost:3002/admin/user_management-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id, user_name, date_of_joining, password, role, department, admin
      })
    });
    const data = await res.json();
    if(data.status ===422 || !data){
      window.alert("INvalid Data")
    }else{
      swal({
        title: "Good job!",
        text: "Your data is Add",
        icon: "success",
        button: "OK!",
      });
    }
    setUser.user_id("")
  }

  return (
    <div className='container'>
      <Form >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User_ID</Form.Label>
          <Form.Control type="text" placeholder="Category_ID" name="user_id" required
            value={user.user_id}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>User_Name</Form.Label>
          <Form.Control type="text" placeholder="Category_Name" name="user_name" required
            value={user.user_name}
            onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Date_Of_Joining</Form.Label>
          <Form.Control type="date" placeholder="Category_ID" name="date_of_joining" required
            value={user.date_of_joining}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="Category_Name" name="password" required
            value={user.password}
            onChange={handleInput} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User_Role</Form.Label>
          <Form.Control type="text" placeholder="Category_ID" name="role" required
            value={user.role}
            onChange={handleInput}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Department</Form.Label>
          <Form.Control type="text" placeholder="Category_Name" name="department" required
            value={user.department}
            onChange={handleInput} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Admin</Form.Label>
          <Form.Control type="text" placeholder="Category_ID" name="admin"
            value={user.admin}
            onChange={handleInput}
          />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={PostData}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Useradd