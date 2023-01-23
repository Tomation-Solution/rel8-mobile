import { View, Text } from "react-native"
import tw from "tailwind-react-native-classnames"
import RoundedButton from "../button/RoundedButton"

export const MemberCard =(props)=>{
    return(
        <View style={tw`bg-white p-2 flex-row justify-between`}>
            <Text style={tw`font-bold text-base ${props.lenght > 3 ? 'w-1/4': 'w-1/3'}`}>{props.name}</Text>
            <View style={tw`flex-row justify-between`}>
               {props.dept !== undefined ? <Text style={tw`my-auto w-1/3 ml-auto mr-auto`}>{props.dept}</Text> : null}
                {props.year !== undefined ? <Text style={tw`my-auto ${props.lenght > 3 ? 'w-1/4' : 'w-1/3'} ml-auto mr-auto`}>{props.year}</Text> : null}
                <View style={tw`flex-row justify-between ${props.lenght > 3 ? props.btnwidth : 'w-1/3'}`}>
                    {props.button1}
                    {props.button2}
                </View>
            </View>
        </View>
    )
}