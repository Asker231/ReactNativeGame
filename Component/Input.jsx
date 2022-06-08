import React from 'react'
import { TextInput } from 'react-native'


function Input() {
  return (
    <>
    <TextInput 
        
        style={{
          width:250,
          padding:10,
          borderWidth:1,
          borderRadius:30,
          marginBottom:30,
          fontSize:15,
          color:'#fff',
        }} />
    </>
  )
}

export default Input