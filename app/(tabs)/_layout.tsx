import { Tabs } from 'expo-router';
import React from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor:'orange',
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon:({color,size})=>(
            <Entypo name="home" size={size} color={color} />
          )
        
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
        tabBarIcon:({color,size})=>(
          <AntDesign name="infocirlce" size={size} color={color} />
        )
        }}
      />
    </Tabs>
  );
}
