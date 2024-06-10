import { useReducer } from 'react';
import { filterReducer, initialState } from './useReducerFilter';
import { Genre } from '@models/Genre.model';

export const useFilter = () => {
   const [filterState, dispatch] = useReducer(filterReducer, initialState);
   const { genres } = filterState;

   const handleSearchTextChange = (text: string) => {
      dispatch({ type: 'UPDATE_SEARCH_TEXT', payload: text });
   };

   const handleRatingChange = (rating: number) => {
      const newRating = rating as number;
      if (!isNaN(newRating) && newRating >= 0 && newRating <= 5) {
         dispatch({ type: 'UPDATE_RATING', payload: newRating });
      }
   };

   const handleGenreClick = (genre: Genre) => {
      if (genres.some((g) => g.id === genre.id)) {
         dispatch({ type: 'REMOVE_GENRE', payload: genre });
      } else {
         dispatch({ type: 'ADD_GENRE', payload: genre });
      }
   };

   const handleSearch = () => {
      dispatch({ type: 'SEARCH', payload: null });
   }

   const isFiltering = filterState.searchText || filterState.rating || genres.length > 0;

   return {
      filterState,
      handleSearchTextChange,
      handleRatingChange,
      handleGenreClick,
      handleSearch,
      isFiltering,
   }
}