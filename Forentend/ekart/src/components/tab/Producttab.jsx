import React from 'react'
import Productadd from '../add/Productadd'
import Productview from '../veiw/Productview'
import {Tab ,Tabs} from 'react-bootstrap'

function Producttab() {
  return (
    <div>
      <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Add">
        <Productadd/>
      </Tab>
      <Tab eventKey="profile" title="Veiw">
       <Productview/>
      </Tab>
    </Tabs>
    </div>
  )
}

export default Producttab