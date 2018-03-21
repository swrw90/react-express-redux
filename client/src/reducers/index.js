let defaultState = {
    counter: 0
}

let mainReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "UP":
            return {
                ...state,
                counter: state.counter + 1
            };
        case "DOWN":
            return {
                ...state,
                counter: state.counter - 1
            };
        default:
            return state;
    }
};

export default mainReducer;