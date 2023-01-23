import { View, Text, TextInput, FlatList, SafeAreaView, ScrollView, ActivityIndicator, Image, StatusBar, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import TobBar from '../../../components/topBar'
import BalanceCard from '../../../components/account/BalanceCard'
import { MemberCard } from '../../../components/members/MemberCard'
import Ionicon from 'react-native-vector-icons/Ionicons'

const OrgOwing = ({navigation}) => {
    const data = [
        {name: 'SPNS', type: '3 months', users: 20000, renewDate: '22/03/2023'},
        {name: 'Savy Schools', type: '6 months', users: 8000, renewDate: '12/03/2023'},
        {name: 'Lagos State University', type: '1 year', users: 200000, renewDate: '02/04/2023'},
        {name: 'Savy School', type: '3 months', users: 20000, renewDate: '22/03/2023'},
        {name: 'Lagos State University', type: '6 months', users: 80000, renewDate: '22/03/2023'},
        {name: 'Savy School', type: '1 year', users: 200000, renewDate: '22/03/2023'},
        {name: 'Lagos State University', type: '3 months', users: 70000, renewDate: '22/03/2023'},
        {name: 'Savy School', type: '6 months', users: 20000, renewDate: '22/03/2023'},
        {name: 'Savy School', type: '1 year', users: 20000, renewDate: '22/03/2023'},
        {name: 'Lagos State University', type: '3 months', users: 70000, renewDate: '22/03/2023'},
        {name: 'Savy School', type: '1 year', users: 200000, renewDate: '22/03/2023'}
    ]

    return (
        <SafeAreaView style={tw`mx-3`}>
            <View style={tw`flex-row justify-between p-3 rounded bg-purple-300 mb-1`}>
                    <Text style={tw`text-xs w-1/4 text-center`}>Organization Name</Text>
                    <Text style={tw`text-xs w-1/4 text-center`}>Organization Type</Text>
                    <Text style={tw`text-xs w-1/4 text-center`}>Number of Users</Text>
                    <Text style={tw`text-xs w-1/4 text-center`}>Action</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={tw`h-3/4`}>
                <View>
                    {data.map(item =>(
                    <MemberCard
                        lenght={4}
                        name={item.name}
                        dept={item.type}
                        year={item.renewDate}
                        button1={<Text>{item.users}</Text>}
                        btnwidth='w-20'
                        // button2={<Ionicon style={tw`my-auto px-1 text-base text-red-800`}  name='trash' />}
                    />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default OrgOwing