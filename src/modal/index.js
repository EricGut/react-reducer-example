import React, { useEffect } from 'react'

const Modal = ({ modalMsg, close }) => {
    useEffect(() => {
        setTimeout(() => {
            close()
        }, 2000)
    })
    return (
        <div className="modal">
            <p>{modalMsg}</p>
        </div>

    )
}

export default Modal
