import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { TypographyTokens } from './Typography';

const meta = {
    title: 'Nidyu Design System/Foundation/Typography',
    component: TypographyTokens,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof TypographyTokens>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Tokens: Story = {};
