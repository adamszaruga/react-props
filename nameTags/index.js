const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => {
    ReactDOM.render(<App nameTags={getState()} />, document.getElementById('nameTagsContainer'))
});

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 
let nameForm = document.getElementById('nameForm');
nameForm.addEventListener('submit', e => {
    e.preventDefault();
    let name = document.getElementById('name');
    dispatch({ type: 'ADD_NAME', name: name.value });
    name.value = "";
});
