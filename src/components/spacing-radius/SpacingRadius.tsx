import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { theme } from '../../theme/theme';

export const SpacingRadius = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Spacing (4-Point Grid System)</Text>
                <Text style={styles.description}>
                    Values for margin, padding, and gaps. Always use these tokens for spacing.
                </Text>
                <View style={styles.gridContainer}>
                    {Object.entries(theme.spacing).map(([key, val]) => (
                        <View key={`space-${key}`} style={styles.row}>
                            <View style={styles.labelContainer}>
                                <Text style={styles.labelKey}>{key}</Text>
                                <Text style={styles.labelValue}>{val}px</Text>
                            </View>
                            <View style={[styles.visualSpaceBox, { width: val as number }]} />
                        </View>
                    ))}
                </View>
            </View>

            <View style={[styles.section, { marginTop: 40 }]}>
                <Text style={styles.sectionTitle}>Radii (Border Radius)</Text>
                <Text style={styles.description}>
                    Border radius values for corner rounding.
                </Text>
                <View style={styles.radiusGridContainer}>
                    {Object.entries(theme.radii).map(([key, val]) => (
                        <View key={`radius-${key}`} style={styles.radiusCard}>
                            <View
                                style={[
                                    styles.visualRadiusBox,
                                    { borderRadius: val as number }
                                ]}
                            />
                            <Text style={styles.labelKey}>{key}</Text>
                            <Text style={styles.labelValue}>{val === 9999 ? 'full (9999)' : `${val}px`}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.surfaceTertiary,
        padding: theme.spacing.xl,
    },
    section: {
        marginBottom: theme.spacing.xl,
    },
    sectionTitle: {
        ...theme.typography.body,
        color: theme.colors.contentPrimary,
        marginBottom: theme.spacing.xs,
        fontSize: 24,
    },
    description: {
        ...theme.typography.body,
        color: theme.colors.contentSecondary,
        marginBottom: theme.spacing.lg,
    },
    gridContainer: {
        backgroundColor: theme.colors.surfacePrimary,
        borderRadius: theme.radii.lg,
        padding: theme.spacing.lg,
        gap: theme.spacing.md,
        borderWidth: 1,
        borderColor: theme.colors.borderSecondary,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: theme.spacing.sm,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.borderSecondary,
    },
    labelContainer: {
        width: 100,
    },
    labelKey: {
        fontFamily: 'GoogleSansFlex-Bold',
        fontSize: 14,
        color: theme.colors.contentPrimary,
    },
    labelValue: {
        fontFamily: 'GoogleSansFlex-Regular',
        fontSize: 12,
        color: theme.colors.contentSecondary,
        marginTop: 2,
    },
    visualSpaceBox: {
        height: 16,
        backgroundColor: theme.colors.surfaceBrand,
        borderRadius: 2,
    },
    radiusGridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: theme.spacing.lg,
    },
    radiusCard: {
        backgroundColor: theme.colors.surfacePrimary,
        borderRadius: theme.radii.lg,
        padding: theme.spacing.md,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: theme.colors.borderSecondary,
        width: 120,
    },
    visualRadiusBox: {
        width: 64,
        height: 64,
        backgroundColor: theme.colors.surfaceBrand,
        marginBottom: theme.spacing.md,
    }
});
