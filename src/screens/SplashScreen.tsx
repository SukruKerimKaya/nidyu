import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { theme } from '../theme/theme';
import { NidyuLogotype } from '../components/Logo/NidyuLogotype';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <NidyuLogotype
                width={SCREEN_WIDTH * 0.25}
                height={(SCREEN_WIDTH * 0.25) * (119 / 80)}
                color="white"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.surfaceBrand,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
