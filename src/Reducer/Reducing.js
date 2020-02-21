import { combineReducers } from 'redux'

const taskReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            console.log(action.text)
            state = state.concat(action.text)

            break;
        case 'DEL_TODO':
            var x = state.indexOf(action.del)
            state = state.slice()
            state.splice(x, 1)
            break;

        default: return state;
    }
    return state
}
const reducers = combineReducers({
    tasks: taskReducer
});

export default reducers;
