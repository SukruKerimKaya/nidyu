import type { Meta, StoryObj } from '@storybook/react';
import { Base as BaseComponent, SemanticTokens as SemanticTokensComponent } from './Color';

const meta = {
    title: 'Nidyu Design System/Foundation/Colors',
    parameters: {
        layout: 'padded',
    },
} satisfies Meta;

export default meta;

export const Alias: StoryObj = {
    render: () => <BaseComponent />,
};

export const Semantic: StoryObj = {
    render: () => <SemanticTokensComponent />,
};
