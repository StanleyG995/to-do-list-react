export const sortPriority = (arr, ascending, extra = null) => {

    const priorityOrder = { low: 3, medium: 2, high: 1 }

    return [...arr].sort((a, b) => {
        return ascending ? priorityOrder[b.priority] - priorityOrder[a.priority] : priorityOrder[a.priority] - priorityOrder[b.priority]
    })

}

export const sortAlphabetical = (arr, ascending, extra = null) => {
    return [...arr].sort((a, b) => {
        if (a[extra] < b[extra]) {
            return ascending ? -1 : 1
        }
        if (a[extra] > b[extra]) {
            return ascending ? 1 : -1
        }
        return 0
    })
}

export const sortDescription = (arr, ascending, extra = null) => {
    return [...arr].sort((a, b) => {
        if (a.description < b.description) {
            return ascending ? -1 : 1
        }
        if (a.description > b.description) {
            return ascending ? 1 : -1
        }
        return 0
    })
}

export const sortDate = (arr, ascending, extra = null) => {
    return [...arr].sort((a, b) => {
        const dateA = new Date(a[extra].split('.').reverse().join('-'))
        const dateB = new Date(b[extra].split('.').reverse().join('-'))
        
        return ascending ? dateA - dateB : dateB - dateA
          
    })
}