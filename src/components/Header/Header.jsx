import React, { useContext } from 'react'

import { useNavigation } from '../../hooks/useNavigation.jsx'
import { useModal } from '../../hooks/useModal.jsx'
import { TaskContext } from '../../context/TaskContext.jsx'

import Button from '../UI/Button/Button.jsx'

import './Header.css'


const Header = () => {

    const { changeTab } = useNavigation()
    const { handleModalOpen, handleModalType } = useModal()

    const { currentTabName, currentTasks, historyTasks, trashTasks } = useContext( TaskContext )

    return (
        <div className="header">
            <div className="row flex--space-between">
                <div className="column">
                    <div className="logo">
                        <a href="" className="site-logo"><i className="fa-regular fa-pen-to-square logo-icon"/> Prior<span className='site-logo--color'>IT</span>ize</a>
                    </div>
                    <Button classNames='button button--l button--primary' onClick={() => handleModalType('addTask') }>+ Add task</Button>
                </div>
                <div className="column">
                    <ul className="menu">
                        <Button onClick={ () => changeTab( currentTasks, 'current' )} classNames={`menu-item text-medium ${ currentTabName === 'current' ? 'menu-item--active' : ''}`}><i className="fa-solid fa-list-check menu-item-icon"></i> Current</Button>
                        <Button onClick={ () => changeTab( historyTasks, 'history')} classNames={`menu-item text-medium ${ currentTabName === 'history' ? 'menu-item--active' : ''}`}><i className="fa-solid fa-clock-rotate-left menu-item-icon"></i> History</Button>
                        <Button onClick={ () => changeTab( trashTasks, 'trash' )} classNames={`menu-item text-medium ${ currentTabName === 'trash' ? 'menu-item--active' : ''}`}><i className="fa-solid fa-trash menu-item-icon"></i> Deleted</Button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header