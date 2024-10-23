import ListItem from '../components/UI/ListItem/ListItem.jsx'

export const listDisplay = ( arr ) => {
    return arr.length ? arr.map (item => (
            <ListItem
            key={item.id}
            category={item.category}
            categoryIcon={item.categoryIcon}
            description={item.description}
            dateAdded={item.dateAdded}
            dateDue={item.dateDue}
            priority={item.priority}/>
    )) : <p className='list-empty-message'><i class="fa-solid fa-list"></i>No tasks.</p>
}
