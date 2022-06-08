import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

function Buttons() {
  return (
    <>
     <TouchableOpacity  
    
    style={{
      width:100,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'rgb(121, 218, 232)',
      padding:5,
      height:100,
      borderRadius:'100%',
      
    }}>
      <Text><MaterialIcons name="keyboard-voice" size={40} color="black" /></Text>
    </TouchableOpacity>
    </>
  )
}

export default Buttons;