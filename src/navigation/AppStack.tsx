import { createStackNavigator } from '@react-navigation/stack'
import React, { FC } from 'react'
import { Dashboard } from '../screens';
import Home from '../screens/Home';


const {Navigator, Screen} = createStackNavigator();

const AppStack : FC = () => {
    return (
        <Navigator>
            <Screen name="Home" component={Home} />
            <Screen name="Dashboard" component={Dashboard} />
        </Navigator>
    )
}

export default AppStack;