export const sortPriority = (arr, ascending) => {

    const priorityOrder = { low: 3, medium: 2, high: 1 }

    return [...arr].sort((a, b) => {
        return ascending ? priorityOrder[b.priority] - priorityOrder[a.priority] : priorityOrder[a.priority] - priorityOrder[b.priority]
    })

}

export const sortCategory = (arr, ascending) => {
    return [...arr].sort((a, b) => {
        if (a.category < b.category) {
            return ascending ? -1 : 1
        }
        if (a.category > b.category) {
            return ascending ? 1 : -1
        }
        return 0
    })
}

export const sortDescription = (arr, ascending) => {
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