import React, { useState, useEffect } from 'react'
import '../../App.css'
import DataTable from 'react-data-table-component'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from 'react-bootstrap'
import swal from 'sweetalert';
// import swal from 'sweetalert';

function Userview() {
  const [data, setData] = useState([]);

  // get API
  const showData = () => {
    fetch("http://localhost:3002/admin/user_management").then((response) => {
      return response.json();
    }).then((data) => {
      let ndata = data.response
      setData(ndata)

    })
  }
  console.log(data)
  const colums = [
    {
      name: "user_id",
      selector: (row) => row.user_id,
      sortable: true
    },
    {
      name: "user_name",
      selector: (row) => row.user_name,
    },
    {
      name: "Data_of_joining",
      selector: (row) => row.date_of_joining,
    },
    {
      name: "Password",
      selector: (row) => row.password,
    },
    {
      name: "user_Role",
      selector: (row) => row.role,
    },
    {
      name: "Department",
      selector: (row) => row.department,
    },
    {
      name: "admin",
      selector: (row) => row.admin,
    },
    {
      name: "Action",
      cell: (row) => (
        <Button className='edit'
          variant="success"
        >
          <EditIcon />
        </Button>
      ),
    },
    {
      name: "Action",
      cell: (row) => {
        return (
          <button className='delete' onClick={() => deleteProduct(row.user_id)}>
            <DeleteIcon /></button>
        );
      },
    }
  ]

  useEffect(() => {
    showData();
  }, []);

  // delete APi
  function deleteProduct(user_id) {
    fetch(`http://localhost:3002/admin/user_management/dalete/${user_id}`, {
      method: "DELETE"
    }).then((res) => {
      if (res.status === 200) {
        swal({
          title: "Good job!",
          text: "Your data is deleted!",
          icon: "deleted",
          button: "OK!",
        });
      }
    })
    setData();
  }

  return (
    <div>
      <DataTable
        columns={colums}
        data={data}
        fixedHeader
        fixedHeaderScrollHeight='450px'
        selectableRows
        selectableRowsHighlight
        highlightOnHover
        pagination
        subHeader
        subHeaderComponent={
          <input type="search" placeholder='Search here' />
        }
      />
    </div>
  )
}

export default Userview