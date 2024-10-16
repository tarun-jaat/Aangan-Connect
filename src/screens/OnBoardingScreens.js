import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackGround from '../components/BackGround'

export default class OnBoardingScreens extends Component {
  render() {
    return (
      <SafeAreaView >
        <BackGround/>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({})