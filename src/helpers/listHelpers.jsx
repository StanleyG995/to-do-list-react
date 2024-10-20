import ListItem from '../components/UI/ListItem/ListItem.jsx'

export const listDisplay = ( arr ) => {
    return arr.map (item => (
            <ListItem
            key={item.id}
            category={item.category}
            description={item.description}
            dateAdded={item.dateAdded}
            dateDue={item.dateDue}
            priority={item.priority}
            priorityClass={item.priorityClass} />
    ))
}
