import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { PropertyCard } from './PropertyCard';
import { mockListings } from '../data/mockData';

const meta = {
    title: 'Components/PropertyCard',
    component: PropertyCard,
    decorators: [
        (Story) => (
            <View style={{ padding: 16, flex: 1, backgroundColor: '#FAFAFA' }}>
                <Story />
            </View>
        ),
    ],
    argTypes: {
        onPress: {
            action: 'pressed the card',
            description: 'Triggered when the user presses the card'
        },
    },
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'The `PropertyCard` is the main presentation component for a single real estate listing. It handles complex badge overlay logic (Popular, 360 Tour, Realistic Checks), loading skeleton indicators, and error fallback modes. It relies strictly on the `PropertyListing` type.',
            },
        },
        notes: `
# PropertyCard Component

The \`PropertyCard\` is the primary display unit for a single real estate listing in the Nidyu application. It handles conditional rendering for badges, formatted pricing, and graceful loading/error states.

## Component Props
- \`property\`: Requires a full \`PropertyListing\` type object mapping the details.
- \`isLoading\`: Boolean toggle to present a gray tracking skeleton.
- \`isError\`: Boolean toggle to catch and contain API rejections.

## Design System Integration
Used fonts include **PlusJakartaSans_700Bold** and **PlusJakartaSans_500Medium**.
Spacing utilizes global \`theme.spacing.sm\` tokens.

## Accessibility
Uses explicit \`activeOpacity={0.9}\` for interactive physical tapping references, and semantic structure over nested native Views.
    `,
    }
} satisfies Meta<typeof PropertyCard>;

export default meta;

type Story = StoryObj<typeof meta>;

// 1. Default State
export const Default: Story = {
    args: {
        property: {
            ...mockListings[0],
            badges: { isPopular: false, hasRealCheck: false, has360Tour: false },
            userState: { isViewed: false, isFavorite: false },
        },
    },
};

// 2. With favorite toggled
export const FavoriteToggled: Story = {
    args: {
        property: {
            ...mockListings[0],
            badges: { isPopular: false, hasRealCheck: false, has360Tour: false },
            userState: { isViewed: false, isFavorite: true },
        },
    },
};

// 3. With all badges (POPULAR + RealCheck + 360)
export const AllBadges: Story = {
    args: {
        property: mockListings[0], // the first mock item already has all badges
    },
};

// 4. Without badges
export const NoBadges: Story = {
    args: {
        property: {
            ...mockListings[0],
            badges: { isPopular: false, hasRealCheck: false, has360Tour: false },
            userState: { isViewed: false, isFavorite: false },
        },
    },
};

// 5. Loading State
export const Loading: Story = {
    args: {
        property: mockListings[0],
        isLoading: true,
    },
};

// 6. Error State
export const Error: Story = {
    args: {
        property: mockListings[0],
        isError: true,
    },
};

// 7. Interactive (using controls)
export const Interactive: Story = {
    args: {
        property: mockListings[0],
    },
    argTypes: {
        isLoading: { control: 'boolean' },
        isError: { control: 'boolean' },
    }
};
