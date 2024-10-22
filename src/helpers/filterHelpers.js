export const sortPriority = (arr, ascending, type = null) => {

    const priorityOrder = { low: 3, medium: 2, high: 1 }

    return [...arr].sort((a, b) => {
        return ascending ? priorityOrder[b.priority] - priorityOrder[a.priority] : priorityOrder[a.priority] - priorityOrder[b.priority]
    })

}

export const sortAlphabetical = (arr, ascending, type = null) => {
    return [...arr].sort((a, b) => {
        if (a[type] < b[type]) {
            return ascending ? -1 : 1
        }
        if (a[type] > b[type]) {
            return ascending ? 1 : -1
        }
        return 0
    })
}

export const sortDate = (arr, ascending, type = null) => {
    return [...arr].sort((a, b) => {
        const dateA = new Date(a[type].split('.').reverse().join('-'))
        const dateB = new Date(b[type].split('.').reverse().join('-'))
        
        return ascending ? dateA - dateB : dateB - dateA
          
    })
}