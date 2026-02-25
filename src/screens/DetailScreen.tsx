import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const DetailScreen = ({ route }: any) => {
    return (
        <View style={styles.container}>
            <Text>Property Detail: {route.params?.id}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
