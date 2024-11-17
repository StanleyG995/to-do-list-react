import './ListItem.css'

import Button from '../Button/Button.jsx'


import { useModal } from '../../../hooks/useModal.jsx'


import { useGetId } from '../../../hooks/useGetId.jsx'

const ListItem = ({ id, category, categoryIcon, description, dateAdded, dateDue, priority }) => {

    const { handleModalOpen } = useModal()
    const { getTaskId } = useGetId()

    return (
        <>
            <li id={id} className='list-item'>
                <p className="list-item-property category"><i className={`category-icon ${categoryIcon}`}></i> {category}</p>
                <p className="list-item-property description">{description}</p>
                <p className="list-item-property date-added">
                {dateAdded}
                </p>
                <p className="list-item-property date-due">{dateDue}</p>
                <p className={`list-item-property priority priority--${priority}`}>
                {priority}
                </p>
                <button class='list-item-options'>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </button>
                
            </li>
        </>
    )
}

export default ListItem