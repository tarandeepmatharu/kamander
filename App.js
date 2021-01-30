import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Button } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={[styles.container,styles.center]}>
          <MaterialCommunityIcons 
          name="ab-testing"
          color="blue"
          size={50}
          />
         <Button mode="contained" onPress={() => console.log('button pressed')}>click me!</Button>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  center:{ 
    justifyContent:'center',
    alignItems:'center'
  }
});

export default App;
