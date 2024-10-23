import React, { useContext } from 'react'

import { useNavigation } from '../../hooks/useNavigation.jsx'
import { TaskContext } from '../../context/TaskContext.jsx';

import './Header.css'


const Header = () => {

    const { changeTab } = useNavigation()

    const { currentTab, currentTasks, historyTasks, trashTasks } = useContext( TaskContext )

    return (
        <div className="header">
            <div className="row row--flex-space-between">
                <div className="column">
                    <div className="logo">
                        <a href="" className="site-logo"><i className="fa-regular fa-pen-to-square logo-icon"/> Prior<span className='site-logo--color'>IT</span>ize</a>
                    </div>
                </div>
                <div className="column">
                    <ul className="menu">
                        <button onClick={ () => changeTab( currentTasks )} className={`menu-item text-medium ${ currentTab === currentTasks ? 'menu-item--active' : ''}`}><i className="fa-solid fa-list-check menu-item-icon"></i> Current</button>
                        <button onClick={ () => changeTab( historyTasks )} className={`menu-item text-medium ${ currentTab === historyTasks ? 'menu-item--active' : ''}`}><i className="fa-solid fa-clock-rotate-left menu-item-icon"></i> History</button>
                        <button onClick={ () => changeTab( trashTasks )} className={`menu-item text-medium ${ currentTab === trashTasks ? 'menu-item--active' : ''}`}><i className="fa-solid fa-trash menu-item-icon"></i> Deleted</button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header