import { formatDate } from '../../../helpers/dateHelpers.js'

const ListItem = () => {

    return (
        <li>
            <p className="taskDescription">Do the laundry.</p>
            <p className="dateAdded">{formatDate(new Date())}</p>
            <p className="dateDue">{formatDate(new Date())}</p>
            <p className="category">Home</p>
        </li>
    )
}

export default ListItem