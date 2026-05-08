import { MoviesDBResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from '@/infrastructure/mappers/movie.mapper';
import { moviesApi } from "../../api/moviesApi";

interface Options {
  page?: number;
  limit?: number;
}

export const topRatedMoviesAction = async ({ page = 1, limit = 10 }: Options = {}) => {
  try {
    const { data } = await moviesApi.get<MoviesDBResponse>('/top_rated', {
      params: {
        page,
        //limit 
      }
    });

    // console.log(JSON.stringify(data, null, 2));
    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    return movies;

  } catch (error) {
    console.log(error);
    throw 'Cannot load top_rated movies';
  }
};
