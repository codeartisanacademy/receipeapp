import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Comments = ()=>{
    return(
        <View style={styles.container}>
            
            <Text>Comments</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal:20,
        marginVertical:40,
    },
    
})

export default Comments;