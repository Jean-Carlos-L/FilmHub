import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface MultimediaState {
   id: number;
   title: string;
   sypnosis: string;
   director: string;
   release_date: string;
   rating: number;
   cast: string[];
   state: number;
}

const initialState: MultimediaState[] = [
   {
      id: 1,
      title: 'Spiderman 3',
      sypnosis: 'Peter Parker se ve acosado por todo tipo de problemas en su malograda vida personal mientras lucha contra un brillante científico llamado Dr. Otto Octavius.',
      director: 'Sam Raimi',
      release_date: '2004',
      rating: 4,
      cast: ['Tobey Maguire', 'Kirsten Dunst', 'James Franco'],
      state: 1
   }
]


const itemsSlice = createSlice({
   name: 'items',
   initialState,
   reducers: {
      addItem(state, action: PayloadAction<MultimediaState>) {
         state.push(action.payload)
      },
      removeItem(state, action: PayloadAction<number>) {
         return state.filter(item => item.id !== action.payload)
      },
      updateItem(state, action: PayloadAction<MultimediaState>) {
         const index = state.findIndex(item => item.id === action.payload.id)
         if (index !== -1) {
            state[index] = action.payload
         }
      },
   }
})

export const { addItem, removeItem, updateItem } = itemsSlice.actions

export default itemsSlice.reducer