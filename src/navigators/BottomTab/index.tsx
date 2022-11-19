import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { View } from "react-native";
import { tabData } from "./constants";
import React from 'react'

const Tab = createBottomTabNavigator();

const DashBoard: React.FC<{}> = () => {
    return (
        <View style={{flex:1}}>
            <Tab.Navigator
            initialRouteName={'UltimateFive'}
            screenOptions={{headerShown: false}}>
            {tabData.map(tab => (
                <Tab.Screen
                key={tab.label}
                name={tab.label}
                //insert component here
                component={tab.component}
                options={{
                    headerShown: false
                }}
                />
            ))}
            </Tab.Navigator>
            </View>
    )
}

export default DashBoard;