export const formatDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString('pl-PL')

    return formattedDate
}