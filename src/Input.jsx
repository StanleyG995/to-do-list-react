import './input.css'

function Input() {
    return (
        <div className="input-overlay">
            <div className="input-modal">
                <label htmlFor="input-task-name" className="input-task-name">Enter task description:</label>
                <input id="input-task-name" className="input-task-input" type="text" />

                <div className="input-buttons">
                    <button className="button">Cancel</button>
                    <button className="button button--primary">+ Add</button>
                </div>
            </div>
        </div>
    )
}

export default Input