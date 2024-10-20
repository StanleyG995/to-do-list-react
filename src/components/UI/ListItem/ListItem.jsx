import { formatDate } from '../../../helpers/dateHelpers.js'

import './ListItem.css'

const ListItem = ({ id, category, description, dateAdded, dateDue, priority, priorityClass }) => {

    return (
        <li className='list-item' key={id} id={id}>
            <p className="list-item-property category">{category}</p>
            <p className="list-item-property description">{description}</p>
            <p className="list-item-property dateAdded">
            {dateAdded}
            </p>
            <p className="list-item-property dateDue">{dateDue}</p>
            <p className={`list-item-property priority ${priorityClass}`}>
            {priority}
            </p>
        </li>
    )
}

export default ListItem