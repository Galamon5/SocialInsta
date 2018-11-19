import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Text, View, Button } from 'react-native';

const SignIn = (props) => {
  console.log(props);
  const { navigation } = props;
  return (
    <View>
      <Button
        title="Ir a SignUp"
        onPress={() => { navigation.navigate('SignUp'); }}
      />
      <Text>Signin</Text>
    </View>
  );
};
const SignUp = (props) => {
  const { navigation } = props;
  return (
    <View>
      <Button
        title="Ir a SignIn"
        onPress={() => { navigation.navigate('SignIn'); }}
      />
      <Text>Signup</Text>
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
