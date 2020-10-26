import React, { useEffect, useRef } from 'react';
import { Text, Animated } from 'react-native';
import AuthContainer from '../../components/AuthContainer';
import { Feather, Ionicons } from 'expo-vector-icons';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import Input from '../../components/Input';

const SignUp = () => {
  
    const navigation = useNavigation();

    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1400,
            useNativeDriver: true
        }).start();
    };

    function createAccount () {
        alert('Conta criada com sucesso!');
        navigation.navigate('AddressForm');
    }

    useEffect(() => {
        fadeIn();
    }, []);

    return (
        <AuthContainer>
            <Animated.Text style={[styles.loginText, { opacity: fadeAnim }]}>
                Crie já a sua conta
            </Animated.Text>
            <Animated.View style={styles.inputSection}>
                <Animated.View style={[styles.inputWrapper, { opacity: fadeAnim }]}>
                    <Ionicons name='ios-person' size={21} />
                    <Input style={styles.input} placeholder="Nome" autoCapitalize="none" />
                </Animated.View>
                <Animated.View style={[styles.inputWrapper, { opacity: fadeAnim }]}>
                    <Ionicons name='ios-mail' size={21} />
                    <Input style={styles.input} placeholder="E-mail"  autoCapitalize="none" keyboardType="email-address" />
                </Animated.View>
                <Animated.View style={[styles.inputWrapper, { opacity: fadeAnim }]}>
                    <Ionicons name='ios-call' size={21} />
                    <Input style={styles.input} placeholder="Telefone"  autoCapitalize="none" keyboardType="phone-pad" />
                </Animated.View>
                <Animated.View style={[styles.inputWrapper, { opacity: fadeAnim }]}>
                    <Ionicons name='ios-lock' size={21} />
                    <Input style={styles.input} placeholder="Senha"  autoCapitalize="none" secureTextEntry={true} />
                </Animated.View>
                <Animated.View style={[styles.inputWrapper, { opacity: fadeAnim }]}>
                    <Ionicons name='ios-lock' size={21} />
                    <Input style={styles.input} placeholder="Confirmação de senha"  autoCapitalize="none" secureTextEntry={true} />
                </Animated.View>
            </Animated.View>
            <Animated.View style={[styles.loginSection, { opacity: fadeAnim }]}>
                <Text style={styles.enter}>Cadastrar</Text>
                <RectButton onPress={createAccount} style={styles.button} >
                    <Feather name="arrow-right-circle" size={35} color="#fff" style={styles.buttonText} />
                </RectButton>
            </Animated.View>
            <Animated.View style={[styles.goToRegister, { opacity: fadeAnim }]}>
                <Text>
                    Já tem uma conta?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.goToRegisterText}>
                        Fazer login
                    </Text>
                </TouchableOpacity>
            </Animated.View>
        </AuthContainer>
    );
};

export default SignUp;