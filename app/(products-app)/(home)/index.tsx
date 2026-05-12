import { ThemedText } from '@/presentation/theme/components/themed-text'
import React, { Component } from 'react'
import { View } from 'react-native'

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{ paddingTop: 100, paddingHorizontal: 20 }}>
        <ThemedText> HomeScreen </ThemedText>
      </View>
    )
  }
}
