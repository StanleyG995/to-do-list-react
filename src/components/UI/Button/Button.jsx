import React, { useContext } from 'react'

import PropTypes from 'prop-types'
import './Button.css'
import { TaskContext } from '../../../context/TaskContext'



const Button = ( {children, classNames, onClick} ) => {

    const { handleModalOpen, handleModalClose } = useContext( TaskContext )

    return (
        <button className={classNames} onClick={onClick}>
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
