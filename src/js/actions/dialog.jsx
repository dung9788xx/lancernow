export const openDialog = (message) => {
    return {
        type : 'OPEN_DIALOG',
        payload : message
    }
}
export const closeDialog = () => {
    return {
        type : 'CLOSE_DIALOG'
    }
}
