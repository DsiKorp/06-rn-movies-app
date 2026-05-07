import { Movie } from "@/infrastructure/interfaces/movie.interface";
import { MoviesDBResponse } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";
import { moviesApi } from "../../api/moviesApi";

export const nowPlayingMoviesAction = async (): Promise<Movie[]> => {

    try {
        const { data } = await moviesApi.get<MoviesDBResponse>('/now_playing');
        //console.log({ data });
        //console.log(JSON.stringify(data, null, 2));

        const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);
        console.log(movies.length + ' movies fetched successfully');
        return movies;

    } catch (error) {
        console.error('Error fetching now playing movies:', error);
        throw 'Cannot load now playing movies'; // Rethrow the error to be handled by the caller
    }
};

