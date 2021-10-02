import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Modal} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import Comments from './Comments';

const Detail = ({navigation, route})=>{
    
    const {name, origin, picture, category, ingredients} = route.params;
    const [commentModalVisible, setCommentModalVisible] = useState(false);
    return(
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{uri:picture}}
             />
            
            <View style={styles.toolBox}>
                <TouchableOpacity style={{marginRight:10}}>
                    <MaterialIcons name="favorite-outline" size={24} color="grey" />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setCommentModalVisible(true)}>
                    <MaterialCommunityIcons name="comment-outline" size={24} color="grey" />
                </TouchableOpacity>
            </View>
            
            
            <ScrollView style={styles.content}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.mute}>From {origin}</Text>
                <Text style={styles.mute}>{category}</Text>
                <View style={{marginTop:10}}>
                    {
                        ingredients?(
                            ingredients.map(item => {
                                return(
                                    <View style={{marginBottom:10}}>
                                        <Text>{item}</Text>
                                    </View>
                                )
                            } )
                        ):(
                            <View>
                                <Text>No Ingredients</Text>
                            </View>
                        )
                    }
                </View>
                    
            </ScrollView>
            
            <Modal
                animationType="slide"
                transparent={false}
                visible={commentModalVisible}
                
            >
                <View>
                    <View style={styles.closingBox}>
                        <TouchableOpacity onPress={()=>setCommentModalVisible(false)}>
                            <MaterialCommunityIcons name="close-circle-outline" size={32} color="black" />
                        </TouchableOpacity>
                        
                    </View>
                
                </View>
                <Comments/>
            </Modal>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal:20,
        marginVertical:40,
        
    },
    content: {
        backgroundColor:'white',
        padding:20,
    },
    image: {
        width:'100%',
        height:200,
        marginBottom:10
    },
    title: {
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10,
    },
    mute: {
        fontSize:14,
        color:'#999',

    },
    toolBox:{
        backgroundColor:'white',
        marginBottom:10,
        padding:10,
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    modalBox:{
        paddingVertical:60,
    },
    closingBox: {
        marginTop:60,
        marginRight:10,
        alignItems: 'flex-end'
    }

})

export default Detail;