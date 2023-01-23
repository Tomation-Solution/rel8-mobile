import { View, TouchableOpacity,Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const TabbedButton = (props) => {
  return (
    <TouchableOpacity 
        style={props.index==props.selected ? tw`py-2.5 my-2 px-5 ${props.style_button}` : tw` py-2.5 my-2 ${props.notSelected}`} 
        onPress={props.pressed}
    >
      <Text style={props.index==props.selected ? tw`text-center font-bold text-purple-900` : tw` text-gray-600 font-bold text-center`}>{props.text}</Text>
    </TouchableOpacity>
  )
}

export default TabbedButton