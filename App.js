import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { RutasNoAutenticadas } from './components/NoAut/RutasNoAutenticadas';
import {RutasAutenticadas} from './components/Aut/RutasAutenticadas';

const RutaNoAutenticada = createAppContainer(RutasNoAutenticadas);
const RutaAutenticada = createAppContainer(RutasAutenticadas);
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
        <RutaAutenticada />
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
