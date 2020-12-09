import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from 'expo-vector-icons';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import { useCredentials } from '../../hooks/useCredentials';
import { getDistance } from '../../utils/getDistance';
import { useGeoLocation } from '../../hooks/useGeoLocation';


const DetailCard = () => {

    const navigation = useNavigation();
    const [dataList, setDataList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const { token, userId } = useCredentials();
    const { latitude, longitude } = useGeoLocation();


    async function loadCases () {

        if (loading){
            return;
        }
        setLoading(true);
        const response = await api.get(`colabs/posts/find-post/status?status=Ativo&colab_id=${userId}&page=${page}`, {
            headers: {
                authorization: token
            }
        });
        setDataList([...dataList, ...response.data]);
        setPage(page+1);
        setLoading(false);
        return;

    }

    useEffect(() => {
        
        if (token && userId)
            loadCases();

    }, [userId, token]);


    return (
        <FlatList 
            showsVerticalScrollIndicator={false} 
            contentContainerStyle={styles.list}
            data={dataList} 
            keyExtractor={dataList => String(dataList.post_id)}
            onEndReached={loadCases}
            onEndReachedThreshold={0.2} 
            renderItem={({ item }) => (
            <LinearGradient 
                key={item.id}
                start={{x: 1, y: 0}} end={{x: 0, y: 1}}
                colors={['#1150ee', '#5271ff', '#0aa1ff']} 
                style={styles.cardContainer}
            >
                <View style={styles.cardHeader}>
                    <Text style={styles.title}>
                        {item.title} - {getDistance({ lat: latitude, lng: longitude }, { lat: item.latitude, lng: item.longitude })}
                    </Text>
                </View>
                <View style={styles.body}>
                    <View style={styles.description}>
                        <Image source={{ uri: 'https://images.unsplash.com/photo-1551861568-c0afa6653bc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=100' }} style={styles.profilePicture} />
                            <View>                       
                                <View style={styles.infoWrapper}>
                                    <Text style={styles.infoText} >
                                        Nome:
                                    </Text>
                                    <Text style={styles.infoTextDif}>
                                        {item.name}
                                    </Text>
                                </View>
                                <View style={styles.infoWrapper}>
                                    <Text style={styles.infoText} >
                                        Idade:
                                    </Text>
                                    <Text style={styles.infoTextDif}>
                                        {item.age}
                                    </Text>
                                </View>
                                <View style={[styles.infoWrapper, { marginBottom: 0 }]}>
                                    <Text style={styles.infoText} >
                                        Telefone:
                                    </Text>
                                    <Text style={styles.infoTextDif}>
                                        {item.tel}
                                    </Text>
                                </View>
                            </View>
                    </View>
                    <TouchableOpacity style={styles.action} onPress={() => {
                        navigation.navigate('MapModal', item);
                    }} >
                        <Text style={styles.actionText}>Ver mais detalhes</Text>
                        <Ionicons name="ios-arrow-dropright" size={20} color="#fff" />
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        )}/>
    );

};

export default DetailCard;