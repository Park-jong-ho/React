
const POPULAR_MOVIE = "MOVIE/POPULAR_MOVIE"

export const popularMovieAction = (data) => ({
  type: POPULAR_MOVIE,
  data: data,
})

// 초기값
const initState = []

// 리듀서
export default function movieReducer(state = initState, action) {
  switch (action.type) {
    case POPULAR_MOVIE:
      return [...state, ...action.data];
    default:
      return state;
  }
}