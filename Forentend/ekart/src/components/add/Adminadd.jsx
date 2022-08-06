import React from 'react'
import {Form, Button } from 'react-bootstrap'

function Adminadd() {

  function uploadcategory(e){
    console.log(e)
  }
  return (
    <div className='container'>
    <Form onSubmit={uploadcategory}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Registration_no</Form.Label>
        <Form.Control type="text" placeholder="Category_ID" message="Please fill this"
          // value={cid}
          // onChange={(e) => setCid(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>ShopID</Form.Label>
        <Form.Control type="text" placeholder="Category_Name"
          // value={c_name}
          // onChange={(e) => setC_name(e.target.value)} 
          />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ShopName</Form.Label>
        <Form.Control type="text" placeholder="Category_ID" message="Please fill this"
          // value={cid}
          // onChange={(e) => setCid(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Category_Name"
          // value={c_name}
          // onChange={(e) => setC_name(e.target.value)} 
          />

<Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Registration_no</Form.Label>
        <Form.Control type="text" placeholder="Category_ID" message="Please fill this"
          // value={cid}
          // onChange={(e) => setCid(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>State</Form.Label>
        <Form.Control type="text" placeholder="Category_Name"
          // value={c_name}
          // onChange={(e) => setC_name(e.target.value)} 
          />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="Category_ID" message="Please fill this"
          // value={cid}
          // onChange={(e) => setCid(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Pin</Form.Label>
        <Form.Control type="text" placeholder="Category_Name"
          // value={c_name}
          // onChange={(e) => setC_name(e.target.value)} 
          />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>contact</Form.Label>
        <Form.Control type="text" placeholder="Category_ID" message="Please fill this"
          // value={cid}
          // onChange={(e) => setCid(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Owner</Form.Label>
        <Form.Control type="text" placeholder="Category_Name"
          // value={c_name}
          // onChange={(e) => setC_name(e.target.value)} 
          />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Type</Form.Label>
        <Form.Control type="text" placeholder="Category_ID" message="Please fill this"
          // value={cid}
          // onChange={(e) => setCid(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Category_Name"
          // value={c_name}
          // onChange={(e) => setC_name(e.target.value)} 
          />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>URL</Form.Label>
        <Form.Control type="text" placeholder="Category_ID" message="Please fill this"
          // value={cid}
          // onChange={(e) => setCid(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>GST</Form.Label>
        <Form.Control type="text" placeholder="Category_Name"
          // value={c_name}
          // onChange={(e) => setC_name(e.target.value)} 
          />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>TrunOver</Form.Label>
        <Form.Control type="text" placeholder="Category_ID" message="Please fill this"
          // value={cid}
          // onChange={(e) => setCid(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Category_Name"
          // value={c_name}
          // onChange={(e) => setC_name(e.target.value)} 
          />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Term_Condition</Form.Label>
        <Form.Control type="text" placeholder="Category_ID" message="Please fill this"
          // value={cid}
          // onChange={(e) => setCid(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Status</Form.Label>
        <Form.Control type="text" placeholder="Category_Name"
          // value={c_name}
          // onChange={(e) => setC_name(e.target.value)} 
          />
      </Form.Group>
      
      </Form.Group>

      <Button variant="primary" type="submit" onClick={uploadcategory}>
        Submit
      </Button>
    </Form>
  </div>
  )
}

export default Adminadd