import React from 'react';
import Container from '../../components/Container';
import { Image, Text, TouchableOpacity, View, ScrollView, Linking } from 'react-native';
import styles from './styles'
import { Feather } from 'expo-vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

const Modal = ()=>{

    const navigation = useNavigation();

    const route = useRoute();

    function sendMail(){
        MailComposer.composeAsync({
            subject:`Ajuda no Caso: ${route.params.title}`,
            recipients: ['josethomaz2003@gmail.com'],
            body: 'Olá, me chamo José, estou enviando essa mensagem para combinar os detalhes da minha ajuda'
        })
    }

    function sendSMS(){
        Linking.openURL(`sms://+5511944952003?body=Olá, me chamo José, estou enviando essa mensagem para combinar os detalhes da minha ajuda`)
    }

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
                    <Image source={{ uri: 'https://images.unsplash.com/photo-1533101585792-27f81a845550?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=100' }} style={styles.userPhoto} />
                    <Text style={styles.username}>Garibaldi Neto</Text>
                </View>
                <View style={styles.incident}>
                    <Text style={[styles.incidentProperty,{marginTop:0}]}>
                        Idade:
                    </Text>
                    <Text style={styles.incidentValue}>
                        {route.params.age}
                    </Text>
                    <Text style={styles.incidentProperty}>
                        Caso:
                    </Text>
                    <Text style={styles.incidentValue}>
                        {route.params.title}
                    </Text>
                    <Text style={styles.incidentProperty}>
                        Descrição:
                    </Text>
                    <Text style={styles.incidentValue}>
                        {route.params.description}
                    </Text>  
                </View>
                <View style={styles.incident}>
                    <Text style={[styles.incidentProperty,{marginTop:0}]}>
                        Cidade:
                    </Text>
                    <Text style={styles.incidentValue}>
                        {route.params.city}
                    </Text>
                    <Text style={styles.incidentProperty}>
                        Endereço:
                    </Text>
                    <Text style={styles.incidentValue}>
                        {route.params.street} - nº {route.params.number}
                    </Text>
                </View>
                <View style={styles.contactBox}>
                    <Text style={styles.heroTitle}>Venha contribuir!</Text>
                    <Text style={styles.heroTitle}>Ajude a fazer o dia de alguém melhor.</Text>

                    <Text style={styles.heroDescription}>Entre em contato</Text>
                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.action} onPress={sendSMS}>
                            <Text style={styles.actionText}>
                                SMS <Feather color="white" name="phone" size={24}/>
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.action} onPress={sendMail}>
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