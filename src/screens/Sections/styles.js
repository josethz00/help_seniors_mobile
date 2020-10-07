import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    filtersContainer: {
        flex: 1,
        top: -60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    filters: {
        width: Dimensions.get('window').width / 2 - 70,
        height: Dimensions.get('window').width /2 - 70,
        borderRadius: 90,
        backgroundColor: '#E9E9f0',
        margin: 13,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5, 
        borderColor: '#ccc'
    },
    pageTitle: {
        top: 80,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22,
        marginBottom: 20
    },
    filterTitle: {
        fontSize: 14,
        color: '#666',
        marginTop: 3
    }
});

export default styles;