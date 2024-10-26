import React, { useContext } from 'react'

import { useNavigation } from '../../hooks/useNavigation.jsx'
import { useModal } from '../../hooks/useModal.jsx'
import { TaskContext } from '../../context/TaskContext.jsx'

import Button from '../UI/Button/Button.jsx'

import './Header.css'


const Header = () => {

    const { changeTab } = useNavigation()
    const { handleModalOpen } = useModal()

    const { currentTabName, currentTasks, historyTasks, trashTasks } = useContext( TaskContext )

    return (
        <div className="header">
            <div className="row flex--space-between">
                <div className="column">
                    <div className="logo">
                        <a href="" className="site-logo"><i className="fa-regular fa-pen-to-square logo-icon"/> Prior<span className='site-logo--color'>IT</span>ize</a>
                    </div>
                    <Button classNames='button button--l button--primary' onClick={() => handleModalOpen() }>+ Add task</Button>
                </div>
                <div className="column">
                    <ul className="menu">
                        
                        <button onClick={ () => changeTab( currentTasks, 'current' )} className={`menu-item text-medium ${ currentTabName === 'current' ? 'menu-item--active' : ''}`}><i className="fa-solid fa-list-check menu-item-icon"></i> Current</button>
                        <button onClick={ () => changeTab( historyTasks, 'history')} className={`menu-item text-medium ${ currentTabName === 'history' ? 'menu-item--active' : ''}`}><i className="fa-solid fa-clock-rotate-left menu-item-icon"></i> History</button>
                        <button onClick={ () => changeTab( trashTasks, 'trash' )} className={`menu-item text-medium ${ currentTabName === 'trash' ? 'menu-item--active' : ''}`}><i className="fa-solid fa-trash menu-item-icon"></i> Deleted</button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header