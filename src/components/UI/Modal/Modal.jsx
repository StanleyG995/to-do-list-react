import PropTypes from 'prop-types'
import './Modal.css'

import React, { useContext } from 'react'
import { TaskContext } from '../../../context/TaskContext.jsx'

import { useModal } from '../../../hooks/useModal.jsx'


import Button from '../Button/Button.jsx'

const Modal = ( {children, buttonPrimary } ) => {

    const { isModalOpen, taskInfo } = useContext(TaskContext)
    const { handleModalClose } = useModal()
    
    console.log('Task info in modal comp: ', taskInfo)

    return (
        <div className={`modal-overlay ${isModalOpen ? 'modal-visible' : ''}`}>
            <div className="modal">
                <div className="modal-content ">
                    { children }
                </div>
                <div className="row flex--center modal-buttons ">
                    <Button children={'Cancel'} classNames='button button--m button--secondary' onClick={ () => handleModalClose() } />
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