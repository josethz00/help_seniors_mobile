import React, { useState, useEffect } from 'react';
import { Image, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from 'expo-vector-icons';
import { useNavigation } from '@react-navigation/native';


const MapModal = () => {

    const [initialPosition, setInitialPosition] = useState([0, 0]);
    const navigation = useNavigation()

    useEffect(()=>{
        async function loadPosition(){

            const { status } = await Location.requestPermissionsAsync();

            if(status!=='granted'){
                Alert.alert('Oooops', 'Precisamos da sua permissão para obter a localização');
                return;
            }
            const location = await Location.getCurrentPositionAsync();
            const { latitude, longitude } = location.coords;
            setInitialPosition([latitude, longitude]);
        }

        loadPosition();

    }, []);
    
    return(
        <View>
            {
                initialPosition[0] !== 0 && (
                    <MapView 
                        provider={PROVIDER_GOOGLE} 
                        zoom={15}
                        style={styles.map} 
                        initialRegion={{latitude: initialPosition[0], longitude: initialPosition[1], latitudeDelta:0.0055, longitudeDelta:0.0055}}
                    >
                        <Marker          
                            coordinate={{latitude: initialPosition[0], longitude: initialPosition[1]}}
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