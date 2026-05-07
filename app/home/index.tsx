import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import MainSlideShow from '@/presentation/components/movies/MainSlideShow';
import MovieHorizontalList from '@/presentation/components/movies/MovieHorizontalList';
import { useMovies } from '@/presentation/hooks/useMovies';
import { } from 'react-native-gesture-handler';

const HomeScreen = () => {
    const { nowPlayingQuery, popularQuery, upcomingQuery, topRatedQuery } = useMovies();
    const safeArea = useSafeAreaInsets();

    if (nowPlayingQuery.isLoading) {
        return (
            <View className="flex-1 items-center justify-center">
                <ActivityIndicator size="large" color="purple" />
                <Text className="text-lg font-bold mt-4">Loading now playing movies...</Text>
            </View>
        );
    }

    return (
        //<SafeAreaView> se remplaza con safeArea      
        //</SafeAreaView>
        <ScrollView>
            <View className="mt-2 pb-10" style={{ paddingTop: safeArea.top }}>
                <Text className="text-3xl font-bold px-4 mb-2">Movies App</Text>

                {/* carousel de imagenes */}
                <MainSlideShow
                    movies={nowPlayingQuery.data || []}
                />

                {/* popular */}
                <MovieHorizontalList
                    movies={popularQuery.data || []}
                    title='Populars'
                    className="mb-5"
                />


                {/*  Top Rated */}
                <MovieHorizontalList
                    title="Top Rated"
                    movies={topRatedQuery.data ?? []}
                    className="mb-5"
                />

                {/*  Soon */}
                <MovieHorizontalList
                    title="Coming Soon"
                    movies={upcomingQuery.data ?? []}
                    className="mb-5"
                />
            </View>
        </ScrollView>

    );
};

export default HomeScreen;