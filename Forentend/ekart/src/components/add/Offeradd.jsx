import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import swal from 'sweetalert'

function Offeradd() {

  let [offer_id, setOffer_id] = useState("")
  let [cupon_code, setCupon_code] = useState("")
  let [from_date, setFrom_data] = useState("")
  let [to_data, setTo_data] = useState("")
  let [dicount_persentage, setDicount_persentage] = useState("")
  let [float_dicount, setFloat_dicount] = useState("")
  let [valid_in, setValid_in] = useState("")
  let [Bank_offers, setBank_Offers] = useState("")

  async function uploadcategory(e) {

    let data = { offer_id, cupon_code, from_date, to_data, dicount_persentage, float_dicount, valid_in, Bank_offers }
    console.log(data)
    e.preventDefault();

    let output = await fetch("http://localhost:3002/admin/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });
    const res = await output.json();
    console.log("output", res)
    swal({
      title: "Good job!",
      text: "Your data is Add",
      icon: "success",
      button: "OK!",
    });
    setOffer_id("");
    setCupon_code("");
    setBank_Offers("");
    setFloat_dicount("");
    setTo_data("");
    setFrom_data("");
    setValid_in("");
  }


  return (
    <div className='container'>
      <Form onSubmit={uploadcategory}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Category_ID</Form.Label>
          <Form.Control type="text" placeholder="Category_ID"
            value={offer_id}
            onChange={(e) => setOffer_id(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Category_Name</Form.Label>
          <Form.Control type="text" placeholder="Category_Name"
            value={cupon_code}
            onChange={(e) => setCupon_code(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Category_ID</Form.Label>
          <Form.Control type="text" placeholder="Category_ID"
            value={from_date}
            onChange={(e) => setFrom_data(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Category_Name</Form.Label>
          <Form.Control type="text" placeholder="Category_Name"
            value={to_data}
            onChange={(e) => setTo_data(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Category_ID</Form.Label>
          <Form.Control type="text" placeholder="Category_ID"
            value={dicount_persentage}
            onChange={(e) => setDicount_persentage(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Category_Name</Form.Label>
          <Form.Control type="text" placeholder="Category_Name"
            value={float_dicount}
            onChange={(e) => setFloat_dicount(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Category_ID</Form.Label>
          <Form.Control type="text" placeholder="Category_ID"
            value={valid_in}
            onChange={(e) => setValid_in(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Category_Name</Form.Label>
          <Form.Control type="text" placeholder="Category_Name"
            value={Bank_offers}
            onChange={(e) => setBank_Offers(e.target.value)} />
        </Form.Group>


        <Button variant="primary" type="submit" onClick={uploadcategory}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Offeradd