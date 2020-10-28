import React, { useContext, useEffect, useRef } from 'react';
import { Text, TextInput, View, Animated } from 'react-native';
import AuthContainer from '../../components/AuthContainer';
import { Feather, Ionicons } from 'expo-vector-icons';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import AuthContext from '../../hooks/useAuth';
import styles from './styles';

const SignIn = () => {
  
    const navigation = useNavigation();
    const { signIn } = useContext(AuthContext);

    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1400,
            useNativeDriver: true
        }).start();
    };

    useEffect(() => {
        fadeIn();
    }, []);

    return (
        <AuthContainer>
            <Animated.Text style={[styles.hello, { opacity: fadeAnim }]}>
                Olá
            </Animated.Text>
            <Animated.Text style={[styles.loginText, { opacity: fadeAnim }]}>
                Faça login na sua conta
            </Animated.Text>
            <View style={styles.inputSection}>
                <Animated.View style={[styles.inputWrapper, { opacity: fadeAnim }]}>
                    <Ionicons name='ios-mail' size={21}  />
                    <TextInput style={styles.input} placeholder="E-mail" autoCapitalize="none" keyboardType="email-address" />
                </Animated.View>
                <Animated.View style={[styles.inputWrapper, { marginBottom: 0, opacity: fadeAnim }]}>
                    <Ionicons name='ios-lock' size={21}  />
                    <TextInput style={styles.input} placeholder="Senha"  autoCapitalize="none" secureTextEntry={true} />
                </Animated.View>
            </View>
            <Animated.View style={[styles.loginSection, { opacity: fadeAnim }]}>
                <Text style={styles.enter}>Entrar</Text>
                <RectButton onPress={signIn} style={styles.button} >
                    <Feather name="arrow-right-circle" size={35} color="#fff" style={styles.buttonText} />
                </RectButton>
            </Animated.View>
            <Animated.View style={[styles.goToRegister, { opacity: fadeAnim }]}>
                <Text>
                    Não tem uma conta?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.goToRegisterText}>
                        Registre-se
                    </Text>
                </TouchableOpacity>
            </Animated.View>
        </AuthContainer>
    );
};

export default SignIn;