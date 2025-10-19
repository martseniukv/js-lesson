const logger = store => next => action => {
    console.group(`Action: ${action.type}`);
    console.log('-> Dispatching:', action);

    console.log("Prev state:", store.getState());
    const result = next(action);
    console.log("New state:", store.getState());

    console.groupEnd();
    return result;
}

export default logger;