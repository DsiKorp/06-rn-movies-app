import { MoviesDBResponse } from "@/infrastructure/interfaces/moviedb-response";
import { moviesApi } from "../../api/moviesApi";

import { MovieMapper } from '@/infrastructure/mappers/movie.mapper';

export const upcomingMoviesAction = async () => {
  try {
    const { data } = await moviesApi.get<MoviesDBResponse>('/upcoming');

    // console.log(JSON.stringify(data, null, 2));
    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw 'Cannot load top_rated movies';
  }
};
