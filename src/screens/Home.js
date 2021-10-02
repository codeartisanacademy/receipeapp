import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

const data = [
    {
        id:1,
        name: "Nasi Goreng",
        category: "Main Dish",
        origin: "Indonesia",
        picture: 'https://awsimages.detik.net.id/community/media/visual/2021/08/25/resep-nasi-goreng-sosis-ala-warung-bhakti_43.jpeg?w=700&q=90',
        ingredients: ['500 gram nasi', '1 telur', '3 tee spoons cooking oil', '5 bawah merah', '2 bawang putih', '2 cabe', '1 sendok makan garam']
    },
    {
        id:2,
        name: "Pizza",
        category: "Main Dish",
        origin: "Italy",
        picture: 'https://img-global.cpcdn.com/recipes/f1ce5c99c2244f54/680x482cq70/simple-pizza-pasti-jadi-resipi-foto-utama.jpg',
        ingredients: ['2 ½ cups warm water', '1 teaspoon sugar', '2 teaspoons active dry yeast', '7 cups all-purpose flour (875 g), plus more for dusting', '6 tablespoons extra virgin olive oil', '1 ½ teaspoons kosher salt', '¼ cup semolina flour (30 g)']
    },
    {
        id:3,
        name: "Brownies",
        category: "Dessert",
        origin: "USA",
        picture: "https://www.inspiredtaste.net/wp-content/uploads/2016/06/Brownies-Recipe-2-1200.jpg",
        ingredients:['½ cup butter', '1 cup white sugar', '2 eggs', '1 teaspoon vanilla extract','⅓ cup unsweetened cocoa powder','½ cup all-purpose flour','¼ teaspoon salt','¼ teaspoon baking powder']
    },
    {
        id:4,
        name: "Garlic Bread",
        category: "Appetizer",
        origin: "USA",
        picture:'https://media.suara.com/pictures/970x544/2020/09/01/92390-ilustrasi-garlic-bread-pixabaydistelapparath.jpg',
        ingredients:['Italian Bread', 'Garlic', 'Butter', 'Salt','⅓ cup unsweetened cocoa powder','½ cup all-purpose flour','¼ teaspoon salt','¼ teaspoon baking powder']
    }
]

const HeaderList = ()=>{
    return(
        <View>
            <Text>List All Receipes</Text>
        </View>
    )
}

const Home = ({navigation})=>{
    const renderDataItem = ({item})=>{
        return(
            <View style={styles.itemContainer}>
                <TouchableOpacity onPress={()=>navigation.navigate("Detail", {name: item.name, origin: item.origin, category:item.category, picture: item.picture, ingredients:item.ingredients})}>
                    <Text>{item.name}</Text>
                    <Text>{item.category}</Text>
                </TouchableOpacity>
                
            </View>
        )
    }
    return(
        <View style={styles.container}>
            <FlatList
              data={data}  
              renderItem={renderDataItem}
              ListHeaderComponent={<HeaderList/>}
              ListHeaderComponentStyle={{marginBottom:20, paddingVertical:10, fontWeight:'bold', backgroundColor:'#fff', alignItems:'center',}}
              stickyHeaderIndices={[0]}
              keyExtractor={item=>item.id.toString()}
            />
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal:20,
        marginVertical:40,
    },
    itemContainer:{
        borderBottomWidth:1,
        borderBottomColor:"#cecece",
        paddingVertical:10,
        paddingHorizontal:6,
        backgroundColor:'white'
    }
})

export default Home;