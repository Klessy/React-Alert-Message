import React from 'react'
import Alert from '../components/Alert'

const AlertApp = () => {
  return (
    <div className="container">
        <Alert type={"success"} message={"Succesfully Logged in"}/>
        <Alert type={"info"} message={"Time Login"} delay={true} />
        <Alert type={"danger"} message={"Complete all field"} delay={true} delayTime={1000}/>
    </div>
  )
}

export default AlertApp