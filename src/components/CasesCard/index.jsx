import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from 'expo-vector-icons';
import Lottie from 'lottie-react-native';

import check from '../../assets/animations/check.json';
import styles from './styles';


const CasesCard = ({ icon, commandText } ) => {

    let text = 'Esse cillum ullamco deserunt elit pariatur ut commodo est ex aliqua adipisicing Et et reprehenderit do aute ut sint sunt exercitation in Dolore eu id amet sit tempor nisi sunt in eu dolor esse.'
    const [animation, setAnimation] = useState(false);

    function sendOffer () {
        if (commandText !== 'Oferecer ajuda') 
            return false; 
        setAnimation(true);
        new Promise((resolve) => {
            setTimeout(resolve, 1600);
        }).then( () => {
            setAnimation(false);
        });
    }

    return (
        <LinearGradient 
            start={{x: 1, y: 0}} end={{x: 0, y: 1}}
            colors={['#1150ee', '#5271ff', '#0aa1ff']} 
            style={styles.cardContainer}
        >
            <View style={styles.cardHeader}>
                <Text style={styles.title}>
                    Compras no supermercado - 7.9km
                </Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.description}>
                    {text.length > 160 ? text.slice(0, 160) + '  ...' : text}
                </Text>
                <TouchableOpacity style={styles.action} onPress={sendOffer} >
                    <Text style={styles.actionText}>{commandText}</Text>
                    {animation ? <Lottie source={check} style={styles.animation} autoPlay loop resizeMode="contain" /> : <Ionicons name={icon} size={20} color="#fff" />}
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );

};

export default CasesCard;