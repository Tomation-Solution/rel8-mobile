import { View, SafeAreaView,Text, Image, TextInput,TouchableOpacity, ActivityIndicator } from 'react-native'
import {useState} from 'react'
import tw from 'tailwind-react-native-classnames'
import RoundedButton from '../components/button/RoundedButton'
import ModalTemplate from '../components/Modal'
import Ionicon from 'react-native-vector-icons/Ionicons'
import { LoginUser } from '../connection/actions/authentication/authentication'


const OwingWidget=()=>{
  const [checked, setChecked] = useState(false)
  return(
    <View style={tw`bg-white mx-10 px-5 py-5 my-auto rounded-2xl`}>
      <Text style={tw`text-center mb-1`}> ACCOUNT LOCKED</Text>
      <Text style={tw`text-xs my-2`}>Pay outstanding fee to gain access to account</Text>
      <View style={tw`flex-row justify-between my-2`}>
        <Text>TOTAL OUTSTANDING: </Text>
        <Text>N 120,000 </Text>
      </View>

      <View style={tw`flex-row justify-between my-4`}>
        <Text style={tw`text-xs `}>Pay partial amount of Total outstanding</Text>
        {checked ? 
        <Ionicon name='checkbox' size={20} onPress={()=>setChecked(!checked)}/> : 
        <Ionicon name='ios-square-outline' size={20} onPress={()=>setChecked(!checked)}/>
      }
      
      </View>
      { checked ?
        <View style={tw`border-b  mb-2`  }> 
        <TextInput 
          placeholder='Enter Amount you want to pay'
        />
      </View>:<></>}
      <View style={tw`w-5/12 mx-auto`}>
        
        <RoundedButton text='Pay'/>
      </View>
      
    </View>
  )
}

const Login = ({navigation, route}) => {

  const [loginData, setLoginData] = useState({email:'', password:''})
  const [loading, setLoading] = useState(false)

  // console.log(route.params.user)
  const callback =()=>{
    setLoading(false)
    navigation.navigate('dashboard')
  }

  const errcallback =()=>{
    setLoading(false)
  }

  const handleLogin =()=>{
    if(loginData.password.length>2 && loginData.password.length>4){
      setLoading(true)
      LoginUser(loginData, callback,errcallback)
    }
  }

  

  return (
    <SafeAreaView >
      {/* <ModalTemplate body={<OwingWidget/>} /> */}
      <Image style={tw`mx-auto my-12`} source={require('../images/Logo/r8Logo.png')}/>
      <View style={tw`mx-10`}>
         <Text style={tw`text-base font-bold`}>{route.params ? route.params.state  + ' Chapter ':''}Login</Text>
          <Text>Enter login details.</Text>
      </View>
       
        <View style={tw`mt-3 mx-7 py-6 bg-white  shadow-sm rounded-3xl px-5`}>
          
          <View>
              <View style={tw`my-3 border-b`}>
                <Text>Username</Text>
                <TextInput
                  placeholder='username'
                  style={tw`py-2`}
                  onChangeText= {(text)=>setLoginData({...loginData, 'email':text})}
                />
              </View>
              <View style={tw`my-3 border-b`}>
                <Text>Password</Text>
                <TextInput
                  placeholder='Pasword'
                  style={tw`py-2`}
                  secureTextEntry={true}
                  onChangeText= {(text)=>setLoginData({...loginData, 'password':text})}

                />
              </View>
          </View>
          <View style={tw`mt-3`}>
            {loading ? (
              <ActivityIndicator color="purple" size="large" />
            ) : (
              <RoundedButton text="Login" pressed={() => callback()} />
            )}
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate('forgotPassword')}> 
            <Text style={tw`text-xs`}>Forgot Password?</Text>
          </TouchableOpacity>
          {/* <View style={tw`flex-row mx-auto py-4`}>
              <Text>Don't have an Account?</Text>
              <TouchableOpacity onPress={()=>navigation.navigate('register')}>
                <Text style={[tw`font-bold`, {color:'#365C2A'}]}> Register</Text>
              </TouchableOpacity>
          </View> */}
      </View>
    </SafeAreaView>
  )
}

export default Login