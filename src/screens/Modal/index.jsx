import React from 'react';
import Container from '../../components/Container';
import { Image, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import styles from './styles'
import { Feather } from 'expo-vector-icons';
import { useNavigation } from '@react-navigation/native';

const Modal = ()=>{

    const navigation = useNavigation();

    return(
        <Container>
            <View style={styles.customHeader}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <Feather name="arrow-left" size={25} color="#5271ff" />
                </TouchableOpacity>
                <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
                <Text style={styles.caseTopTitle}>Ficha Completa do Caso</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.ScrollView}>
                <View style={styles.photo}>
                    <Image source={{ uri: 'https://images.unsplash.com/photo-1551861568-c0afa6653bc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=100' }} style={styles.userPhoto} />
                    <Text style={styles.username}>Erisvalda Pereira Rubia</Text>
                </View>
                <View style={styles.incident}>
                    <Text style={[styles.incidentProperty,{marginTop:0}]}>
                        Idade:
                    </Text>
                    <Text style={styles.incidentValue}>
                        70 anos
                    </Text>
                    <Text style={styles.incidentProperty}>
                        Caso:
                    </Text>
                    <Text style={styles.incidentValue}>
                        Compras no supermercado
                    </Text>
                    <Text style={styles.incidentProperty}>
                        Descrição:
                    </Text>
                    <Text style={styles.incidentValue}>
                        Esse cillum ullamco deserunt elit pariatur ut commodo est ex aliqua adipisicing Et et reprehenderit do aute ut sint sunt exercitation 
                        in Dolore eu id amet sit tempor nisi sunt in eu dolor esse.
                    </Text>  
                </View>
                <View style={styles.incident}>
                    <Text style={[styles.incidentProperty,{marginTop:0}]}>
                        Cidade:
                    </Text>
                    <Text style={styles.incidentValue}>
                        Taboão da Serra - SP
                    </Text>
                    <Text style={styles.incidentProperty}>
                        Endereço:
                    </Text>
                    <Text style={styles.incidentValue}>
                        Praça Miguel Ortega - nº 136
                    </Text>
                    <Text style={styles.incidentProperty}>
                        Complemento
                    </Text>
                    <Text style={styles.incidentValue}> 
                        Na frente da Cantina da Vovó
                    </Text>  
                </View>
                <View style={styles.contactBox}>
                    <Text style={styles.heroTitle}>Salve o Dia!</Text>
                    <Text style={styles.heroTitle}>Ajude a fazer o dia de alguém melhor.</Text>

                    <Text style={styles.heroDescription}>Entre em contato</Text>
                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.action} onPress={() => {}}>
                            <Text style={styles.actionText}>
                                SMS <Feather color="white" name="phone" size={24}/>
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.action} onPress={() => {}}>
                            <Text style={styles.actionText}>
                                E-mail <Feather color="white" name="mail" size={24}/>
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </Container>
    );

}

export default Modal;