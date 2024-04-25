import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './src/store';
import TodoList from './src/components/TodoList';
import LoginScreen from './src/components/Login'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <NavigationContainer>
           <Stack.Navigator>
            <Stack.Screen name="Login" options={{ headerShown: false }}>
              {props => <LoginScreen {...props} navigateToTodoList={() => props.navigation.navigate('TodoList')}  />}
            </Stack.Screen>
            <Stack.Screen name="TodoList" component={TodoList} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    backgroundColor:'white'
  },
});
