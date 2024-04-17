// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import BookScreen from './screens/BookScreen';
// import BookDetailScreen from './screens/BookDetailScreen';

// // function HomeScreen(){
// //   return(
// //     <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
// //     <Text>
// //       HOME_SCREEN
// //     </Text>
// //   </View>  
// //   )
// // }

// const Stack=createNativeStackNavigator()
// export default function App() {
//   return (
//     // <View style={styles.container}>
//     //   <Text>Hi Aalok!</Text>
//     //   <StatusBar style="auto" />
//     // </View>
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='BookS'>
//         {/* <Stack.Screen name="Home" component={HomeScreen}/> */}
//         <Stack.Screen name="BookS" component={BookScreen}/>
//         <Stack.Screen name="BookDetail" component={BookDetailScreen}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import * as React from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/routers/src/TabRouter.js';
// import MobileListScreen from './screens/MobileListScreen.js';
// import MobileDetailScreen from './screens/MobileDetailScreen.js';

// const Tab = createBottomTabNavigator();
// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="MobileList" component={MobileListScreen} />
//         <Tab.Screen name="Details" component={MobileDetailScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {MobileListScreen} from './screens/MobileListScreen.js';
import {MobileDetailScreen} from './screens/MobileDetailScreen.js';
import { MobileListProvider } from './components/MobileListContext.js';

const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <MobileListProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="MobileListScreen">
          <Drawer.Screen name="MobileListScreen" component={MobileListScreen} />
          <Drawer.Screen name="MobileDetailScreen" component={MobileDetailScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </MobileListProvider>
  );
};

export default App;
