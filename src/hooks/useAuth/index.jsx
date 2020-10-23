import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';


const AuthContext = createContext({signed:false, user:{}});

export const AuthProvider = ({ children }) => { 

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadStorageData(){ 

            const storagedUser = await AsyncStorage.getItem('@HS:user');
            const storagedToken = await AsyncStorage.getItem('@HS:token');

            if(storagedUser && storagedToken){
                setUser(JSON.parse(storagedUser));
            }
            setLoading(false);
        }
        loadStorageData();
    }, []);

    async function signIn(){

        const username = 'Josef Hasmussen';
        setUser(username);
        await AsyncStorage.setItem('@HS:user', JSON.stringify(username));
        await AsyncStorage.setItem('@HS:token', 'TOKENDOHASMUSSEN');

    }
    
    function signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null);
        });
    }
    

    return (
        <AuthContext.Provider value={{ signed: !! user, user, signIn, signOut, loading }} >
            {children}
        </AuthContext.Provider>
    );
    
};

export default AuthContext;