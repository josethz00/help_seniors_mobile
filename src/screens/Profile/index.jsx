import React, { useContext } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Ionicons } from 'expo-vector-icons';

import Header from '../../components/Header';
import Container from '../../components/Container';
import styles from './styles';
import AuthContext from '../../hooks/useAuth';


const Profile = ()=>{

    const { signOut } = useContext(AuthContext);

    return(
        <Container>
            <Header />
            <TouchableOpacity style={styles.logoutContainer} onPress={signOut}>
                <Text style={styles.logoutText}>Encerrar sessão</Text>
                <Ionicons name="md-exit" style={styles.logoutButton} size={22} />
            </TouchableOpacity> 
        </Container>
    );

}

export default Profile;