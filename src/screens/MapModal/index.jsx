import React from 'react';
import { Image, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from 'expo-vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';


const MapModal = () => {

    const navigation = useNavigation();

    const route = useRoute();
    const item = route.params;


    return(
        <View>
            {
                route.params.latitude !== 0 && (
                    <MapView 
                        provider={PROVIDER_GOOGLE} 
                        zoom={15}
                        style={styles.map} 
                        initialRegion={{ latitude: Number(route.params.latitude), longitude: Number(route.params.longitude), latitudeDelta:0.0055, longitudeDelta:0.0055 }}
                    >
                        <Marker          
                            coordinate={{ latitude: Number(route.params.latitude), longitude: Number(route.params.longitude) }}
                            onPress={() => navigation.navigate('Modal', item)}
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