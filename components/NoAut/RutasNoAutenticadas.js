import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Text, View, Button } from 'react-native';

const SignIn = (props) => {
  const { navigation } = props;
  return (
    <View style= {{ flex: 1, justifyContent: 'center' }}>
      <Text>Componente SignIn</Text>
      <Button
        title="Ir a SignUp"
        onPress={() => { navigation.navigate('SignUp'); }}
      />
      <Text>SignIn</Text>
    </View>
  );
};
const SignUp = (props) => {
  const { navigation } = props;
  return (
    <View style= {{ flex: 1, justifyContent: 'center' }}>
      <Text>Componente SignUp</Text>
      <Button
        title="Regresar"
        onPress={() => { navigation.goBack(); }}
      />
      <Text>SignUp</Text>
    </View>
  );
}

const RutasNoAutenticadas = createStackNavigator({
  SignIn: {
    screen: SignIn,
  },
  SignUp: {
    screen: SignUp,
  },
}, {
  headerMode: 'none',
});

export { RutasNoAutenticadas };
