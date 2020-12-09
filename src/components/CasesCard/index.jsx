import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from 'expo-vector-icons';
import Lottie from 'lottie-react-native';

import confetti from '../../assets/animations/confetti.json';
import styles from './styles';
import { useCredentials } from '../../hooks/useCredentials';
import { useGeoLocation } from '../../hooks/useGeoLocation';
import api from '../../services/api';
import { getDistance } from '../../utils/getDistance';


const CasesCard = ( { icon, commandText, section } ) => {

    const [animation, setAnimation] = useState(false);
    const [dataList, setDataList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const { token, userId } = useCredentials();
    const { latitude, longitude } = useGeoLocation();


    function sendOffer (postId, index) {
        if (commandText !== 'Oferecer ajuda') 
            return false; 
        setAnimation(true);
        new Promise((resolve) => {
            setTimeout(resolve, 1600);
            api.put(`users/posts/update/${postId}`, {
                status: 'Em espera',
                push_token: dataList[index].push_token,
                colab_id: userId
            },
            {
                headers: {
                    authorization: token
                }
            }).catch(() => {
                alert('Não foi possível enviar a solicitação');
            });
        }).then(() => {
            setAnimation(false);
            setDataList(dataList.filter(data => data.post_id !== postId));
        });
    }


    async function loadCases () {

        if (loading){
            return;
        }
        setLoading(true);
        try {
            if (!section) {
                const response = await api.get(`colabs/posts/find-post/status?status=${commandText}&colab_id=${userId}&page=${page}`, {
                    headers: {
                        authorization: token
                    }
                });
                setDataList([...dataList, ...response.data]);
                setPage(page+1);
                setLoading(false);
            }
            else {
                const response = await api.get(`colabs/posts/index?section=${section}&page=${page}`, {
                    headers: {
                        authorization: token
                    }
                });
                setDataList([...dataList, ...response.data]);
                setPage(page+1);
                setLoading(false);
            }

            return;
        }
        catch (err) {
            setLoading(false);
            return;
        }

    }


    useEffect(() => {

        if (token && userId)
            loadCases();

    }, [userId, token]);

    return (
        <>
            <FlatList
                showsVerticalScrollIndicator={false} 
                contentContainerStyle={styles.list}
                data={dataList} 
                keyExtractor={dataList => String(dataList.post_id)}
                onEndReached={loadCases}
                onEndReachedThreshold={0.2} 
                renderItem={({ item, index }) => (
                <LinearGradient 
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
                        <Text style={styles.description}>
                            {item.description.length > 160 ? item.description.slice(0, 160) + '  ...' : item.description}
                        </Text>
                        <TouchableOpacity style={styles.action} onPress={() => sendOffer(item.post_id, index)} >
                            <Text style={styles.actionText}>{commandText}</Text>
                            <Ionicons name={icon} size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            )}/>
            {animation && (
                <Lottie source={confetti} style={{ display: 'flex', alignSelf: 'center', top: '25%', position: 'absolute', zIndex: 2, width: 250, height: 250 }} autoPlay loop resizeMode="contain" />
            )}
        </>
    );
};

export default CasesCard;