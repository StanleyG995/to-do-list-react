export const sortPriorityAscend = (arr) => {
    const priorityOrder = { low: 3, medium: 2, high: 1 }

    return [...arr].sort((a, b) => {
        return priorityOrder[a.priority] - priorityOrder[b.priority]
    });
}

export const sortPriorityDescend = (arr) => {
    const priorityOrder = { low: 3, medium: 2, high: 1 }

    return [...arr].sort((a, b) => {
        return priorityOrder[b.priority] - priorityOrder[a.priority]
    })
}

export const sortCategoryAscend = (arr) => {
    return [...arr].sort((a, b) => {
        if (a.category < b.category) {
            return 1
        }
        if (a.category > b.category) {
            return -1
        }
        return 0
    })
}

export const sortCategoryDescend = (arr) => {
    return [...arr].sort((a, b) => {
        if (a.category > b.category) {
            return 1
        }
        if (a.category < b.category) {
            return -1
        }
        return 0
    })
}

export const sortDescriptionAscend = (arr) => {
    return [...arr].sort((a, b) => {
        if (a.description < b.description) {
            return 1
        }
        if (a.description > b.description) {
            return -1
        }
        return 0
    })
}

export const sortDescriptionDescend = (arr) => {
    return [...arr].sort((a, b) => {
        if (a.description > b.description) {
            return 1
        }
        if (a.description < b.description) {
            return -1
        }
        return 0
    })
}