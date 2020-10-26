import React, { useEffect, useRef, useState } from 'react';
import { Text, Animated, View } from 'react-native';
import AuthContainer from '../../components/AuthContainer';
import { Feather } from 'expo-vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { Picker } from '@react-native-community/picker';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import styles from './styles';
import Input from '../../components/Input';

const AddressForm = () => {
  
    const navigation = useNavigation();
    const [ufs, setUfs] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('0');
    const [selectedUf, setSelectedUf] = useState('0');

    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1400,
            useNativeDriver: true
        }).start();
    };

    function createAccount () {
        navigation.navigate('SignIn');
    }

    useEffect(() => {
        fadeIn();
        alert('Agora que se cadastrou, só falta o seu endereço')
    }, []);

    useEffect(()=>{
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response=>{
            const ufInitials = response.data.map(uf=>uf.sigla);
            setUfs(ufInitials);
        });
    }, []);

    useEffect(()=>{
        axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`).then(response=>{
            const cityNames = response.data.map(city=>city.nome);
            setCities(cityNames);
        });
    }, [selectedUf]);


    return (
        <AuthContainer>
            <Animated.Text style={[styles.loginText, { opacity: fadeAnim }]}>
                Cadastre mais algumas informações
            </Animated.Text>
            <Animated.View style={styles.inputSection}>
                <Animated.View style={[styles.selectWrapper, { opacity: fadeAnim }]}>
                    <View  style={styles.selectUf} >
                        <Picker style={{ color: '#aaa' }} selectedValue={selectedUf} onValueChange={(itemValue)=> setSelectedUf(String(itemValue))}>
                            {ufs.map(uf=>(
                            <Picker.Item key={uf} label={uf} value={uf} />
                            ))}
                        </Picker>  
                    </View>
                    <View style={styles.selectCity}>
                        <Picker style={{ color: '#aaa' }} selectedValue={selectedCity} onValueChange={(itemValue)=> setSelectedCity(String(itemValue))}>
                            {cities.map(city=>(
                            <Picker.Item key={city} label={city} value={city} />
                            ))}
                        </Picker>
                    </View>
                </Animated.View>
                <Animated.View style={[styles.inputWrapper, { opacity: fadeAnim }]}>
                    <Input style={styles.input} placeholder="Rua"  autoCapitalize="none" />
                </Animated.View>
                <Animated.View style={[styles.inputWrapper, { opacity: fadeAnim }]}>
                    <Input style={styles.input} placeholder="Número"  autoCapitalize="none" keyboardType="number-pad" />
                </Animated.View>
                <Animated.View style={[styles.inputWrapper, { opacity: fadeAnim }]}>
                    <Input style={styles.input} placeholder="Complemento"  autoCapitalize="none" />
                </Animated.View>
            </Animated.View>
            <Animated.View style={[styles.loginSection, { opacity: fadeAnim }]}>
                <Text style={styles.enter}>Cadastrar</Text>
                <RectButton onPress={() => createAccount()} style={styles.button} >
                    <Feather name="arrow-right-circle" size={35} color="#fff" style={styles.buttonText} />
                </RectButton>
            </Animated.View>
        </AuthContainer>
    );
};

export default AddressForm;