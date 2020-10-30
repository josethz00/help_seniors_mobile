import React, { useState, useEffect } from 'react';
import { Image, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from 'expo-vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useGeolocation } from '../../hooks/useGeoLocation';


const MapModal = () => {

    const { latitude, longitude } = useGeolocation();
    const navigation = useNavigation()
    
    return(
        <View>
            {
                latitude !== 0 && (
                    <MapView 
                        provider={PROVIDER_GOOGLE} 
                        zoom={15}
                        style={styles.map} 
                        initialRegion={{ latitude, longitude, latitudeDelta:0.0055, longitudeDelta:0.0055 }}
                    >
                        <Marker          
                            coordinate={{ latitude, longitude }}
                            onPress={() => navigation.navigate('Modal')}
                        >
                            <View style={{ backgroundColor: '#fff', borderRadius: 16 }}>
                                <Image source={require('../../assets/animations/marker.gif')} style={{ width: 75, height: 75 }} />
                            </View>
                        </Marker>
                    </MapView>
                )
            }
            <RectButton style={styles.goBack} onPress={() => { navigation.goBack() }}>
                <Feather name="arrow-left" size={23} color="#FFF" />
            </RectButton>
        </View>
    );

}

export default MapModal;