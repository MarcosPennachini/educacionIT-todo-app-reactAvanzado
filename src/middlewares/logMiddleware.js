export const logMiddleware = store => dispatch => action => {
    console.log("Pasó por el middleware");
    console.log("Acción: ", action);
    console.log("Estado anterior: ", store.getState());

    dispatch(action);

    console.log("Estado post-middleware: ", store.getState());
}