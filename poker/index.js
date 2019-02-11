const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => {
    ReactDOM.render(<App cards={getState()} />, document.getElementById('pokerContainer'))
});

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 
let buttons = ['card1Button', 'card2Button'];
buttons.forEach((button, i) => {
    document.getElementById(button).addEventListener('click', e => {
        dispatch({
            type: 'CHANGE_CARD',
            position: i,
            value: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'][Math.floor(Math.random() * 13)],
            suit: ['C', 'D', 'H', 'S'][Math.floor(Math.random() * 4)]
        });
    })
})
