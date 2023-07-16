import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const Toast = () => {
  return (
    <>
        <div className="wrapper">
            <div className="toast success">
                <span className='toast-icon'><FontAwesomeIcon icon={faCircleCheck} /></span>
                <div className="toast-notification">
                    <span>Success</span>
                    <p>your changes are saved successfully</p>
                </div>
                <button>&times;</button>
            </div>
        </div>
    </>
  )
}

export default Toast