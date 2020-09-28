import React from 'react';
import { StyleSheet, View, Text } from 'react-native'; 

const Container = () => {

    return(
        <View style={styles.container}>
            <Text>

            </Text>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingVertical: 10,
        margin: 10,
    }
});

export default Container;