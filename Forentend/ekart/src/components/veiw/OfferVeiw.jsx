import React, { useEffect, useState } from 'react'
import '../../App.css'
import DataTable from 'react-data-table-component';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import swal from 'sweetalert'
import { Button, Modal, Form, Col } from 'react-bootstrap';



function Offerveiw() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let [offer_id, setOffer_id] = useState("")
  let [cupon_code, setCupon_code] = useState("")
  let [from_date, setFrom_data] = useState("")
  let [to_data, setTo_data] = useState("")
  let [dicount_persentage, setDicount_persentage] = useState("")
  let [float_dicount, setFloat_dicount] = useState("")
  let [valid_in, setValid_in] = useState("")
  let [Bank_offers, setBank_Offers] = useState("")


  function selectData(
    offer_id,
    cupon_code,
    from_date,
    to_data,
    dicount_persentage,
    float_dicount,
    valid_in,
    Bank_offers
  ) {
    setOffer_id(offer_id);
    setCupon_code(cupon_code);
    setFrom_data(from_date);
    setTo_data(to_data);
    setDicount_persentage(dicount_persentage);
    setFloat_dicount(float_dicount);
    setValid_in(valid_in);
    setBank_Offers(Bank_offers);
    handleShow();

  }

  function updateProduct() {
    let data1 = {
      offer_id,
      cupon_code,
      from_date,
      to_data,
      dicount_persentage,
      float_dicount,
      valid_in,
      Bank_offers
    }

    let reqData = {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data1),
    };
    fetch(
      `http://localhost:3002/admin/offer/update/${offer_id}`,
      reqData
    ).then((result) =>
      result.json())
      .then((res) => {
        console.warn(res);
        swal({
          title: "Good job!",
          text: "Your data is updated",
          icon: "success",
          button: "OK!",
        });
      });
    setData();
    handleClose();
  }

  //get method
  fetch("http://localhost:3002/admin/offer").then((response) => {
    return response.json();
  }).then((data) => {
    let ndata = data.response
    setData(ndata)
  })

  const colums = [
    {
      name: "offerID",
      selector: (row) => row.offer_id,
      sortable: true
    },
    {
      name: "Cupon_code",
      selector: (row) => row.cupon_code
    },
    {
      name: "From_date",
      selector: (row) => row.from_date,
      sortable: true
    },
    {
      name: "To_data",
      selector: (row) => row.to_data
    },
    {
      name: "Discount_persentages",
      selector: (row) => row.dicount_persentage,
      sortable: true
    },
    {
      name: "Float_dicount",
      selector: (row) => row.float_dicount
    },
    {
      name: "Valid_In",
      selector: (row) => row.valid_in,
      sortable: true
    },
    {
      name: "Bank_offers",
      selector: (row) => row.Bank_offers
    },
    {
      name: "Action",
      cell: (row) => <button className='edit'
        onClick={() =>
          selectData(
            row.offer_id,
            row.cupon_code,
            row.from_date,
            row.to_data,
            row.dicount_persentage,
            row.float_dicount,
            row.valid_in,
            row.Bank_offers
          )
        }
      ><EditIcon />
      </button>
    },
    {
      name: "Action",
      cell: (row) => <button className='delete'
        onClick={() => deleteProduct(row.offer_id)}
      ><DeleteIcon /></button>
    }
  ]

  useEffect(() => {
    setData();
  }, []);

  function deleteProduct(offer_id) {
    fetch(
      `http://localhost:3002/admin/offer/delete/${offer_id}`, {

      method: "DELETE"
    }
    ).then((res) => {
      if (res.status === 200) {

        swal({
          title: "Good job!",
          text: "Your data is deleted!",
          icon: "deleted",
          button: "OK!",
        });
      }
    });
    setData();
  }

  return (
    <div>
      <DataTable
        title="Offers_Tables"
        columns={colums}
        data={data}
        fixedHeader
        fixedHeaderScrollHeight='450px'
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        subHeader
        subHeaderComponent={
          <input type="text" placeholder="Search here" />
        }
        pagination
      />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Offers_Tables_update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col xs={6}><Form.Label>*Offer_id</Form.Label>
            <Form.Control
              type="text"
              value={offer_id}
              onChange={(e) => setOffer_id(e.target.value)}

            /></Col><br />
          <Col xs={6}><Form.Label>Product_CName</Form.Label>
            <Form.Control
              type="text"
              value={cupon_code}
              onChange={(e) => setCupon_code(e.target.value)}

            /></Col>
          <Col xs={6}><Form.Label>Product_Cid</Form.Label>
            <Form.Control
              type="text"
              value={from_date}
              onChange={(e) => setFrom_data(e.target.value)}

            /></Col><br />
          <Col xs={6}><Form.Label>Product_CName</Form.Label>
            <Form.Control
              type="text"
              value={to_data}
              onChange={(e) => setTo_data(e.target.value)}

            /></Col>
          <Col xs={6}><Form.Label>Product_Cid</Form.Label>
            <Form.Control
              type="text"
              value={dicount_persentage}
              onChange={(e) => setDicount_persentage(e.target.value)}

            /></Col><br />
          <Col xs={6}><Form.Label>Product_CName</Form.Label>
            <Form.Control
              type="text"
              value={float_dicount}
              onChange={(e) => setFloat_dicount(e.target.value)}

            /></Col>
          <Col xs={6}><Form.Label>Product_Cid</Form.Label>
            <Form.Control
              type="text"
              value={valid_in}
              onChange={(e) => setValid_in(e.target.value)}

            /></Col><br />
          <Col xs={6}><Form.Label>Product_CName</Form.Label>
            <Form.Control
              type="text"
              value={Bank_offers}
              onChange={(e) => setBank_Offers(e.target.value)}

            /></Col>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateProduct}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Offerveiw