import React from 'react';
import { Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Header from '../../components/Header';
import Container from '../../components/Container';
import styles from './styles';
import CasesCard from '../../components/CasesCard';


const Cases = () => {

    const route = useRoute();
    const section = route.params.section;

    return(
        <Container>
            <Header />
            <Text style={styles.sectionName}>SETOR: @{section.toUpperCase()}</Text>
            <CasesCard icon="ios-arrow-dropright" commandText="Oferecer ajuda" section={section} />
        </Container>
    );

}


export default Cases;