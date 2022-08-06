import React from 'react'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import swal from 'sweetalert'

function Productadd() {
  let [cid, setCid] = useState("")
  let [c_name, setC_name] = useState("")

  async function uploadcategory(e) {
    let data = { cid, c_name }
    console.log(data);
    e.preventDefault();

    let output = await fetch("http://localhost:3002/admin/category-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });
    const res = await output.json();
    console.log("output", res);
    swal({
      title: "Good job!",
      text: "Your data is Add",
      icon: "success",
      button: "OK!",
    });
    setCid("");
    setC_name("");
  }
  return (
    <div className='container'>
      <Form onSubmit={uploadcategory}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Category_ID</Form.Label>
          <Form.Control type="text" placeholder="Category_ID"
            value={cid}
            onChange={(e) => setCid(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Category_Name</Form.Label>
          <Form.Control type="text" placeholder="Category_Name"
            value={c_name}
            onChange={(e) => setC_name(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={uploadcategory}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Productadd