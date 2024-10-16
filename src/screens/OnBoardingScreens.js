import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackGround from '../components/BackGround'

const OnBoardingScreens = () => {
  return (
    <SafeAreaView style={styles.container}>
    <Text>Hiii</Text>
    

    <BackGround/>
  </SafeAreaView>
  )
}

export default OnBoardingScreens

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        display: 'flex',
    
        elevation:2
      },
})