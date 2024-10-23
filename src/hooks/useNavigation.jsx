import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext.jsx';

export const useNavigation = () => {
    const { setCurrentTab, setCurrentTabName } = useContext( TaskContext )

    const changeTab = (tab, tabName) => {
            setCurrentTab(tab)
            setCurrentTabName(tabName)
        }

    return { changeTab }
}