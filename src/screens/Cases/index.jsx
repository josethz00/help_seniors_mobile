import React from 'react';
import { FlatList, Text } from 'react-native';

import Header from '../../components/Header';
import Container from '../../components/Container';
import styles from './styles';
import CasesCard from '../../components/CasesCard';


const Cases = ()=>{

    const dataList = [
        {id: '1', text: <Text style={styles.filterTitle}>Saúde</Text>}, 
        {id: '2', text: <Text style={styles.filterTitle}>Compras</Text>}, 
        {id:'3',  text: <Text style={styles.filterTitle}>Social</Text>}, 
        {id:'4',  text: <Text style={styles.filterTitle}>Mudanças</Text>},
        {id:'5',  text: <Text style={styles.filterTitle}>Mudanças</Text>},
        {id:'6',  text: <Text style={styles.filterTitle}>Mudanças</Text>},
        {id:'7',  text: <Text style={styles.filterTitle}>Mudanças</Text>},
        {id:'8',  text: <Text style={styles.filterTitle}>Mudanças</Text>},
        {id:'9',  text: <Text style={styles.filterTitle}>Mudanças</Text>},
        {id:'10',  text: <Text style={styles.filterTitle}>Mudanças</Text>},
        {id:'11',  text: <Text style={styles.filterTitle}>Mudanças</Text>},
        {id:'12',  text: <Text style={styles.filterTitle}>Mudanças</Text>},
        {id:'13',  text: <Text style={styles.filterTitle}>Mudanças</Text>},
        {id:'14',  text: <Text style={styles.filterTitle}>Mudanças</Text>},
        {id:'15',  text: <Text style={styles.filterTitle}>Mudanças</Text>},
        {id:'16',  text: <Text style={styles.filterTitle}>Mudanças</Text>},
        {id:'17',  text: <Text style={styles.filterTitle}>Mudanças</Text>},
        {id:'18',  text: <Text style={styles.filterTitle}>Mudanças</Text>},
        {id:'19',  text: <Text style={styles.filterTitle}>Mudanças</Text>}
    ];

    return(
        <Container>
            <Header />
            <Text style={styles.sectionName}>SETOR: @SAÚDE</Text>
            <FlatList showsVerticalScrollIndicator={false} contentContainerStyle={styles.list} data={dataList} renderItem={({item}) => (
                <CasesCard key={item.id} icon="ios-arrow-dropright" commandText="Oferecer ajuda" />
            )}/>
        </Container>
    );

}


export default Cases;