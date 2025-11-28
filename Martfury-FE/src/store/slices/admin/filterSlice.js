import { createSlice } from '@reduxjs/toolkit'



const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    search: '',
    status: 'all'
  },
  reducers: {
    searchFilterChange: (state, action) => {
      state.search = action.payload;
    },
    statusFilterChange: (state, action) => {
      state.status = action.payload
    }
  },
})

export const { searchFilterChange, statusFilterChange } = filterSlice.actions
export default filterSlice.reducer