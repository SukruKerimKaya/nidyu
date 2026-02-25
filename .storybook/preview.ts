import type { Preview } from '@storybook/react';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        docs: {
            // Opt-in for autodocs specifically
            defaultName: 'Documentation',
        },
    },
    tags: ['autodocs'],
};

export default preview;
