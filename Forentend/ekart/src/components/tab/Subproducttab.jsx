import React from 'react'

import {Tab ,Tabs} from 'react-bootstrap'
import Subproductadd from '../add/Subproductadd'
import Subproductview from '../veiw/Subproductview'

function Subproducttab() {
  return (
    <div>
      <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Add">
        <Subproductadd/>
      </Tab>
      <Tab eventKey="profile" title="Veiw">
       <Subproductview/>
      </Tab>
    </Tabs>
    </div>
  )
}

export default Subproducttab