import React from 'react'
import { useSelector } from 'react-redux'
import {CATEGORIES} from '../data/dummy-data'
import MealList from '../components/MealList';
import {View,Text,StyleSheet} from 'react-native'


const CategoryMealsScreen = (props) => {

    const catId = props.navigation.getParam('categoryId');

    const availableMeals = useSelector(state => state.meals.meals)
    // console.log(availableMeals)
    const displayMeals = availableMeals.filter(
        meal=> meal.categoryIds.indexOf(catId) >=0
        //categoryIds is an array. indexOf() if -1 not found
    )
    // console.log(displayMeals)
    if(displayMeals.length === 0){
        return <View style={styles.screen}>
            <Text>No meals found,maybe check your filters?</Text>
        </View>
    }
    return <MealList 
            listData={displayMeals}
            navigation={props.navigation}
             />
}

CategoryMealsScreen.navigationOptions = (navigationData)=>{
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(
        category => category.id === catId
        );
        return{
            headerTitle:selectedCategory.title 
        }
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default CategoryMealsScreen
