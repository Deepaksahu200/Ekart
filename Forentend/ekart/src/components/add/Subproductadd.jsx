import React from 'react';
import {Form , Button} from 'react-bootstrap'
import { useState } from 'react';
import swal from 'sweetalert';

function Subproductadd() {

  let[cid , setCid] = useState("")
  let[ccid , setCcid] = useState("")
  let [cc_name , setCc_name] = useState("")

  async function uploadcategory(e) {
    let data = {   cid  , ccid , cc_name }
    console.log(data);
    e.preventDefault();

    let output = await fetch("http://localhost:3002/admin//categorysub-post", {
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
    setCc_name("");
    setCcid("");
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
        <Form.Label>SubCategory_Name</Form.Label>
        <Form.Control type="text" placeholder="SubCategory_Name"
          value={ccid}
          onChange={(e) => setCcid(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>SubCategory_Name</Form.Label>
        <Form.Control type="text" placeholder="ubCategory_Name"
          value={cc_name}
          onChange={(e) => setCc_name(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={uploadcategory}>
        Submit
      </Button>
    </Form>
  </div>
  )
}

export default Subproductadd