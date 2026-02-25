import React from 'react';
import { View, FlatList, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { SearchBar } from '../components/SearchBar';
import { PropertyCard } from '../components/PropertyCard';
import { mockListings } from '../data/mockData';
import { theme } from '../theme/theme';

export const SearchScreen = ({ navigation }: any) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <SearchBar />
            <FlatList
                data={mockListings}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <PropertyCard
                        property={item}
                        onPress={() => navigation.navigate('Detail', { id: item.id })}
                    />
                )}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    listContent: {
        padding: theme.spacing.lg,
    }
});
