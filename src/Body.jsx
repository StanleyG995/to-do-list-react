import React, { useContext } from 'react'

import { TaskContext } from "./context/TaskContext.jsx";
import List from './components/UI/List/List.jsx'

const Body = () => {

    const { currentTab } = useContext( TaskContext )

	return (
	    <>
			<List source = { currentTab }/>
		</>
	)
}

export default Body
