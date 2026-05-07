import { nowPlayingMoviesAction } from "@/core/actions/movies/now-playing.action";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
    // Queries
    const nowPlayingQuery = useQuery({
        queryKey: ['movies', 'nowPlaying'],
        queryFn: nowPlayingMoviesAction,
        staleTime: 1000 * 60 * 60 * 24, // 24horas
    });


    return {
        nowPlayingQuery,
    };
};