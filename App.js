import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Buttons from './Component/Buttons';
import Input from './Component/Input';

export default function App() {
  return (
    <View style={styles.container}>
               <Text  style={{
                 fontSize:30,
                 color:'#fff',
                 marginBottom:100,
                 fontWeight:'900',
                 letterSpacing:2,
               }}>Speech app</Text>

      <Input/>
     <Buttons/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center',
    borderWidth:2,
    padding:10,
    backgroundColor:'rgb(120, 88, 166)',

  },
});
