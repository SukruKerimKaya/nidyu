import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../../theme/theme';
import nds from '../../theme/nds-colors.json';

const ColorBlock = ({ name, colorCode, showHex = true }: { name: string, colorCode: string, showHex?: boolean }) => {
    // Basit renk zıtlığı algoritması (arkaplan koyuysa yazıyı beyaz yap)
    const hex = colorCode.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16) || 0;
    const g = parseInt(hex.substring(2, 4), 16) || 0;
    const b = parseInt(hex.substring(4, 6), 16) || 0;
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    const textColor = (yiq >= 128) ? theme.colors.neutral['900'] : theme.colors.white;

    return (
        <View style={styles.colorBlockContainer}>
            <View style={[styles.colorBox, { backgroundColor: colorCode }]} />
            <View style={styles.colorInfo}>
                <Text style={styles.colorName}>{name}</Text>
                {showHex && <Text style={styles.colorHash}>{colorCode.toUpperCase()}</Text>}
            </View>
        </View>
    );
};

const getDescriptionMapping = (family: string) => {
    switch (family) {
        case 'neutral':
            return 'Can be swapped with the default gray color.';
        case 'brand':
            return 'The brand color is your "primary" color, and is used across all interactive elements such as buttons, links, inputs, etc. This color can define the overall feel and can elicit emotion.';
        case 'error':
            return 'Error colors are used across error states and in "destructive" actions. They communicate a destructive/error action, such as removing a user from your team.';
        case 'success':
            return 'Success colors communicate a positive action, positive trend, or a successful confirmation. If you\'re using green as your primary color, it can be helpful to introduce a different hue for your success green.';
        case 'warning':
            return 'Warning colors can communicate that an action is potentially destructive or "on-hold". These colors are commonly used in confirmations to grab the users\' attention.';
        default:
            return '';
    }
};

const getMappedColorName = (hexCode: string): string => {
    if (!hexCode) return '';
    const h = hexCode.toLowerCase();

    for (const [key, value] of Object.entries(nds.semantic.base)) {
        if (typeof value === 'string' && value.toLowerCase() === h) {
            return key.charAt(0).toUpperCase() + key.slice(1);
        }
    }

    for (const [family, shades] of Object.entries(nds.palette)) {
        for (const [shade, value] of Object.entries(shades as Record<string, string>)) {
            if (typeof value === 'string' && value.toLowerCase() === h) {
                return `${family.charAt(0).toUpperCase() + family.slice(1)} ${shade}`;
            }
        }
    }

    return `${hexCode.toUpperCase()}`;
};

export const Base = () => {
    return (
        <View style={styles.container}>
            {/* Base Colors */}
            <Text style={styles.sectionTitle}>Base</Text>
            <Text style={styles.sectionDesc}>
                These are base black, white, brand and accent color styles to quickly swap out if you need to.
            </Text>
            <View style={styles.row}>
                {Object.entries(nds.semantic.base).map(([key, value]) => (
                    key !== 'transparent' && <ColorBlock key={key} name={key.charAt(0).toUpperCase() + key.slice(1)} colorCode={value as string} />
                ))}
            </View>

            {/* Palette Colors */}
            {Object.entries(nds.palette).map(([colorFamily, shades]) => (
                <View key={colorFamily} style={styles.familySection}>
                    <Text style={styles.sectionTitle}>{colorFamily.charAt(0).toUpperCase() + colorFamily.slice(1)}</Text>
                    <Text style={styles.sectionDesc}>
                        {getDescriptionMapping(colorFamily)}
                    </Text>
                    <View style={styles.row}>
                        {Object.entries(shades as Record<string, string>).map(([shade, hex]) => (
                            <ColorBlock key={`${colorFamily}-${shade}`} name={shade} colorCode={hex} />
                        ))}
                    </View>
                </View>
            ))}
        </View>
    );
};

