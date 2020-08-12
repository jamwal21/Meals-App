import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import {Platform} from 'react-native'
import color from '../constants/color';
import FavScreen from '../screens/FavScreen';
import {Ionicons} from '@expo/vector-icons'
import React from 'react';
import End from '../screens/End';

const defaultStackNavOptions = {
        headerStyle:{
            backgroundColor: Platform.OS === 'android'? color.primaryColor:'white'
        },
        headerTitleStyle:{
            fontFamily:'open-sans-bold'
        },
        headerBackTitleStyle:{
            fontFamily:'open-sans'
        },
        headerTintColor: Platform.OS === 'android'? 'white' : color.accentColor 
}
const navigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeal: CategoryMealsScreen,
    MealDetail: MealDetailScreen
},{
    initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
});


const favNavigator = createStackNavigator({
    Favorites: FavScreen,
    MealDetail: MealDetailScreen
},{
    defaultNavigationOptions: defaultStackNavOptions
})

const tabNavigator = createBottomTabNavigator({
    Meals: {
        screen: navigator,
        navigationOptions:{
            tabBarIcon:(tabInfo)=>{
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: color.primaryColor,
            tabBarLabel: 'Meals!!!'
        }
    },
    Favorites:{
        screen: favNavigator ,
        navigationOptions:{
            tabBarIcon:(tabInfo)=>{
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            }
        }
    }
},{
    tabBarOptions:{
        activeTintColor: color.accentColor
    }
})

const endNavigator = createStackNavigator({
    Feedback: End
},{
    defaultNavigationOptions: defaultStackNavOptions
})

const mainNavigator = createDrawerNavigator({
    Meals: tabNavigator,
    Feedback: endNavigator
},{
    contentOptions:{
        activeTintColor:color.accentColor,
        labelStyle:{
            fontFamily: 'open-sans-bold'
        }
    }
})

export default createAppContainer(mainNavigator)