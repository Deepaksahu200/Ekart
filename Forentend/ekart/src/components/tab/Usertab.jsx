import React from 'react'
import '../../App.css'
import Userview from '../veiw/Userview'
import Useradd from '../add/Useradd'
import {Tab ,Tabs} from 'react-bootstrap'

function Usertab() {
  return (
    <div>
      <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Add">
        <Useradd/>
      </Tab>
      <Tab eventKey="profile" title="Veiw">
       <Userview/>
      </Tab>
    </Tabs>
    </div>
  )
}

export default Usertab