import React from 'react'
import { View, Text } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton'

const End = () => {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:30,textAlign:'center',marginBottom:10}}>THANKS for using this app.</Text>
            <Text style={{fontSize:20,textAlign:'center'}}>Feel free to leave a feedback at abhinavjamwal302@gmail.com</Text>
        </View>
    )
}

End.navigationOptions=(navData)=>{
    return{
        headerLeft: ()=>(
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item iconName='ios-menu' onPress={()=>{
            navData.navigation.toggleDrawer();
        }} />
    </HeaderButtons>
        )
    }
}

export default End
