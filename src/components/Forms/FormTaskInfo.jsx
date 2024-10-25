const FormTaskInfo = () => {
    

    return (
        <div className="form form-task-info">

            <label for="category">Category</label>
            <select id="category">
                <option>Home</option>
                <option>Work</option>
                <option>Education</option>
                <option>Family</option>
                <option>Personal</option>
                <option>Fitness</option>
                <option>Health</option>
            </select>

            <label for="description">Description</label>
            <input type="" id="dateDue"/>

            <label for="dateAdded">Added</label>
            <input type="date" id="dateCreated"/>

            <label for="dateDue">Due:</label>
            <input type="date" id="dateCreated"/>

            <label for="priority">Priority</label>
            <select id="priority">
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
            </select>
            
        </div>
    )

}

export default FormTaskInfo