import React, { useContext } from 'react'
import { TaskContext } from '../../context/TaskContext.jsx'
import { useForm } from '../../hooks/useForm.jsx'

const FormTaskInfo = () => {
    
    const { taskInfo } = useContext( TaskContext )
    const { handleInputChange } = useForm()

    return (
        
       
            <form className="form-task-info column">
                <label htmlFor="category">Category</label>
                <select value={ taskInfo.category } onChange={(e) => handleInputChange(e, 'category')} id="category" className='form-field'>
                    <option value='home'>Home</option>
                    <option value='work'>Work</option>
                    <option value='education'>Education</option>
                    <option value='family'>Family</option>
                    <option value='personal'>Personal</option>
                    <option value='fitness'>Fitness</option>
                    <option value='health'>Health</option>
                </select>

                <label htmlFor="description">Description</label>
                <input 
                    id="dateDue" 
                    className='form-field'
                    type="text" 
                    onChange={(e) => handleInputChange(e, 'description')}
                    value={ taskInfo.description } />

                <label htmlFor="dateAdded">Added</label>
                <input type="date" id="dateCreated" className='form-field' value={ taskInfo.dateAdded } onChange={ (e) => handleInputChange(e, 'dateAdded')}/>

                <label htmlFor="dateDue">Due:</label>
                <input type="date" id="dateCreated" className='form-field' value={ taskInfo.dateDue } onChange={ (e) => handleInputChange(e, 'dateDue')}/>

                <label htmlFor="priority">Priority</label>
                <select id="priority" className='form-field' value= { taskInfo.priority } onChange={ (e) => handleInputChange(e, 'priority')}>
                    <option value='high'>High</option>
                    <option value='medium'>Medium</option>
                    <option value='low'>Low</option>
                </select>
            </form>
     
    )

}

export default FormTaskInfo