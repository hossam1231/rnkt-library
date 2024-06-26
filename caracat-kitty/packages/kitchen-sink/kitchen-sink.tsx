// In App.js in a new project

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Sink from './src/contents';

const Stack = createNativeStackNavigator();

const KitchenSink = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Sink">
        {props.screens.map((item) =>
          item.data.map((item) => (
            <Stack.Screen
              key={item.slug}
              name={item.slug}
              options={{
                title: item.title ?? item.name,
                headerShown: true,
                ...item.screenOptions,
              }}
              initialParams={{
                name: item.name,
                slug: item.slug,
                title: item.title,
              }}
              getComponent={item.getScreen}
            />
          ))
        )}
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Sink"
        >
          {(screen) => <Sink {...screen} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default KitchenSink;
