import { View, Text, TextInput, FlatList, SafeAreaView, ScrollView, ActivityIndicator, Image, StatusBar, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import TobBar from '../../../components/topBar'
import BalanceCard from '../../../components/account/BalanceCard'
import { MemberCard } from '../../../components/members/MemberCard'
import Ionicon from 'react-native-vector-icons/Ionicons'

const All = ({navigation}) => {
    const data = [
        {name: 'SPNS', type: 'Club', users: 2000},
        {name: 'Savy Schools', type: 'Alumni', users: 800},
        {name: 'Lagos State University', type: 'Professional Body', users: 20000},
        {name: 'Savy School', type: 'Alumni', users: 2000},
        {name: 'Lagos State University', type: 'Club', users: 800},
        {name: 'Savy School', type: 'Professional Body   ', users: 20000},
        {name: 'Lagos State University', type: 'Club', users: 700},
        {name: 'Savy School', type: 'Professional Body   ', users: 20000},
        {name: 'Savy School', type: 'Professional Body   ', users: 20000},
        {name: 'Lagos State University', type: 'Club', users: 700},
        {name: 'Savy School', type: 'Professional Body   ', users: 20000}
      ]

    return (
        <SafeAreaView style={tw`mx-3`}>
            <View style={tw`flex-row justify-between p-3 rounded bg-purple-300 mb-1`}>
                    <Text style={tw`text-xs w-1/4 text-center`}>Organization Name</Text>
                    <Text style={tw`text-xs w-1/4 text-center`}>Number of Users</Text>
                    <Text style={tw`text-xs w-1/4 text-center`}>Action</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={tw`h-3/4`}>
                <View>
                    {data.map(item =>(
                    <MemberCard
                        lenght={3}
                        name={item.name}
                        year={item.users}
                        button1={<Ionicon style={tw`mx-auto px-1 text-base text-purple-800`}  name='eye' />}
                    />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default All