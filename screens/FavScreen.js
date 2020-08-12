import React from 'react'
import { StyleSheet,View,Text} from 'react-native'
import MealList from '../components/MealList'
import { useSelector } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'


const FavScreen = (props) => {

    const favMeals = useSelector(state => state.meals.favoriteMeals)
    if(favMeals.length === 0 || !favMeals){
        return <View style={styles.screen}>
            <Text>No Favorites meals found.Start adding some!</Text>
        </View>
    }

    return <MealList listData={favMeals} navigation={props.navigation} />
}

FavScreen.navigationOptions = (navData)=>{  
    return{
        headerTitle: 'Your Favorites',
        headerLeft: ()=>(
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item iconName='ios-menu' onPress={()=>{
            navData.navigation.toggleDrawer();
        }} />
    </HeaderButtons>
        )
    }
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default FavScreen
