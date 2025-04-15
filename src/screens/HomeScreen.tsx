import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomHeader from '../components/CustomHeader'
const HomeScreen = () => {
  return (
   <SafeAreaView style={{flex:1}}>
    <CustomHeader title='Home' />
    <View>
        <Text>HomeScreen</Text>
    </View>
    </SafeAreaView>
  )
}

export default HomeScreen