import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    cardContainer: {
        width: Dimensions.get('window').width - 55,
        height: 160,
        backgroundColor: '#5271ff',
        marginTop: 20, 
        alignSelf: 'center', 
        borderRadius: 20
    },
    cardHeader: {
        height: 40,
        backgroundColor: '#6492ff',
        borderTopEndRadius : 15,
        borderTopStartRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15
    },
    body: {
        padding: 20
    },
    description: {
        color: '#fff',
    },
    action: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    actionText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
        marginRight: 15
    },
    animation: {
        width: 24,
        height: 24
    }
});

export default styles;