import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BookScreen from './screens/BookScreen';

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
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={HomeScreen}/> */}
        <Stack.Screen name="BookS" component={BookScreen}/>
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
