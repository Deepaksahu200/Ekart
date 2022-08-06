import React, { useEffect, useState } from 'react'
import { Modal, Button, Col, Form } from 'react-bootstrap';
import '../../App.css'
import DataTable from 'react-data-table-component';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import swal from 'sweetalert'
// import { FaPen } from 'react-icons/fa'

//GEt API //
function Productview() {
  const [data, setData] = useState([]);
  const [cid , setCid] = useState("")
  const [c_name , setC_name] = useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  //update api (put)
  function selectData(
   cid,
   c_name,
  ) {
    setCid(cid);
    setC_name(c_name);
    handleShow();
  }

  function updateProduct() {
    let data1 = {
      cid,
      c_name,
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
      `http://localhost:3002/admin/category/update/${cid}`,
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

  //GET api
  fetch("http://localhost:3002/admin/category").then((response) => {
    return response.json();
  }).then((data) => {
    let ndata = data.response
    setData(ndata)
  })

  const colums = [
    {
      name: "cid",
      selector: (row) => row.cid,
      sortable: true
    },
    {
      name: "productName",
      selector: (row) => row.c_name
    },
    {
      name: "Action",
      cell: (row) => (
        <Button className='edit'
          variant="success"
          onClick={() => 
            selectData(
              row.cid,
              row.c_name,
            )
          }
        >
          <EditIcon/>
        </Button>
      ),
    },
    {
      name: "Action",
      cell: (row) => {
        return (
          <button className='delete' onClick={() => deleteProduct(row.cid)}>
            <DeleteIcon /></button>
        );
      },
    }
  ]

  useEffect(() => {
    setData();
  }, []);

  //Delete api //
  function deleteProduct(cid) {
    fetch(
      `http://localhost:3002/admin/category/delete/${cid}`,
      { method: "DELETE" }
    ).then((res) => {
      if (res.status === 200) {
        // alert("product deleted");
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
    <>
      <DataTable
        title="product_Tables"
        columns={colums}
        data={data}
        fixedHeader
        fixedHeaderScrollHeight='450px'
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        subHeader
        subHeaderComponent={

          <input type="search" placeholder="Search here" />
        }
        pagination
      />
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Product_Category_Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col xs={6}><Form.Label>Product_Cid</Form.Label>
            <Form.Control
              type="text"
              value={cid}
              onChange={(e) => setCid(e.target.value)}

            /></Col><br/>
          <Col xs={6}><Form.Label>Product_CName</Form.Label>
            <Form.Control
              type="text"
              value={c_name}
              onChange={(e) => setC_name(e.target.value)}

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
    </>


  )
}

export default Productview