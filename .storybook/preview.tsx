import { View } from 'react-native';
import { theme } from '../src/theme/theme';

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: theme.colors.white },
      { name: 'dark', value: theme.colors.black },
    ],
  }
};

export const decorators = [
  (Story) => (
    <View style={{ flex: 1, backgroundColor: theme.colors.white, padding: 16 }}>
      <Story />
    </View>
  ),
];
