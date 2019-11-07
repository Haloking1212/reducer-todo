export const initialState = {
  todos: [
    {
      task: "Learn about reducers",
      completed: false,
      id: 93287583652
    }
  ]
};

export const todoReducer = (state, action) => {
  // console.log(action.paylod,"testing payload")
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
      case "MARK_COMPLETED": 
      console.log(action.payload,"testing payload")
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)
      }
      case "CLEAR_COMPLETED":
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      }
      
    default:
      return state;
  }
};
