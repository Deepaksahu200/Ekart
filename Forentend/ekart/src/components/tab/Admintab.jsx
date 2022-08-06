import React from 'react'
import {Tab ,Tabs} from 'react-bootstrap'
import Adminadd from '../add/Adminadd'
import Addminview from '../veiw/Adminview'

function Admintab() {
  return (
    <div>
      <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Add">
        <Adminadd/>
      </Tab>
      <Tab eventKey="profile" title="Veiw">
       <Addminview/>
      </Tab>
    </Tabs>
    </div>
  )
}

export default Admintab