export const SemanticTokens = () => {
    const tokens = Object.keys(theme.colors).filter(k => k.startsWith('surface') || k.startsWith('content') || k.startsWith('border'));
    const [activeTab, setActiveTab] = useState<'Surface' | 'Content' | 'Border'>('Surface');

    const mappedKeys = tokens.filter(k => k.toLowerCase().startsWith(activeTab.toLowerCase()));

    const renderGroup = (keys: string[]) => (
        <View style={styles.tableContainer}>
            {/* Headers Row */}
            <View style={styles.tableHeader}>
                <View style={styles.tokenNameCol} />
                <View style={styles.tokenColorCol}>
                    <Text style={styles.headerText}>Light Mode</Text>
                </View>
                <View style={styles.tokenColorCol}>
                    <Text style={styles.headerText}>Dark Mode</Text>
                </View>
            </View>

            {keys.map(key => {
                const lightHex = (theme.colors as any)[key] as string;
                const darkHex = (theme.darkColors as any)[key] as string || lightHex;
                const formattedKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();

                return (
                    <View key={key} style={styles.tokenRow}>
                        {/* Token Information Column */}
                        <View style={styles.tokenNameCol}>
                            <Text style={styles.tokenNameText}>{formattedKey}</Text>
                        </View>

                        {/* Light Mode Column */}
                        <View style={styles.tokenColorCol}>
                            <View style={[styles.semanticColorBox, { backgroundColor: lightHex }]} />
                            <Text style={styles.aliasNameText}>{getMappedColorName(lightHex).toLowerCase()}</Text>
                            <Text style={styles.hexCodeText}>{lightHex.toLowerCase()}</Text>
                        </View>

                        {/* Dark Mode Column */}
                        <View style={styles.tokenColorCol}>
                            <View style={[styles.semanticColorBox, { backgroundColor: darkHex }]} />
                            <Text style={styles.aliasNameText}>{getMappedColorName(darkHex).toLowerCase()}</Text>
                            <Text style={styles.hexCodeText}>{darkHex.toLowerCase()}</Text>
                        </View>
                    </View>
                );
            })}
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={[styles.sectionTitle, { fontSize: 32, marginBottom: 24 }]}>Semantic Colors</Text>

            {/* Segmented Control */}
            <View style={styles.segmentedControl}>
                {(['Surface', 'Content', 'Border'] as const).map(tab => (
                    <React.Fragment key={tab}>
                        <Text
                            style={[styles.segmentTab, activeTab === tab && styles.segmentTabActive]}
                            onPress={() => setActiveTab(tab)}
                        >
                            {tab}
                        </Text>
                    </React.Fragment>
                ))}
            </View>

            {renderGroup(mappedKeys)}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: theme.spacing.xl,
        backgroundColor: theme.colors.neutral['25'],
    },
    sectionTitle: {
        fontFamily: theme.typography.price.fontFamily,
        fontSize: 24,
        color: theme.colors.neutral['900'],
        marginTop: theme.spacing.xl,
        marginBottom: theme.spacing.sm,
    },
    sectionDesc: {
        fontFamily: theme.typography.body.fontFamily,
        fontSize: 14,
        color: theme.colors.neutral['500'],
        marginBottom: theme.spacing.xl,
    },
    tableContainer: {
        marginTop: 64, // Increased gap below segmented control
    },
    familySection: {
        marginBottom: theme.spacing.xl,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: theme.spacing.lg,
    },
    colorBlockContainer: {
        width: 140,
        backgroundColor: theme.colors.white,
        borderRadius: theme.radii.xl, // 12px
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.10)',
        shadowColor: theme.shadows.lg.shadowColor,
        shadowOffset: theme.shadows.lg.shadowOffset,
        shadowOpacity: theme.shadows.lg.shadowOpacity,
        shadowRadius: theme.shadows.lg.shadowRadius,
        elevation: theme.shadows.lg.elevation,
        overflow: 'hidden',
    },
    colorBox: {
        height: 100,
        width: '100%',
    },
    colorInfo: {
        padding: theme.spacing.md,
    },
    colorName: {
        fontFamily: 'GoogleSansFlex-Medium',
        fontSize: 14,
        color: theme.colors.neutral['900'],
        marginBottom: theme.spacing.xs,
    },
    colorHash: {
        fontFamily: theme.typography.caption.fontFamily,
        fontSize: 12,
        color: theme.colors.neutral['500'],
    },
    tokenRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 32,
        width: '100%',
    },
    tokenNameCol: {
        flex: 1,
        paddingRight: theme.spacing.md,
    },
    tokenColorCol: {
        flex: 1,
        paddingRight: theme.spacing.lg,
    },
    tokenNameText: {
        fontFamily: 'GoogleSansFlex-Medium',
        fontSize: 16,
        color: theme.colors.neutral['900'],
    },
    semanticColorBox: {
        height: 60,
        width: '100%',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.10)',
        marginBottom: theme.spacing.sm,
    },
    aliasNameText: {
        fontFamily: 'GoogleSansFlex-Medium',
        fontSize: 14,
        color: theme.colors.neutral['900'],
        marginBottom: 2,
    },
    hexCodeText: {
        fontFamily: 'GoogleSansFlex-Regular',
        fontSize: 12,
        color: theme.colors.neutral['500'],
        marginBottom: 2,
    },
    tableHeader: {
        flexDirection: 'row',
        marginBottom: theme.spacing.lg,
        width: '100%',
    },
    headerText: {
        fontFamily: 'GoogleSansFlex-Medium',
        fontSize: 14,
        color: theme.colors.neutral['500'],
    },
    segmentedControl: {
        flexDirection: 'row',
        backgroundColor: '#E5E7EB',
        borderRadius: 8,
        padding: 4,
        alignSelf: 'flex-start',
    },
    segmentTab: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        fontFamily: 'GoogleSansFlex-Medium',
        fontSize: 14,
        color: '#4B5563', // gray-600
        borderRadius: 6,
    },
    segmentTabActive: {
        backgroundColor: '#FFFFFF',
        color: '#111827', // gray-900
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
});
