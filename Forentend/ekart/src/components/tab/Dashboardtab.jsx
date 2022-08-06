import React from 'react'
import Offeradd from '../add/Offeradd'
import OfferVeiw from '../veiw/OfferVeiw'
import {Tab ,Tabs} from 'react-bootstrap'

function Dashboardtab() {
  return (
    <div>
      <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Add">
        <Offeradd/>
      </Tab>
      <Tab eventKey="profile" title="Veiw">
       <OfferVeiw/>
      </Tab>
    </Tabs>
    </div>
  )
}

export default Dashboardtab