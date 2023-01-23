import { View, TouchableOpacity, Text } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

const RoundedButton = (props) => {
  return (
    <TouchableOpacity
      style={[
        tw`py-2.5 my-2 rounded-full`,
        {
          backgroundColor:
            props.bgColor === undefined ? "#581c87" : props.bgColor,
          borderWidth: props.borderWidth,
          borderColor: props.borderColor,
        },
        props.style,
      ]}
      onPress={props.pressed}
    >
      <Text
        style={[
          tw`text-center`,
          props.textStyle,
          {
            color: props.textColor !== undefined ? props.textColor : "#ffffff",
          },
        ]}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;
