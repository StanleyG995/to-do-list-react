export const getTaskId = (e) => {
    const currentTaskId = e.target.closest('li').getAttribute('id')
    console.log(currentTaskId)
    return currentTaskId
}