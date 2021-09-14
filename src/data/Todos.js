import {createSlice} from '@reduxjs/toolkit'


 const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    data : [
      {
        id: 1,
        title: "Membuat Komponen",
        completed: true,
      },
      {
        id: 2,
        title: "Unit Testing",
        completed: false,
      },
      {
        id: 3,
        title: "Setup Development Environment",
        completed: true,
      },
      {
        id: 4,
        title: "Deploy ke server",
        completed: false,
      }
    ]
  },
  reducers: {
    addTodo: (state, action) => {
        state.data.push({
          id: state.data.length + 1 ,
          title: action.payload,
          completed: false
        })
    },
    toggleStatus: (state, action) => {
      const index = state.data.findIndex((todo) => todo.id === action.payload);
      state.data[index].completed = !state.data[index].completed
    },
    removeTodo: (state, action) => {
      const index = state.data.findIndex((todo) => todo.id === action.payload);
      state.data.splice(index, 1);
    },
  }
})

export const { addTodo, removeTodo, toggleStatus } = todoSlice.actions;
export default todoSlice.reducer;
