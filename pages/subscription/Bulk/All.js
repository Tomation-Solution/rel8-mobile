import { View, Text, TextInput, FlatList, SafeAreaView, ScrollView, ActivityIndicator, Image, StatusBar, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import TobBar from '../../../components/topBar'
import BalanceCard from '../../../components/account/BalanceCard'
import { MemberCard } from '../../../components/members/MemberCard'
import Ionicon from 'react-native-vector-icons/Ionicons'

const BulkAll = ({navigation}) => {
    const data = [
        {name: 'SPNS', type: '3 months', users: 2000, renewDate: '22/03/2023'},
        {name: 'Savy Schools', type: '6 months', users: 800, renewDate: '12/03/2023'},
        {name: 'Lagos State University', type: '1 year', users: 20000, renewDate: '02/04/2023'},
        {name: 'Savy School', type: '3 months', users: 2000, renewDate: '22/03/2023'},
        {name: 'Lagos State University', type: '6 months', users: 800, renewDate: '22/03/2023'},
        {name: 'Savy School', type: '1 year', users: 20000, renewDate: '22/03/2023'},
        {name: 'Lagos State University', type: '3 months', users: 700, renewDate: '22/03/2023'},
        {name: 'Savy School', type: '6 months', users: 20000, renewDate: '22/03/2023'},
        {name: 'Savy School', type: '1 year', users: 20000, renewDate: '22/03/2023'},
        {name: 'Lagos State University', type: '3 months', users: 700, renewDate: '22/03/2023'},
        {name: 'Savy School', type: '1 year', users: 20000, renewDate: '22/03/2023'}
    ]

    return (
        <SafeAreaView style={tw`mx-3`}>
            <View style={tw`flex-row justify-between p-3 rounded bg-purple-300 mb-1`}>
                    <Text style={tw`text-xs w-1/4 text-center`}>Organization Name</Text>
                    <Text style={tw`text-xs w-1/4 text-center`}>Patyment Plan</Text>
                    <Text style={tw`text-xs w-1/4 text-center`}>Number of Users</Text>
                    <Text style={tw`text-xs w-1/4 text-center`}>Renewal Date</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={tw`h-3/4`}>
                <View>
                    {data.map(item =>(
                    <MemberCard
                        lenght={4}
                        name={item.name}
                        dept={item.type}
                        year={item.users}
                        button1={
                            <Text style={tw`text-xs text-center`}>{item.renewDate}</Text>}
                        // button2={<Ionicon style={tw`my-auto px-1 text-base text-red-800`}  name='trash' />}
                    />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default BulkAll