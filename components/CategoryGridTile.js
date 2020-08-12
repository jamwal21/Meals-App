import React from 'react'
import { View, Text,TouchableOpacity,StyleSheet} from 'react-native'

const CategoryGridTile = (props) => {

    return (
        <View style={styles.gridItem} >
            <TouchableOpacity style={{flex:1}}
        onPress={props.onSelect} >
            <View style={{...styles.container,...{backgroundColor:props.color}}}>
                <Text 
                numberOfLines={2}
                style={styles.title}>{props.title}</Text>
            </View>
        </TouchableOpacity> 
        </View>
    )
}

const styles=StyleSheet.create({
    gridItem:{
        flex:1,
        margin:15,
        height:150
    },
    container:{
        flex:1,
        borderRadius:10,
        // shadowColor:'black',
        // shadowOpacity:0.6,
        elevation:5,
        padding:15,
        justifyContent:'flex-end',
        alignItems:'flex-end'
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:18,
        textAlign:'right'
    }
})

export default CategoryGridTile
