import React from 'react';
import { View, Text } from '../components/Themed';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function Example() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text bold size={32}>
          Home
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
  },
});
