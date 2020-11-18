import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Grupos from './index';
import Chat from './chat';

const Stack = createStackNavigator()
const GrupoStack = () => {
    return(
        <Stack.Navigator 
            screenOptions={{
                headerTintColor: '#fff',
                headerStyle: { backgroundColor: 'rgb(140,150,180)' 
                }
            }}
        >
            <Stack.Screen name="Grupos" component={Grupos} 
            />
            <Stack.Screen name="Chat" component={Chat} options={({ route }) => ({ title: route.params.grupo })}/>
        </Stack.Navigator>
    )
} 

export default GrupoStack;