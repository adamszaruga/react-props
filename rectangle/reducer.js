const initialState = {
    width: 100,
    height: 200,
    color: "#FF00FF"
};

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type, dimension, color } = action;
    // ACTION 1 - Increment dimension by 10
    if (type == "SIZE") {
        return {
            ...state,
            [dimension]: state[dimension] + 10
        }
    }
    // ACTION 2 - Change the color
    if (type == "COLOR") {
        return { ...state, color }
    }

    return state;
}