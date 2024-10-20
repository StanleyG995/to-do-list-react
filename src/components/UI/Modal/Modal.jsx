import PropTypes from 'prop-types'
import './Modal.css'

import React, { useContext, useState } from 'react'
import { TaskContext } from '../../../context/TaskContext.jsx'

import Button from '../Button/Button.jsx'

const Modal = ( {children, buttonPrimary} ) => {

    const { ModalValues } = useContext(TaskContext)

    return (
        <div className={`modal-overlay ${ModalValues.isModalOpen ? 'modal-visible' : ''}`}>
            <div className="modal">
                <div className="row row--flex-center modal-content ">
                    { children }
                </div>
                <div className="row row--flex-center modal-buttons ">
                    <Button children={'Cancel'} classNames='button button--m button--secondary' onClick={() => {console.log(ModalValues.isModalOpen, ModalValues.modalType)}}/>
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