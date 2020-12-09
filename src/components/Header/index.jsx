import React, { useContext, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from 'expo-vector-icons';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../hooks/useAuth';
import api from '../../services/api';
import { useCredentials } from '../../hooks/useCredentials';


const Header = () => {

    const navigation = useNavigation();
    const { user } = useContext(AuthContext);
    const { token, userId } = useCredentials();


    return (
            <View style={styles.header}>
                <View style={styles.userSection}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home', { screen: 'Profile' } )} >
                        <Image source={{uri: 'https://avatars3.githubusercontent.com/u/50122248?s=460&u=e7c70333cc7b0816e2e6ac96eb17d4b346e8b21f&v=4'}} style={styles.userImage} />
                    </TouchableOpacity>
                    <Text ellipsizeMode='tail' numberOfLines={1} style={styles.userText}>Olá, <Text style={styles.userName}>{user}</Text></Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Home', { screen: 'Profile' } )} > 
                    <Ionicons name="ios-settings" color="#444" size={32} />
                </TouchableOpacity>
            </View>
    );

}

export default Header;