import { formatDate } from '../../../helpers/dateHelpers.js'

import './ListItem.css'

const ListItem = ({ category, description, dateAdded, dateDue, priority }) => {

    return (
        <li className='list-item'>
            <p className="category">{category}</p>
            <p className="description">{description}</p>
            <p className="dateAdded">
            {dateAdded}
            </p>
            <p className="dateDue">{dateDue}</p>
            <p className="priority">
            {priority}
            </p>
        </li>
    )
}

export default ListItem