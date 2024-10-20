import { formatDate } from '../../../helpers/dateHelpers.js'

import './ListItem.css'

const ListItem = ({ id, category, description, dateAdded, dateDue, priority }) => {

    return (
        <li className='list-item' key={id} id={id}>
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