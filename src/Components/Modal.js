import React from 'react'
import { useStateValue } from './State'

function Modal() {
    const [notes, dispatch] = useStateValue();
    return (
        <div id="modal1" className="modal">
            <div className="modal-content">
                <h4>{notes.current.title}</h4>
                <p>{notes.current.text}</p>
            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Close</a>
            </div>
        </div>
    )
}

export default Modal

