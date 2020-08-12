import React from 'react'
import { FlatList } from 'react-native'
import {CATEGORIES} from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'

const CategoriesScreen = (props) => {
    // console.log(CATEGORIES)
    const renderGridItem = (itemData)=>{
        return <CategoryGridTile 
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={()=>{
                    props.navigation.navigate('CategoryMeal',{
                        categoryId:itemData.item.id
                    })
                }} />
    }
    return (
        <FlatList 
        data={CATEGORIES}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={renderGridItem} />
    ) 
}

CategoriesScreen.navigationOptions=(navData)=>{
    return{
        headerTitle:'Meal Categories',
        headerLeft: ()=>(
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item iconName='ios-menu' onPress={()=>{
            navData.navigation.toggleDrawer();
        }} />
    </HeaderButtons>
        )
    }
}

export default CategoriesScreen
