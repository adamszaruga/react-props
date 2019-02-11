const initialState = [
    {
        value: "K",
        suit: "C"
    },
    {
        value: "K",
        suit: "D"
    }
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type, position, suit, value } = action;

    // ACTION - Change either card to a random new one (Try implementing one action that both buttons dispatch)
    if (type == "CHANGE_CARD") {
        // with slice
        return [
            ...state.slice(0, position),
            { value, suit },
            ...state.slice(position + 1)
        ]
    }

    return state;
}