import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext.jsx';

export const useNavigation = () => {
    const { currentTab, setCurrentTab } = useContext( TaskContext )

    const changeTab = (tab) => {
            setCurrentTab(tab)
        }

    return { changeTab }
}