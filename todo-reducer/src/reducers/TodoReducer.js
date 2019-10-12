export const initalState = 
  {
    todos: [{
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    }]
  }

export const reducer = (state, action) => {
  switch(action.type) {
    case "ADD_TODO":
      const addTodo = {
      item: action.payload,
      completed: false,
      id: Date.now()
    }
      return {
        ...state,
        todos: [...state.todos, addTodo]
      }
      default:
        return state;
  }
}