import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, TouchableOpacity, Text } from 'react-native';
import { MaterialCommunityIcons, Entypo } from 'expo-vector-icons'
import Container from '../../components/Container';
import Header from '../../components/Header';
import styles from './styles';

const Sections = ()=>{

    const navigation = useNavigation();

    const dataList = [
                        {text: <Text style={styles.filterTitle}>Saúde</Text>, name: <MaterialCommunityIcons size={64} name="medical-bag"/>}, 
                        {text: <Text style={styles.filterTitle}>Compras</Text>, name: <MaterialCommunityIcons size={64} name="cart" />}, 
                        {text: <Text style={styles.filterTitle}>Social</Text>, name: <Image style={{width: 67, height: 67}} source={require('../../assets/images/talking.png')} />}, 
                        {text: <Text style={styles.filterTitle}>Mudanças</Text>, name: <Entypo size={64} name="box" />}
                    ];

    return(
        <Container>
            <Header />
            <Text style={styles.pageTitle}>Olá, como deseja colaborar hoje?</Text>
            <FlatList
                    contentContainerStyle={styles.filtersContainer}
                    data={dataList}
                    renderItem={({item}) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <View key={item.id} style={styles.filters}>
                                {item.name}
                                {item.text}
                            </View>
                        </TouchableOpacity>
                    )}
                    numColumns={2}
            />
        </Container>
    );

}

export default Sections;