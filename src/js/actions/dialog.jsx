export const openDialog = (message, forceLogin) => {
    return {
        type : 'OPEN_DIALOG',
        payload : message,
        forceLogin: forceLogin
    }
}
export const closeDialog = () => {
    return {
        type : 'CLOSE_DIALOG'
    }
}
