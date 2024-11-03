import './ListItem.css'

import Button from '../Button/Button.jsx'

const ListItem = ({ id, category, categoryIcon, description, dateAdded, dateDue, priority }) => {

    return (
        <>
            <li className='list-item' key={id} id={id}>
                <p className="list-item-property category"><i className={`category-icon ${categoryIcon}`}></i> {category}</p>
                <p className="list-item-property description">{description}</p>
                <p className="list-item-property date-added">
                {dateAdded}
                </p>
                <p className="list-item-property date-due">{dateDue}</p>
                <p className={`list-item-property priority priority--${priority}`}>
                {priority}
                </p>
                <div className='list-item-property row'>
                    <Button classNames='button button--s button--secondary list-item-property'>Edit</Button>
                    <Button classNames='button button--s button--danger list-item-property'>Delete</Button>
                </div>
            </li>
        </>
    )
}

export default ListItem