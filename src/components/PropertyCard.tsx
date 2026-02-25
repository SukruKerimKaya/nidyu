import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { PropertyListing } from '../types';
import { theme } from '../theme/theme';

interface PropertyCardProps {
    property: PropertyListing;
    onPress?: () => void;
    isLoading?: boolean;
    isError?: boolean;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onPress = () => { }, isLoading = false, isError = false }) => {
    if (isLoading) {
        return (
            <View style={[styles.cardContainer, styles.loadingContainer]}>
                <View style={styles.skeletonImage} />
                <View style={styles.contentContainer}>
                    <View style={styles.skeletonTextLarge} />
                    <View style={styles.skeletonTextSmall} />
                    <View style={styles.skeletonTextMedium} />
                </View>
            </View>
        );
    }

    if (isError) {
        return (
            <View style={[styles.cardContainer, styles.errorContainer]}>
                <MaterialIcons name="error-outline" size={48} color="#EF4444" />
                <Text style={styles.errorText}>Failed to load property details</Text>
            </View>
        );
    }
    return (
        <TouchableOpacity style={styles.cardContainer} onPress={onPress} activeOpacity={0.9}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: property.imageUrl }} style={styles.image} />

                {/* Top Badges */}
                <View style={styles.topBadgesRow}>
                    <View style={styles.leftBadges}>
                        {property.badges.isPopular && (
                            <View style={styles.popularBadge}>
                                <FontAwesome5 name="gem" size={10} color={theme.colors.textDark} />
                                <Text style={styles.popularBadgeText}>POPULAR</Text>
                            </View>
                        )}
                        {property.badges.hasRealCheck && (
                            <View style={styles.realCheckBadge}>
                                <MaterialIcons name="verified" size={12} color={theme.colors.textDark} />
                                <Text style={styles.realCheckBadgeText}>RealCheck</Text>
                            </View>
                        )}
                    </View>

                    <TouchableOpacity style={styles.favoriteButton}>
                        <MaterialCommunityIcons
                            name={property.userState.isFavorite ? "heart" : "cards-heart-outline"}
                            size={24}
                            color={property.userState.isFavorite ? "#EF4444" : theme.colors.textMedium}
                        />
                    </TouchableOpacity>
                </View>

                {/* Bottom Badge */}
                {property.badges.has360Tour && (
                    <View style={styles.tourBadge}>
                        <MaterialIcons name="360" size={16} color="#FFF" />
                    </View>
                )}
            </View>

            <View style={styles.contentContainer}>
                {/* Price Row */}
                <View style={styles.priceRow}>
                    <View style={styles.priceLeft}>
                        <Text style={styles.priceText}>
                            {property.currencySymbol}{property.price.toLocaleString()}
                        </Text>
                        <Text style={styles.timeAgoText}>{property.timeAgo}</Text>
                    </View>
                    {property.userState.isViewed && (
                        <View style={styles.viewedBadge}>
                            <Text style={styles.viewedBadgeText}>Viewed</Text>
                        </View>
                    )}
                </View>

                {/* Details Row */}
                <Text style={styles.detailsText}>
                    {property.rooms} Rooms • {property.baths} Bath • {property.areaSqm}m2
                </Text>

                {/* Location Row */}
                <Text style={styles.locationText} numberOfLines={1}>
                    {property.addressLine1}, {property.addressLine2}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: theme.colors.cardBackground,
        borderRadius: 16,
        marginBottom: theme.spacing.xl,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 4 },
        elevation: 3,
    },
    loadingContainer: {
        opacity: 0.7,
    },
    skeletonImage: {
        height: 220,
        backgroundColor: '#E5E7EB',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
    },
    skeletonTextLarge: {
        width: '60%',
        height: 28,
        backgroundColor: '#E5E7EB',
        borderRadius: 4,
        marginBottom: 8,
    },
    skeletonTextMedium: {
        width: '80%',
        height: 16,
        backgroundColor: '#E5E7EB',
        borderRadius: 4,
        marginTop: 8,
    },
    skeletonTextSmall: {
        width: '40%',
        height: 16,
        backgroundColor: '#E5E7EB',
        borderRadius: 4,
    },
    errorContainer: {
        height: 220,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FEF2F2', // Light red
        padding: 24,
    },
    errorText: {
        marginTop: 12,
        fontFamily: 'PlusJakartaSans_500Medium',
        color: '#EF4444',
        fontSize: 16,
    },
    imageContainer: {
        height: 220,
        width: '100%',
        position: 'relative',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    topBadgesRow: {
        position: 'absolute',
        top: theme.spacing.md,
        left: theme.spacing.md,
        right: theme.spacing.md,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    leftBadges: {
        flexDirection: 'row',
        gap: 8,
    },
    popularBadge: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 6,
        gap: 4,
    },
    popularBadgeText: {
        ...theme.typography.badge,
        color: theme.colors.textDark,
    },
    realCheckBadge: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 6,
        gap: 4,
    },
    realCheckBadgeText: {
        ...theme.typography.badge,
        color: theme.colors.textDark,
    },
    favoriteButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        padding: 6,
        borderRadius: 16,
    },
    tourBadge: {
        position: 'absolute',
        bottom: theme.spacing.md,
        left: theme.spacing.md,
        backgroundColor: theme.colors.badgeDark,
        padding: 6,
        borderRadius: 6,
    },
    contentContainer: {
        padding: theme.spacing.lg,
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: theme.spacing.sm,
    },
    priceLeft: {
        flexDirection: 'row',
        alignItems: 'baseline',
        gap: 8,
    },
    priceText: {
        ...theme.typography.price,
        color: theme.colors.textDark,
    },
    timeAgoText: {
        ...theme.typography.caption,
    },
    viewedBadge: {
        backgroundColor: '#F3F4F6',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 12,
    },
    viewedBadgeText: {
        fontFamily: 'PlusJakartaSans_600SemiBold',
        fontSize: 12,
        color: theme.colors.textMedium,
    },
    detailsText: {
        ...theme.typography.body,
        marginBottom: theme.spacing.xs,
    },
    locationText: {
        ...theme.typography.body,
    },
});
