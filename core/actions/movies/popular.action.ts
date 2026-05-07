import { MoviesDBResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper';
import { moviesApi } from "../../api/moviesApi";

export const popularMoviesAction = async () => {
  try {
    const { data } = await moviesApi.get<MoviesDBResponse>('/popular');

    // console.log(JSON.stringify(data, null, 2));
    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw 'Cannot load now playing movies';
  }
};
