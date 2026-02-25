export const theme = {
  colors: {
    background: '#FAFAFA',
    cardBackground: '#FFFFFF',
    textDark: '#111827',
    textMedium: '#4B5563',
    textLight: '#9CA3AF',
    primary: '#2563EB',
    badgeDark: 'rgba(0,0,0,0.6)',
    heartIcon: '#4B5563',
    border: '#E5E7EB',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
  },
  typography: {
    price: {
      fontFamily: 'PlusJakartaSans_700Bold',
      fontSize: 22,
    },
    body: {
      fontFamily: 'PlusJakartaSans_400Regular',
      fontSize: 14,
      color: '#4B5563',
    },
    caption: {
      fontFamily: 'PlusJakartaSans_400Regular',
      fontSize: 12,
      color: '#9CA3AF',
    },
    badge: {
      fontFamily: 'PlusJakartaSans_700Bold',
      fontSize: 10,
    }
  },
} as const;
