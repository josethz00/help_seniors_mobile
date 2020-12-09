import React, { useContext, useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from 'expo-vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import Header from '../../components/Header';
import Container from '../../components/Container';
import styles from './styles';
import AuthContext from '../../hooks/useAuth';
import { useCredentials } from '../../hooks/useCredentials';
import api from '../../services/api';


const Profile = ()=>{

    const { userId, token } = useCredentials();
    const [email, setEmail] = useState(null);
    const { user, signOut } = useContext(AuthContext);

    useEffect(() => {

        if (userId && token) {
            api.get(`colabs/find-one/${userId}`, {
                headers: {
                    authorization: token
                }
            }).then((response) => {
                setEmail(response.data[0].email)
            });
        }

    }, [userId, token]);

    return(
        <Container>
            <Header />
            <Image source={{ uri: 'https://avatars3.githubusercontent.com/u/50122248?s=460&u=e7c70333cc7b0816e2e6ac96eb17d4b346e8b21f&v=4' }} style={styles.profilePicture} />
            <Text style={styles.username}>
                {user}
            </Text>
            <Text style={styles.email}>
                {email}
            </Text>
            <RectButton style={styles.button}>
                <Text style={styles.buttonText}>
                    Editar foto
                </Text>
                <FontAwesome name="edit" size={30} color="#fff" />
            </RectButton>
            <TouchableOpacity style={styles.accountContainer}>
                <Text style={styles.accountText}>Seu plano:</Text>
                <Text style={styles.account}>Usuário Lite</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={styles.logoutContainer} onPress={signOut}>
                <Text style={styles.logoutText}>Encerrar sessão</Text>
                <Ionicons name="md-exit" style={styles.logoutButton} size={22} />
            </TouchableOpacity> 
        </Container>
    );

}

export default Profile;