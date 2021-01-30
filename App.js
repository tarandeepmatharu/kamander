import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Button } from 'react-native-paper';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={[styles.container,styles.center]}>
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
