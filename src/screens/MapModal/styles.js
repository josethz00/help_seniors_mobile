import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    map: {
        position: 'relative',
        width: '100%',
        height: '100%'
    },
    goBack: {
        position: 'absolute',
        width: 56,
        height: 56,
        bottom: 32,
        left: 24,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5271ff',
        borderRadius: 20
    },
    calloutContainer: {
        width: 160,
        height: 46,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 16,
        justifyContent: 'center',
        elevation: 3,
    },
    calloutText: {
        color: '#5271ff',
        fontSize: 16
    },
    animation: {
        width: 86,
        height: 86
    }

});

export default styles;