import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-native';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { theme } from '../theme/theme';

const ThemeShowcase = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Nidyu Theme Overview</Text>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Light Mode Colors</Text>
                <View style={styles.colorGrid}>
                    {Object.entries(theme.colors).map(([name, hex]) => (
                        <View key={name} style={styles.colorCard}>
                            <View style={[styles.colorBox, { backgroundColor: hex }]} />
                            <Text style={styles.colorName}>{name}</Text>
                            <Text style={styles.colorHex}>{hex}</Text>
                        </View>
                    ))}
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Typography</Text>
                <View style={styles.typeCard}>
                    <Text style={theme.typography.price}>Price Heading (22px Bold)</Text>
                    <Text style={theme.typography.body}>Body Text (14px Regular)</Text>
                    <Text style={theme.typography.caption}>Caption (12px Regular)</Text>
                    <Text style={theme.typography.badge}>BADGE (10px Bold)</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFF', padding: 16 },
    header: { fontSize: 24, fontFamily: 'PlusJakartaSans_700Bold', marginBottom: 24 },
    section: { marginBottom: 32 },
    sectionTitle: { fontSize: 18, fontFamily: 'PlusJakartaSans_600SemiBold', marginBottom: 16 },
    colorGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 16 },
    colorCard: { width: '45%' },
    colorBox: { height: 80, borderRadius: 8, borderWidth: 1, borderColor: '#E5E7EB', marginBottom: 8 },
    colorName: { fontSize: 14, fontFamily: 'PlusJakartaSans_500Medium', color: '#111827' },
    colorHex: { fontSize: 12, fontFamily: 'PlusJakartaSans_400Regular', color: '#6B7280' },
    typeCard: { gap: 16, padding: 16, backgroundColor: '#F9FAFB', borderRadius: 8 },
});

const meta = {
    title: 'Design System/Theme',
    component: ThemeShowcase,
} satisfies Meta<typeof ThemeShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

// 1. Light Theme Overview
export const LightModeOverview: Story = {};
