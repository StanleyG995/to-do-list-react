const isDescriptionLongEnough = ( str ) => {
    str.length > 5 ? true : false
}

const isAddedDateValid = ( date ) => {
    date > new Date() ? true : false
}

const isDueDateValid = ( dueDate, addedDate ) => {
    ( dueDate >= addedDate ) ? true : false
}


