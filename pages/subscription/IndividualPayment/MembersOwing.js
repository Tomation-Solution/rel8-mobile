import { View, Text, TextInput, FlatList, SafeAreaView, ScrollView, ActivityIndicator, Image, StatusBar, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import TobBar from '../../../components/topBar'
import BalanceCard from '../../../components/account/BalanceCard'
import { MemberCard } from '../../../components/members/MemberCard'
import Ionicon from 'react-native-vector-icons/Ionicons'

const MembersOwing = ({navigation}) => {
    const data = [
        {name: 'SPNS', type: 2000, users: 20000},
        {name: 'Savy Schools', type: 800, users: 80000},
        {name: 'Lagos State University', type: 20000, users: 200000},
        {name: 'Savy School', type: 'Alumni', users: 20000},
        {name: 'Lagos State University', type: 800, users: 8000},
        {name: 'Savy School', type: 20000, users: 200000},
        {name: 'Lagos State University', type: 700, users: 7000},
        {name: 'Savy School', type: 20000, users: 200000},
        {name: 'Savy School', type: 20000, users: 200000},
        {name: 'Lagos State University', type: 700, users: 70000},
        {name: 'Savy School', type: 800, users: 200000}
      ]

    return (
        <SafeAreaView style={tw`mx-3`}>
            <View style={tw`flex-row justify-between p-3 rounded bg-purple-300 mb-1`}>
                    <Text style={tw`text-xs w-1/4 text-center`}>Organization Name</Text>
                    <Text style={tw`text-xs w-1/4 text-center`}>Number of{'\n'}User Owing</Text>
                    <Text style={tw`text-xs w-1/4 text-center`}>Total Amount Owed{'\n'}#</Text>
                    <Text style={tw`text-xs w-1/4 text-center`}>Action</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={tw`h-3/4`}>
                <View>
                    {data.map(item =>(
                    <MemberCard
                        lenght={4}
                        name={item.name}
                        dept={item.type}
                        year={item.users}
                        button1={<Ionicon style={tw`mx-auto px-1 text-base text-purple-800`}  name='eye' />}
                    />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default MembersOwing