import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { SearchScreen } from '../screens/SearchScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { View, Text } from 'react-native';
import { theme } from '../theme/theme';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const PlaceholderScreen = ({ title }: { title: string }) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{title}</Text>
    </View>
);

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.contentPrimary,
                tabBarInactiveTintColor: theme.colors.contentSecondary,
                tabBarStyle: {
                    borderTopWidth: 1,
                    borderTopColor: theme.colors.borderSecondary,
                    paddingTop: 8,
                    paddingBottom: 28, // adjust for safe area manually if needed
                    height: 84,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '500',
                    marginTop: 4,
                }
            }}
        >
            <Tab.Screen
                name="Home"
                children={() => <PlaceholderScreen title="Home" />}
                options={{
                    tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? "search" : "search-outline"} size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Activity"
                children={() => <PlaceholderScreen title="Activity" />}
                options={{
                    tabBarIcon: ({ color }) => <Feather name="bookmark" size={24} color={color} />
                }}
            />
            <Tab.Screen
                name="Menu"
                children={() => <PlaceholderScreen title="Menu" />}
                options={{
                    tabBarIcon: ({ color }) => <Feather name="more-horizontal" size={24} color={color} />
                }}
            />
        </Tab.Navigator>
    );
};

export const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Tabs" component={TabNavigator} />
                <Stack.Screen
                    name="Detail"
                    component={DetailScreen}
                    options={{ presentation: 'modal' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
