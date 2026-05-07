import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import MainSlideShow from '@/presentation/components/movies/MainSlideShow';
import { useMovies } from '@/presentation/hooks/useMovies';

const HomeScreen = () => {
    const { nowPlayingQuery } = useMovies();
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
        <View className="mt-2" style={{ paddingTop: safeArea.top }}>
            <Text className="text-3xl font-bold px-4 mb-2">HomeScreen</Text>
            <MainSlideShow movies={nowPlayingQuery.data || []} />
        </View>

    );
};

export default HomeScreen;