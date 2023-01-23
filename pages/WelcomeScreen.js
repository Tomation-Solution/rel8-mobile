import { Image, ImageBackground, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import RoundedButton from "../components/button/RoundedButton";

const AppWelcomeScreen = ({ navigation }) => {
  return (
    <View style={tw`flex-1`}>
        <View style={[tw`flex-auto bg-purple-900`]}>
          <Image
            style={tw`m-auto`}
            source={require("../images/Logo/r8Welcome.png")}
          />
        </View>
      <View style={tw`my-10`}>
        <View style={tw`px-4 mb-3`}>
          <Text style={[tw`text-4xl font-bold`,{color: "#581c87"}]}>Welcome Back</Text>
          {/* <Text style={tw`text-base tracking-wide`}>Already have an account?</Text> */}
        </View>
        <View style={tw`px-4 `}>
          <RoundedButton
            text="Login"
            style={tw`p-4`}
            textStyle={tw`text-xl font-semibold`}
            pressed={() => navigation.navigate("login")}
          />
        </View>
      </View>
    </View>
  );
};

export default AppWelcomeScreen;
