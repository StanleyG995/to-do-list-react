export const isDescriptionLongEnough = ( str ) => {
    str.length > 5 ? true : false
}

export const isAddedDateValid = ( date ) => {
    date > new Date() ? true : false
}

export const isDueDateValid = ( dueDate, addedDate ) => {
    ( dueDate >= addedDate ) ? true : false
}


