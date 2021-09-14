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
    addTodo: {
      reducer: (state, action) => {
        state.data.push(action.payload)
      },
      prepare: (state, title) => ({
        payload: {
          id: state.data.length + 1,
          title,
          completed: false
        }
      })
    },
    toggleStatus: (state, action) => {
      state.data[action.payload - 1].completed = !state.data[action.payload - 1].completed;
    },
    removeTodo: (state, action) => {
      const index = state.data.findIndex((todo) => todo.id === action.payload);
      state.data.splice(index, 1);
    },
  }
})

export const { addTodo, removeTodo, toggleStatus } = todoSlice.actions;
export default todoSlice.reducer;
