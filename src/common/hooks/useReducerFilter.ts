import { Genre } from "@models/Genre.model";

export interface FilterState {
   searchText: string;
   rating: number | null;
   genres: Genre[];
   search?: boolean;
}

export const initialState: FilterState = {
   searchText: '',
   rating: null,
   genres: [],
   search: true,
};

type FilterAction =
   | { type: 'UPDATE_SEARCH_TEXT'; payload: string }
   | { type: 'UPDATE_RATING'; payload: number | null }
   | { type: 'ADD_GENRE'; payload: Genre }
   | { type: 'REMOVE_GENRE'; payload: Genre }
   | { type: 'SEARCH', payload: null };

export function filterReducer(state: FilterState = initialState, action: FilterAction): FilterState {
   switch (action.type) {
      case 'UPDATE_SEARCH_TEXT':
         return {
            ...state,
            searchText: action.payload,
         };
      case 'UPDATE_RATING':
         return {
            ...state,
            rating: action.payload,
         };
      case 'ADD_GENRE':
         if (state.genres.length < 5 && !state.genres.some((genre) => genre.id === action.payload.id)) {
            return {
               ...state,
               genres: [...state.genres, action.payload],
            };
         }
         return state;
      case 'REMOVE_GENRE':
         return {
            ...state,
            genres: state.genres.filter((genre) => genre.id !== action.payload.id),
         };
      case 'SEARCH':
         return {
            ...state,
            search: !state.search,
         };
      default:
         return state;
   }
}