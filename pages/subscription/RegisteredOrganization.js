import { View, Text, TextInput, FlatList, SafeAreaView, ScrollView, ActivityIndicator, Image, StatusBar, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import TobBar from '../../components/topBar'
import BalanceCard from '../../components/account/BalanceCard'
import { MemberCard } from '../../components/members/MemberCard'
import Ionicon from 'react-native-vector-icons/Ionicons'

const RegisteredOrganization = ({navigation}) => {
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
            <StatusBar backgroundColor={'#581c87'} showHideTransition='slide' />
            <TobBar
                body={
                    <View style={tw`flex-row justify-between px-3`}>
                        <Ionicon name='ios-chevron-back' onPress={() => navigation.goBack()} size={30} />
                        <Text style={tw`my-auto font-bold text-base`}>Registered Organization</Text>
                        <Ionicon name='md-notifications' style={tw`text-purple-800`} size={30} />
                    </View>
                }
            />
            <View style={tw`flex-row justify-between flex-wrap p-2 bg-gray-200 rounded`}>
                <BalanceCard
                    isAmount={false}
                    amount={50}
                    description="Registered organization"
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
            <View style={tw`flex-row justify-between p-3 rounded bg-purple-300 mb-1`}>
                    <Text style={tw`text-xs w-1/4 text-center`}>Organization Name</Text>
                    <Text style={tw`text-xs w-1/4 text-center`}>Organization Type</Text>
                    <Text style={tw`text-xs w-1/4 text-center`}>Number of Users</Text>
                    <Text style={tw`text-xs w-1/4 text-center`}>Action</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} style={tw`h-3/6`}>
                <View>
                    {data.map(item =>(
                    <MemberCard
                        lenght={4}
                        name={item.name}
                        dept={item.type}
                        year={item.users}
                        button1={<Ionicon style={tw`my-auto px-1 text-base text-red-800`}  name='ios-pencil-sharp' />}
                        button2={<Ionicon style={tw`my-auto px-1 text-base text-red-800`}  name='trash' />}
                    />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default RegisteredOrganization