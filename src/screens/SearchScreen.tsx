import React from 'react';
import { View, FlatList, StyleSheet, SafeAreaView, StatusBar, Text } from 'react-native';

import { mockListings } from '../data/mockData';
import { theme } from '../theme/theme';

export const SearchScreen = ({ navigation }: any) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontFamily: 'GoogleSansFlex-Bold', fontSize: 18 }}>Design System Initialization</Text>
            </View>
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
