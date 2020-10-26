import { Dimensions, StyleSheet } from 'react-native';


const styles = StyleSheet.create({

    photo: {
        padding: 24,
        borderRadius: 8,
        backgroundColor:'#fff',
        marginTop: 48,
        flexDirection: 'row',
        alignItems: 'center', 
        marginBottom:16
    },
    userPhoto: {
        backgroundColor: '#ccc',
        borderRadius: 200,
        width: 80,
        height: 80,
        resizeMode: 'cover'
    },  
    username: {
        fontWeight: 'bold',
        marginLeft: 20,
        fontSize:18
    },
    incident:{
        padding: 24,
        borderRadius: 8,
        backgroundColor:'#fff',
        marginBottom:16
    },
    incidentList:{
        marginTop: 32,
    },
    incidentProperty:{
        fontSize:14,
        color: '#41414d',
        fontWeight:'bold',
        marginTop: 24,
    },
    incidentValue:{
        marginTop: 8,
        color: '#737380',
        fontSize:15,
        
    },
    contactBox:{
        padding: 24,
        borderRadius: 8,
        backgroundColor:'#fff',
        marginBottom:16,
    },
    heroTitle:{
        fontWeight: 'bold',
        color: '#13131a',
        lineHeight: 30,
        fontSize: 20
    },
    heroDescription:{
        fontSize:15,
        color: '#737380',
        marginTop:16,
    },
    actions:{
        flexDirection: 'row',
        marginTop: 20,
        width: Dimensions.get('window').width
    },
    action:{
        backgroundColor: '#5271ff',
        borderRadius:8,
        marginRight: 5,
        height:50,
        width: 150,
        justifyContent:'center',
        alignItems:'center'
    },
    actionText:{
        color:'#FFF',
        fontSize:15,
        fontWeight:'bold'
    },
    ScrollView: {
        marginBottom: 100,
    },
    customHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    logo: {
        width: 44, 
        height: 44, 
        alignSelf: 'center',
        marginLeft: 25
    },
    caseTopTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 25
    }

});

export default styles;