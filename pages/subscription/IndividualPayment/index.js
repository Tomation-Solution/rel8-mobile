import { View, Text, FlatList, TextInput } from 'react-native'
import React, { useState } from 'react'
import Ionicon from 'react-native-vector-icons/Ionicons'
import tw from 'tailwind-react-native-classnames'
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import TobBar from '../../../components/topBar'
import TabbedButton from '../../../components/button/TabbedButton'
import { setSelectedLog } from 'react-native/Libraries/LogBox/Data/LogBoxData'
import ChatsCard from '../../../components/chat/ChatsCard'
import MessageField from '../../../components/chat/MessageField'
import { StackActions } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import All from './All';
import { StatusBar } from 'expo-status-bar';
import BalanceCard from '../../../components/account/BalanceCard';
import MembersOwing from './MembersOwing';


const Individual = ({ navigation }) => {
    const Stack = createNativeStackNavigator()
    const [selected, setSelected] = useState(0)

    const handlePressed = (value) => {
        if (value == 1) {
            navigation.navigate('membersowing')
            setSelected(value)
        } else {
            navigation.navigate('all')
            setSelected(value)
        }
    }

    return (
        <SafeAreaView style={tw`h-full bg-white px-2`}>
            
            <StatusBar backgroundColor={'#581c87'} showHideTransition='slide' />
            <TobBar
                body={
                    <View style={tw`flex-row justify-between px-3`}>
                        <Ionicon name='ios-chevron-back' onPress={() => navigation.goBack()} size={30} />
                        <Text style={tw`my-auto font-bold text-base`}>Individual Payment</Text>
                        <Ionicon name='md-notifications' style={tw`text-purple-800`} size={30} />
                    </View>
                }
            />

            <View style={tw`flex-row justify-between flex-wrap p-2 bg-gray-200 rounded`}>
                <BalanceCard
                    isAmount={false}
                    amount={'50,000'}
                    description="Total Subscribers"
                    bg="bg-blue-200 w-1/2"
                />
                <BalanceCard
                    isAmount={false}
                    amount={'20,000'}
                    description="Members Owing"
                    bg="bg-blue-200 w-1/2"
                />
            </View>
            <View style={tw`flex-row bg-green-100 my-5 rounded-lg py-2  px-2`}>
                <Ionicon name='ios-search' size={25} style={tw`mr-2`} />
                <TextInput
                    placeholder='Search'
                    style={tw`w-9/12`}
                />
            </View>

            <View style={tw`flex-row justify-center`}>
                <TabbedButton text='All' index={0} notSelected={"border-b-4 border-gray-400 w-1/2"} style_button={"border-b-4 border-purple-900 w-1/2"} selected={selected} pressed={() => handlePressed(0)} />
                <TabbedButton text='Members Owing' notSelected={"border-b-4 border-gray-400 w-1/2"} style_button={"border-b-4 border-purple-900 w-1/2"} index={1} selected={selected} pressed={() => handlePressed(1)} />
            </View>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='all' component={All} />
                <Stack.Screen name='membersowing' component={MembersOwing} />
            </Stack.Navigator>
        </SafeAreaView>
    )
}

export default Individual