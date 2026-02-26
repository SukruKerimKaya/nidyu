import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SpacingRadius } from './SpacingRadius';
import { View } from 'react-native';

const meta = {
    title: 'Nidyu Design System/Foundation/Spacing & Radii',
    component: SpacingRadius,
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Nidyu 4-Point Grid System (Spacing) and Border Radius values.',
            },
        },
    },
    decorators: [
        (Story: any) => (
            <View style={{ flex: 1 }}>
                <Story />
            </View>
        ),
    ],
} satisfies Meta<typeof SpacingRadius>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
