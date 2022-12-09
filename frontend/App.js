import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {MaterialIcons,Entypo, Octicons,Ionicons } from '@expo/vector-icons';
import Home from './components/Home';
import Category from './components/Category';
import MyPage from './components/MyPage';
import LikedItems from './components/LikedItems';
import StyleInput from './components/StyleInput';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Category" component={Category} options={{
          tabBarIcon: () => (
            <Entypo 
                name="menu"
                size={24}
                color="black"
            />
        ),
        }} />
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: () => (
            <MaterialIcons
                name="home"
                size={30}
                color="black"
            />
        ),
        }} />
        <Tab.Screen name="MyPage" component={MyPage} options={{
          tabBarIcon: () => (
                <Ionicons
                    name="person"
                    size={24}
                    color="black"
                />
        ),
        }}/>
        <Tab.Screen name="LikedItems" component={LikedItems} options={{
              tabBarIcon: () => (
                <Octicons
                    name="heart"
                    size={24}
                    color="black"
                />
        ),
        }} />
        <Tab.Screen name="StyleInput" component={StyleInput} options={{
              tabBarIcon: () => (
                <Entypo
                    name="camera"
                    size={24}
                    color="black"
                />
        ),
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;