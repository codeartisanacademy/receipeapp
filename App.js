import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Detail from './src/screens/Detail';
import Comments from './src/screens/Comments'; 
 
const Stack = createStackNavigator();

const MyStacks = () => {
  return (
    <Stack.Navigator
      screenOptions={{

            headerStyle:{
              backgroundColor:'#e07a5f'
            }, 
            headerTintColor:'#f4f1de',
            headerTitleStyle:{
              fontWeight:'bold',
            }
          }
        }
      
    >
      <Stack.Screen 
        name="Home" 
        component={Home}
        options={
          {
            title:'All Receipes',
            
          }
        }
        />
      <Stack.Screen 
        name="Detail" 
        component={Detail}  
        options={
          {
            title:"Receipe"
          }
        }
      />
    </Stack.Navigator>
  )
}

export default function App() {
  return(
    <NavigationContainer>
      <MyStacks />
    </NavigationContainer>
  )
}