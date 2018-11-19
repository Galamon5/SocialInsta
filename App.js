import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { RutasNoAutenticadas } from './components/NoAut/RutasNoAutenticadas';
const RutaNoAutenticada = createAppContainer(RutasNoAutenticadas);
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nombre: 'SocialInsta',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <RutaNoAutenticada />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
});
