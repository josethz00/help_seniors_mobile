import React, { useContext } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { FontAwesome, Ionicons } from 'expo-vector-icons';
import { RectButton } from 'react-native-gesture-handler';

import Header from '../../components/Header';
import Container from '../../components/Container';
import styles from './styles';
import AuthContext from '../../hooks/useAuth';


const Profile = ()=>{

    const { signOut } = useContext(AuthContext);

    return(
        <Container>
            <Header />
            <Image source={{ uri: 'https://avatars3.githubusercontent.com/u/50122248?s=460&u=e7c70333cc7b0816e2e6ac96eb17d4b346e8b21f&v=4' }} style={styles.profilePicture} />
            <Text style={styles.username}>
                Josef Hasmussen
            </Text>
            <Text style={styles.email}>
                jtsoares17@hotmail.com
            </Text>
            <RectButton style={styles.button}>
                <Text style={styles.buttonText}>
                    Editar foto
                </Text>
                <FontAwesome name="edit" size={30} color="#fff" />
            </RectButton>
            <TouchableOpacity style={styles.accountContainer} onPress={signOut}>
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