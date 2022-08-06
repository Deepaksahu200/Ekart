import React, { useEffect, useState } from 'react'
import '../../App.css'
import DataTable from 'react-data-table-component';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


function Addminview() {
  const [data, setData] = useState([]);

  fetch("http://localhost:3002/admin/shop-registration").then((response) => {
    return response.json();
  }).then((data) => {
    let ndata = data.response
    setData(ndata)
  })

  const colums = [
    {
      name: "RegistrationNo",
      selector: (row) => row.reg_No,
      sortable: true
    },
    {
      name: "ShopId",
      selector: (row) => row.shopID
    },
    {
      name: "ShopName",
      selector: (row) => row.shopName,
      sortable: true
    },
    {
      name: "Address",
      selector: (row) => row.Address
    },
    {
      name: "State",
      selector: (row) => row.State,
      sortable: true
    },
    {
      name: "ShopId",
      selector: (row) => row.shopID
    },
    {
      name: "City",
      selector: (row) => row.City,
      sortable: true
    },
    {
      name: "Pin",
      selector: (row) => row.Pin
    },
    {
      name: "contact",
      selector: (row) => row.contact
    },
    {
      name: "Owner",
      selector: (row) => row.Owner
    },
    {
      name: "Type",
      selector: (row) => row.Type
    },
    {
      name: "Email",
      selector: (row) => row.Email
    },
    {
      name: "URL",
      selector: (row) => row.URL
    },
    {
      name: "TrunOver",
      selector: (row) => row.Trunover
    },
    {
      name: "Description",
      selector: (row) => row.Description
    },
    {
      name: "TermCondition",
      selector: (row) => row.Term_Condition
    },
    {
      name: "Action",
      cell: (row) =><button className='edit' ><EditIcon/></button>
     },
     {
       name:"Action",
       cell:(row)=> <button className='delete'><DeleteIcon/></button>
     }
  ]

  useEffect(() => {
    setData();
  }, []);


  return (
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

          <input type="text" placeholder="Search here" />
        }
        pagination
      />
      
   
  )
}

export default Addminview