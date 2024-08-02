import { useEffect } from 'react';
import { useState } from 'react'
import Button from './Button'

const Alert = ({ type, message, delay = false, delayTime = 3000 }) => {
    const [showAlert, setShowAlert] = useState(true);

    const handleClose = (e) => {
        e.target.parentElement.parentElement.classList.add("fadeAlert");

        setTimeout(() => {
            setShowAlert(false);
        }, 400);

    }
    useEffect(() => {
        delay &&
            setTimeout(() => {
                setShowAlert(false);
            }, delayTime);
    });

  return (
        showAlert && (
            <div className={`alert alert-${type}`}>
                <div className="alert-close">
                    <span className="alert-message">{message}</span>
                    <Button btnClass={"btn-close"} btnTitle={"X"} onClick={handleClose}/>
                </div>
            </div>
        )
  )
}

export default Alert