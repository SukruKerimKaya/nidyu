import nds from './nds-colors.json';
import ndsTypography from './nds-typography.json';

import ndsMetrics from './nds-metrics.json';

export const theme = {
  // Alias / Base Colors
  colors: {
    ...nds.semantic.base,
    ...nds.semantic.alias,
    ...nds.palette, // Brand, Neutral, Error, Success, Warning

    // Semantic (Mapped) Color Tokens
    surfacePrimary: nds.semantic.base.white,
    contentPrimary: nds.palette.neutral['900'],
    contentBrandStatic: nds.semantic.base.brand,
    contentSecondary: nds.palette.neutral['500'],
    contentError: nds.semantic.base.error,
    contentSuccess: nds.palette.success['800'],
    borderPrimary: nds.palette.neutral['400'],
    surfaceDisabled: nds.palette.neutral['100'],
    surfaceBrand: nds.semantic.base.brand,
    surfaceSecondary: nds.palette.brand['50'],
    contentDisabled: nds.palette.neutral['300'],
    borderSecondary: nds.palette.neutral['200'],
    surfaceElevated: nds.semantic.base.white,
    surfaceWarning: nds.palette.warning['300'],
    surfaceError: nds.semantic.base.error,
    surfaceSuccess: nds.semantic.base.success,
    contentWarning: nds.palette.warning['700'],
    surfaceTertiary: nds.palette.neutral['50'],
    surfaceOverlay: '#000000',
    borderBrand: nds.semantic.base.brand,
    borderDisabled: nds.palette.neutral['300'],
  },
  darkColors: {
    // Semantic Dark Mode Tokens
    surfacePrimary: nds.semantic.base.black,
    contentPrimary: nds.semantic.base.white,
    contentBrandStatic: nds.palette.brand['400'],
    contentSecondary: nds.palette.neutral['400'],
    contentError: nds.palette.error['600'],
    contentSuccess: nds.palette.success['500'],
    borderPrimary: nds.palette.neutral['700'],
    surfaceDisabled: nds.palette.neutral['700'],
    surfaceBrand: nds.semantic.base.brand,
    surfaceSecondary: nds.palette.brand['950'],
    contentDisabled: nds.palette.neutral['600'],
    borderSecondary: nds.palette.neutral['900'],
    surfaceElevated: nds.palette.neutral['950'],
    surfaceWarning: nds.palette.warning['800'],
    surfaceError: nds.palette.error['700'],
    surfaceSuccess: nds.palette.success['700'],
    contentWarning: nds.palette.warning['400'],
    surfaceTertiary: nds.palette.neutral['900'],
    surfaceOverlay: '#000000',
    borderBrand: nds.semantic.base.brand,
    borderDisabled: nds.palette.neutral['500'],
  },
  spacing: {
    ...ndsMetrics.spacing,
  },
  radii: {
    ...ndsMetrics.radius,
  },
  shadows: {
    // Figma: 0 12px 16px -4px rgba(16, 24, 40, 0.08), 0 4px 6px -2px rgba(16, 24, 40, 0.03)
    lg: {
      shadowColor: '#101828',
      shadowOffset: { width: 0, height: 12 },
      shadowOpacity: 0.08,
      shadowRadius: 16,
      elevation: 5,
    },
    border: {
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.10,
      shadowRadius: 1,
      elevation: 1,
    }
  },
  typography: {
    ...ndsTypography,
    price: {
      fontFamily: 'GoogleSansFlex-Bold',
      fontSize: 22,
    },
    body: {
      fontFamily: 'GoogleSansFlex-Regular',
      fontSize: 14,
      color: nds.palette.neutral[600],
    },
    caption: {
      fontFamily: 'GoogleSansFlex-Regular',
      fontSize: 12,
      color: nds.palette.neutral[400],
    },
    badge: {
      fontFamily: 'GoogleSansFlex-Bold',
      fontSize: 10,
    }
  },
} as const;

export type Theme = typeof theme;
