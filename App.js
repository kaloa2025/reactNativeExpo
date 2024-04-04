import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BookScreen from './screens/BookScreen';
import BookDetailScreen from './screens/BookDetailScreen';

// function HomeScreen(){
//   return(
//     <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
//     <Text>
//       HOME_SCREEN
//     </Text>
//   </View>  
//   )
// }

const Stack=createNativeStackNavigator()
export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Hi Aalok!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='BookS'>
        {/* <Stack.Screen name="Home" component={HomeScreen}/> */}
        <Stack.Screen name="BookS" component={BookScreen}/>
        <Stack.Screen name="BookDetail" component={BookDetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
