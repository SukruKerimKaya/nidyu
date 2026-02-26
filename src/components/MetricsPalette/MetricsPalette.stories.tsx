import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-native';
import { MetricsPalette } from './MetricsPalette';
import { View } from 'react-native';

const meta = {
    title: 'Nidyu Design System/Foundation/Spacing & Radii',
    component: MetricsPalette,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Nidyu 4-Point Grid System (Spacing) and Border Radius values.',
            },
        },
    },
    decorators: [
        (Story) => (
            <View style={{ flex: 1 }}>
                <Story />
            </View>
        ),
    ],
} satisfies Meta<typeof MetricsPalette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
