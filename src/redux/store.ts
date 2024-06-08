import { configureStore } from '@reduxjs/toolkit'
import authReducer from './feature/auth/authSlice'
import itemsReducer from './feature/items/itemsSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    items: itemsReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch