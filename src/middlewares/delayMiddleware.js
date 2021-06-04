export const delayMiddleware = store => dispatch => action => {
    setTimeout(() => {
        dispatch(action);
    }, 2000);
}