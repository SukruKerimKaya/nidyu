import React from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../theme/theme';

interface SearchBarProps {
    value?: string;
    onChangeText?: (text: string) => void;
    placeholder?: string;
    autoFocus?: boolean;
    onFilterPress?: () => void;
    filtersActive?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
    value,
    onChangeText,
    placeholder = "Istanbul • Maslak",
    autoFocus = false,
    onFilterPress,
    filtersActive = false
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <Ionicons name="search" size={20} color={theme.colors.textMedium} style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    placeholderTextColor={theme.colors.textMedium}
                    value={value}
                    onChangeText={onChangeText}
                    autoFocus={autoFocus}
                />
            </View>
            <TouchableOpacity onPress={onFilterPress}>
                <Text style={[styles.filtersText, filtersActive && styles.filtersActive]}>Filters</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: theme.spacing.lg,
        paddingVertical: theme.spacing.md,
        gap: theme.spacing.md,
        backgroundColor: '#FFF',
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.background,
        borderRadius: 24,
        paddingHorizontal: theme.spacing.md,
        height: 44,
    },
    icon: {
        marginRight: theme.spacing.sm,
    },
    input: {
        flex: 1,
        fontFamily: 'PlusJakartaSans_400Regular',
        fontSize: 16,
        color: theme.colors.textDark,
    },
    filtersText: {
        color: theme.colors.primary,
        fontFamily: 'PlusJakartaSans_600SemiBold',
        fontSize: 16,
    },
    filtersActive: {
        color: '#1D4ED8', // darker blue for active state
        textDecorationLine: 'underline',
    }
});
