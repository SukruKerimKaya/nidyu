export interface PropertyListing {
    id: string;
    price: number;
    currencySymbol: string;
    timeAgo: string;
    rooms: number;
    baths: number;
    areaSqm: number;
    addressLine1: string;
    addressLine2: string;
    imageUrl: string;
    badges: {
        isPopular: boolean;
        hasRealCheck: boolean;
        has360Tour: boolean;
    };
    userState: {
        isViewed: boolean;
        isFavorite: boolean;
    };
}
