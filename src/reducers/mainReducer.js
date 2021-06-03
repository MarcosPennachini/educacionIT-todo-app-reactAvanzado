const mainReducer = (state, action) => {
    let newState = {...state}
    console.log('Pasó por el reducer..')
    return newState;
}

export default mainReducer;