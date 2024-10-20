import { formatDate } from '../../../helpers/dateHelpers.js'

import './ListItem.css'

const ListItem = ({ id, category, categoryIcon, description, dateAdded, dateDue, priority }) => {

    return (
        <li className='list-item' key={id} id={id}>
            <p className="list-item-property category"><i className={`category-icon ${categoryIcon}`}></i> {category}</p>
            <p className="list-item-property description">{description}</p>
            <p className="list-item-property dateAdded">
            {dateAdded}
            </p>
            <p className="list-item-property dateDue">{dateDue}</p>
            <p className={`list-item-property priority priority--${priority}`}>
            {priority}
            </p>
        </li>
    )
}

export default ListItem