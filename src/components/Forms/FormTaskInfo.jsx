const FormTaskInfo = () => {
    

    return (
        
       
            <form className="form-task-info column">
                <label htmlFor="category">Category</label>
                <select  id="category" className='form-field'>
                    <option>Home</option>
                    <option>Work</option>
                    <option>Education</option>
                    <option>Family</option>
                    <option>Personal</option>
                    <option>Fitness</option>
                    <option>Health</option>
                </select>

                <label htmlFor="description">Description</label>
                <input type="" id="dateDue" className='form-field'/>

                <label htmlFor="dateAdded">Added</label>
                <input type="date" id="dateCreated" className='form-field'/>

                <label htmlFor="dateDue">Due:</label>
                <input type="date" id="dateCreated" className='form-field'/>

                <label htmlFor="priority">Priority</label>
                <select id="priority" className='form-field'>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>
            </form>
     
    )

}

export default FormTaskInfo