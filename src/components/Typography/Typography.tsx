import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { theme } from '../../theme/theme';

type TypographyToken = {
    fontFamily: string;
    fontSize: number;
    lineHeight: number;
    letterSpacing?: number;
    textDecorationLine?: 'none' | 'underline' | 'line-through' | 'underline line-through';
};

type TypographyCategory = {
    [key: string]: TypographyToken;
};

const getWeightName = (fontFamily: string) => {
    if (fontFamily.includes('Bold')) return 'Bold (700)';
    if (fontFamily.includes('Medium')) return 'Medium (500)';
    return 'Regular (400)';
};

const formatTokenName = (category: string, tokenKey: string) => {
    const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

    // For 'infoChips' -> 'Info Chips'
    if (category === 'infoChips') category = 'Info Chips';

    if (tokenKey === 'base') return category;

    // For xlarge -> XLarge, large -> Large
    let formattedKey = tokenKey;
    if (tokenKey === 'xlarge') formattedKey = 'XLarge';
    else if (tokenKey === 'xsmall') formattedKey = 'XSmall';
    else formattedKey = capitalize(tokenKey);

    return `${capitalize(category)} ${formattedKey}`;
};

const getSampleText = (category: string) => {
    if (category === 'Info Chips' || category === 'infoChips') return 'Lorem ipsum dolor sit amet.';
    if (category === 'display') return 'Lorem ipsum dolor sit amet.';
    if (category === 'heading') return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
    return 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.';
};

const TypographyRow = ({ category, tokenKey, token }: { category: string, tokenKey: string, token: TypographyToken }) => {
    return (
        <View style={styles.row}>
            {/* Sample Text Container */}
            <View style={styles.sampleContainer}>
                <Text style={[styles.sampleText, token as any]} numberOfLines={2}>
                    {getSampleText(category)}
                </Text>
            </View>

            {/* Token Attributes */}
            <View style={styles.attributesContainer}>
                <View style={styles.attributeCol}>
                    <Text style={styles.attributeLabel}>Size</Text>
                    <Text style={styles.attributeValue}>{token.fontSize}px</Text>
                </View>

                <View style={styles.attributeCol}>
                    <Text style={styles.attributeLabel}>Weight</Text>
                    <Text style={styles.attributeValue}>{getWeightName(token.fontFamily)}</Text>
                </View>

                <View style={styles.attributeCol}>
                    <Text style={styles.attributeLabel}>Line height</Text>
                    <Text style={styles.attributeValue}>{token.lineHeight}px</Text>
                </View>

                <View style={styles.attributeColFlex}>
                    <Text style={styles.attributeLabel}>Token</Text>
                    <Text style={styles.attributeValue}>{formatTokenName(category, tokenKey)}</Text>
                </View>
            </View>
        </View>
    );
};

export const TypographyTokens = () => {
    const categories = [
        { key: 'display', label: 'Display' },
        { key: 'heading', label: 'Heading' },
        { key: 'label', label: 'Label' },
        { key: 'paragraph', label: 'Paragraph' },
        { key: 'link', label: 'Link' },
        { key: 'infoChips', label: 'Info Chips' },
    ];

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Typography tokens</Text>

            <View style={styles.content}>
                {categories.map(({ key, label }) => {
                    const categoryTokens = (theme.typography as any)[key] as TypographyCategory;
                    if (!categoryTokens) return null;

                    // Sort order: xlarge, large, medium, small, xsmall, base
                    const order = ['xlarge', 'large', 'medium', 'small', 'xsmall', 'base'];
                    const sortedKeys = Object.keys(categoryTokens).sort((a, b) => {
                        return order.indexOf(a) - order.indexOf(b);
                    });

                    return (
                        <View key={key} style={styles.section}>
                            <Text style={styles.sectionTitle}>{label}</Text>
                            {sortedKeys.map((tokenKey) => (
                                <TypographyRow
                                    key={`${key}-${tokenKey}`}
                                    category={key}
                                    tokenKey={tokenKey}
                                    token={categoryTokens[tokenKey]}
                                />
                            ))}
                        </View>
                    );
                })}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
    },
    title: {
        fontFamily: 'GoogleSansFlex-Bold',
        fontSize: 32,
        color: theme.colors.white,
        backgroundColor: theme.colors.neutral['950'],
        padding: 40,
        marginBottom: 40,
    },
    content: {
        paddingHorizontal: 40,
        paddingBottom: 80,
    },
    section: {
        marginBottom: 48,
    },
    sectionTitle: {
        fontFamily: 'GoogleSansFlex-Bold',
        fontSize: 16,
        color: theme.colors.neutral['900'],
        marginBottom: 24,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        width: '100%',
        gap: 32,
    },
    sampleContainer: {
        flex: 1,
        backgroundColor: theme.colors.neutral['25'],
        borderRadius: 12,
        padding: 24,
        minHeight: 120,
        justifyContent: 'center',
    },
    sampleText: {
        color: theme.colors.neutral['900'],
    },
    attributesContainer: {
        flexDirection: 'row',
        width: 600,
        gap: 24,
    },
    attributeCol: {
        width: 120,
    },
    attributeColFlex: {
        flex: 1,
    },
    attributeLabel: {
        fontFamily: 'GoogleSansFlex-Medium',
        fontSize: 12,
        color: theme.colors.neutral['400'],
        marginBottom: 4,
    },
    attributeValue: {
        fontFamily: 'GoogleSansFlex-Medium',
        fontSize: 14,
        color: theme.colors.neutral['900'],
    },
});
