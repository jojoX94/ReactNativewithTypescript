import React, { FC, useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import firebase from 'firebase';
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const MainNav: FC = () => {
    const [user, setUser] = useState<any>(null);

    const bootstrap = () => {
        firebase.auth().onAuthStateChanged(_user => {
            if(_user) {
                setUser(_user);
            }
        })
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged(_user => {
            if(_user) {
                setUser(_user);
            }
        })
    }, [])
    
    return(
        <NavigationContainer>
            {user !== null ? <AppStack/> : <AuthStack/>}
        </NavigationContainer>
    )
}

export default MainNav;