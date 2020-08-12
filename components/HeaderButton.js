import React from 'react'
import { View, Text, Platform } from 'react-native'
import {HeaderButton} from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'; 
import color from '../constants/color';


const CustomHeaderButton = (props) => {
    return <HeaderButton 
                {...props} 
                IconComponent={Ionicons} 
                iconSize={23} 
                color={Platform.OS === 'android'?'white': color.primaryColor} 
                 />
}

export default CustomHeaderButton
