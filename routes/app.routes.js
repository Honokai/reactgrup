import React, {} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import GrupoStack from '../pages/Chat/stack';
import SettingsStack from '../pages/Settings/stack';

const Tab = createBottomTabNavigator();

const AppRoutes = () => {
    return (
        <Tab.Navigator initialRouteName="GrupoStack"
            tabBarOptions={
                {
                    activeTintColor: '#AB1B71',
                    inactiveTintColor: '#ccc'
                }
            }
        >
            <Tab.Screen name="GrupoStack" component={GrupoStack}
                options={
                    {
                        tabBarIcon: ({color}) => (
                            <MaterialCommunityIcons name="chat" size={32} color={color}/>
                        ) 
                    }
                }
            />
            <Tab.Screen name="Configurações" component={SettingsStack}
                options={
                    {
                        tabBarIcon:
                        ({color}) => (<MaterialCommunityIcons name="settings" size={32} color={color}/>) 
                    }
                }
            />
        </Tab.Navigator>
    )
}

export default AppRoutes;