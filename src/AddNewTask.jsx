import React, {useState, createContext} from 'react'
import InputModal from './InputModal.jsx'
import './AddNewTask.css'

export const IsVisibleContext = createContext()

function AddNewTask() {

    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        setIsVisible(!isVisible)
    }

    return (
        <>
            <button onClick={toggleVisibility} className='button button--primary add-new-task'><span style={{fontWeight: 'bold',}}>+</span> Add new task</button>

            <IsVisibleContext.Provider value={[isVisible,setIsVisible]}>
                <InputModal />
            </IsVisibleContext.Provider>
            
        </>
        
    )

}

export default AddNewTask