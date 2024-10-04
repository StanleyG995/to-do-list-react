import React, {useState, createContext} from 'react'
import Input from './Input.jsx'
import './AddNewTask.css'

export const IsVisibleContext = createContext()

function AddNewTask() {

    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if(isVisible === true){
            setIsVisible(false)
        }

        else {
            setIsVisible(true)
        }
            
    
    }

    return (
        <>
            <button onClick={toggleVisibility} className='button button--primary add-new-task'><span style={{fontWeight: 'bold',}}>+</span> Add new task</button>

            <IsVisibleContext.Provider value={isVisible}>
                <Input />
            </IsVisibleContext.Provider>
            
        </>
        
    )

}

export default AddNewTask