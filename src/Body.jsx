import React, { useContext } from 'react'

import { TaskContext } from "./context/TaskContext.jsx";
import List from './components/UI/List/List.jsx'

const Body = () => {

    const { currentTab, currentTabName, modal } = useContext( TaskContext )

	return (
	    <>
			<List source = { currentTab } className={`list-${currentTabName}`}/>
			{ modal } 
		</>
	)
}

export default Body
