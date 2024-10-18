import PropTypes from 'prop-types'
import './Modal.css'

import Button from '../Button/Button.jsx'

const Modal = ( {children, buttonPrimary} ) => {
    return (
        <div className={`modal-overlay `}>
            <div className="modal">
                <div className="row row--flex-center modal-content ">
                    { children }
                </div>
                <div className="row row--flex-center modal-buttons ">
                    <Button children={'Cancel'} classes='button button--m button--secondary' onClick={() => {console.log("Modal closed")}}/>
                    { buttonPrimary }
                </div>
            </div>
        </div>
    )
}

Modal.propTypes = {
    children: PropTypes.node,
    buttonPrimary: PropTypes.node,
}


export default Modal