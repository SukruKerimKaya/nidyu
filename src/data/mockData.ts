import { PropertyListing } from '../types';

export const mockListings: PropertyListing[] = [
    {
        id: '1',
        price: 699000,
        currencySymbol: '$',
        timeAgo: '13 hours ago',
        rooms: 3,
        baths: 2,
        areaSqm: 185,
        addressLine1: 'Maslak 1453',
        addressLine2: 'Sariyer, Istanbul',
        imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800',
        badges: {
            isPopular: true,
            hasRealCheck: true,
            has360Tour: true,
        },
        userState: {
            isViewed: true,
            isFavorite: false,
        }
    },
    {
        id: '2',
        price: 699000,
        currencySymbol: '$',
        timeAgo: '13 hours ago',
        rooms: 3,
        baths: 2,
        areaSqm: 185,
        addressLine1: 'Maslak 1453',
        addressLine2: 'Sariyer, Istanbul',
        imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
        badges: {
            isPopular: true,
            hasRealCheck: true,
            has360Tour: true,
        },
        userState: {
            isViewed: true,
            isFavorite: false,
        }
    },
    {
        id: '3',
        price: 850000,
        currencySymbol: '$',
        timeAgo: '2 days ago',
        rooms: 4,
        baths: 3,
        areaSqm: 240,
        addressLine1: 'Vadi Istanbul',
        addressLine2: 'Sariyer, Istanbul',
        imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800',
        badges: {
            isPopular: false,
            hasRealCheck: true,
            has360Tour: false,
        },
        userState: {
            isViewed: false,
            isFavorite: true,
        }
    }
];
