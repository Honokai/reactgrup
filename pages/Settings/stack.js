import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Settings from './index';
import Gestao from './admin';

const Stack = createStackNavigator()
const SettingsStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Settings" component={Settings}/>
            <Stack.Screen name="Gestao" component={Gestao} />
        </Stack.Navigator>
    )
} 

export default SettingsStack;