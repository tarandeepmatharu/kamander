import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Button, ActivityIndicator } from 'react-native-paper';
import Form from './screens/Form';
import auth from '@react-native-firebase/auth';
const App = () => {
  const [initializing,setInitializing] = React.useState(true);
  const [user,setUser] = React.useState(null);
  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  },[]);

  function onAuthStateChanged(user){
    setUser(user);
    setInitializing(false);
  }

  async function handleAnonymousLogin(){
    try {
     await auth().signInAnonymously();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleAnonymousLogout(){
    try {
     await auth().signOut();
    } catch (error) {
      console.log(error);
    }
  }
  if(initializing){
    return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
              <ActivityIndicator size={50} color="blue"/>
          </View>
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={[styles.container,styles.center]}>
        {
        (user)?<Text>user logged in </Text> : <Text>user not logged in</Text>  
        }
       <Text>whassup buddy</Text>
       <View style={{width:'50%',marginTop:20}}>
       <Button mode="contained" onPress={handleAnonymousLogin} >
         login
       </Button>
       </View>
       <View style={{width:'50%',marginTop:20}}>
       <Button mode="contained" onPress={handleAnonymousLogout} >
         logout
       </Button>
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
