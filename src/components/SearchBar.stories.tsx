import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { SearchBar } from './SearchBar';

const meta = {
    title: 'Components/SearchBar',
    component: SearchBar,
    decorators: [
        (Story) => (
            <View style={{ padding: 16, flex: 1, backgroundColor: '#E5E7EB' }}>
                <Story />
            </View>
        ),
    ],
    argTypes: {
        onFilterPress: { action: 'filters pressed' },
        onChangeText: { action: 'text changed' },
    },
} satisfies Meta<typeof SearchBar>;

export default meta;

type Story = StoryObj<typeof meta>;

// 1. Empty state
export const Empty: Story = {
    args: {
        value: '',
        placeholder: 'Istanbul • Maslak',
        filtersActive: false,
    },
};

// 2. With text input
export const WithTextInput: Story = {
    args: {
        value: 'Kadikoy, Istanbul',
        filtersActive: false,
    },
};

// 3. Focused state
export const Focused: Story = {
    args: {
        value: 'Sisli',
        autoFocus: true,
    },
};

// 4. With filters active
export const FiltersActive: Story = {
    args: {
        filtersActive: true,
    },
};

// 5. Interactive state
export const Interactive: Story = {
    args: {
        value: '',
        filtersActive: false,
        placeholder: 'Interactive Mode...',
    },
    argTypes: {
        value: { control: 'text' },
        placeholder: { control: 'text' },
        filtersActive: { control: 'boolean' },
    }
};
