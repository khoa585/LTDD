import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    View, Text
} from 'react-native';
import Home from '../Home';
import Profile from '../Profile';
import Notifications from '../Notifications';
import History from '../History';
import Saved from '../Saved';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/EvilIcons';
const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
    return (
        <Tab.Navigator tabBarOptions={{
                showLabel: false,
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <FontAwesome name={"home"} size={25} color="#ff6666" />
                        }
                        else {
                            return <FontAwesome name={"home"} size={20} />
                        }
                    }
                }}
            />
            <Tab.Screen name="Saved"
                component={Saved}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <Ionicons name={"bookmark"} size={25} color="#ff6666" />
                        }
                        else {
                            return <Ionicons name={"bookmark"} size={20} />
                        }
                    }
                }}
            />
            <Tab.Screen name="History"
                component={History}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <Foundation name={"book"} size={25} color="#ff6666" />
                        }
                        else {
                            return <Foundation name={"book"} size={20} />
                        }
                    }
                }}
            />
            <Tab.Screen name="Notifications"
                component={Notifications}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <Ionicons name={"notifications"} size={25} color="#ff6666" />
                        }
                        else {
                            return <Ionicons name={"notifications"} size={20} />
                        }
                    }
                }}
            />
            <Tab.Screen name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return <FontAwesome name={"user-circle-o"} size={25} color="#ff6666" />
                        }
                        else {
                            return <FontAwesome name={"user-circle-o"} size={20} />
                        }
                    }
                }}
            />
        </Tab.Navigator>
    );
};
export default BottomNavigation;