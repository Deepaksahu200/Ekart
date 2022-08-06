import React, { useEffect, useState } from 'react'
import '../../App.css'
import DataTable from 'react-data-table-component';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Subproductview() {
  const [data, setData] = useState([]);

  fetch("http://localhost:3002/admin/categorysub").then((response) => {
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
      name: "ccid",
      selector: (row) => row.ccid
    },
    {
      name: "ProductName",
      selector: (row) => row.cc_name
    },
    {
      name: "Action",
      cell: (row) => <button  className='edit'><EditIcon/></button>
  },
  {
      name: "Action",
      cell: (row) => <button className='delete'><DeleteIcon/></button>
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

export default Subproductview