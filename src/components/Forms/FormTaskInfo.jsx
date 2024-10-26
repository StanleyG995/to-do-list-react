const FormTaskInfo = () => {
    

    return (
        
       
            <form className="form-task-info column">
                <label htmlFor="category">Category</label>
                <select  id="category" className='form-field'>
                    <option value='home'>Home</option>
                    <option value='work'>Work</option>
                    <option value='education'>Education</option>
                    <option value='family'>Family</option>
                    <option value='personal'>Personal</option>
                    <option value='fitness'>Fitness</option>
                    <option value=''>Health</option>
                </select>

                <label htmlFor="description">Description</label>
                <input type="" id="dateDue" className='form-field'/>

                <label htmlFor="dateAdded">Added</label>
                <input type="date" id="dateCreated" className='form-field'/>

                <label htmlFor="dateDue">Due:</label>
                <input type="date" id="dateCreated" className='form-field'/>

                <label htmlFor="priority">Priority</label>
                <select id="priority" className='form-field'>
                    <option value='high'>High</option>
                    <option value='medium'>Medium</option>
                    <option value='low'>Low</option>
                </select>
            </form>
     
    )

}

export default FormTaskInfo